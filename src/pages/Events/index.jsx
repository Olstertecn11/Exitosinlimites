// src/pages/Events.jsx (ajusta la ruta según tu proyecto)
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Container,
  Spinner,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Button,
  Badge,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { api } from "../../api/axios"; // <-- ajusta si tu api está en otra ruta
import EventCard from "../admin/EventCard";

const HERO_BG =
  "https://exitossinlimites.com/wp-content/uploads/2021/10/breadcrumb.jpg";

export default function Events({ NavbarComponent }) {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filtros
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("date_desc"); // date_desc | date_asc | title_asc

  // modal inscripción (reutilizado del home)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvento, setSelectedEvento] = useState(null);

  const [saving, setSaving] = useState(false);
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    phone: "",
    id_user_fk: null,
  });

  const toast = useToast();

  const fetchEventos = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get("/eventos");
      setEventos(Array.isArray(res.data) ? res.data : []);
      setError(null);
    } catch (err) {
      setError("No se pudieron cargar los eventos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEventos();
  }, [fetchEventos]);

  const handleOpenModal = (evento) => {
    setSelectedEvento(evento);
    setUserData({ nombre: "", email: "", phone: "", id_user_fk: null });
    onOpen();
  };

  const handleCloseModal = () => {
    onClose();
    setSelectedEvento(null);
  };

  const handleInscribir = async () => {
    if (!userData.nombre || !userData.email || !selectedEvento) {
      toast({
        title: "Por favor completa todos los campos.",
        status: "warning",
      });
      return;
    }

    setSaving(true);
    try {
      const payload = {
        nombre: userData.nombre,
        email: userData.email,
        phone: userData.phone,
        id_user_fk: null,
      };

      await api.post(`/eventos/${selectedEvento.id_event}/inscribir`, payload);

      handleCloseModal();

      toast({
        title: "¡Inscrito con éxito!",
        status: "success",
        duration: 4000,
      });

      // refresco silencioso
      setTimeout(() => fetchEventos(), 300);
    } catch (err) {
      toast({
        title: "Error de inscripción",
        description: err.response?.data?.message || "Ocurrió un error inesperado",
        status: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  // helpers: intenta tomar fecha desde distintos campos (por si el backend cambia nombres)
  const getEventDateValue = (e) => {
    const raw =
      e?.fecha ||
      e?.fecha_evento ||
      e?.date ||
      e?.event_date ||
      e?.start_date ||
      e?.fecha_inicio ||
      null;
    const d = raw ? new Date(raw) : null;
    return d && !isNaN(d.getTime()) ? d : null;
  };

  const getEventTitle = (e) =>
    (e?.titulo || e?.title || e?.nombre || e?.name || "").toString();

  const filteredEventos = useMemo(() => {
    const term = q.trim().toLowerCase();

    let list = [...eventos];

    if (term) {
      list = list.filter((e) => {
        const title = getEventTitle(e).toLowerCase();
        const desc = (e?.descripcion || e?.description || "").toString().toLowerCase();
        const place = (e?.lugar || e?.location || "").toString().toLowerCase();
        return (
          title.includes(term) ||
          desc.includes(term) ||
          place.includes(term)
        );
      });
    }

    // sort
    list.sort((a, b) => {
      const da = getEventDateValue(a);
      const db = getEventDateValue(b);
      if (sort === "title_asc") {
        return getEventTitle(a).localeCompare(getEventTitle(b));
      }
      if (sort === "date_asc") {
        if (!da && !db) return 0;
        if (!da) return 1;
        if (!db) return -1;
        return da.getTime() - db.getTime();
      }
      // date_desc default
      if (!da && !db) return 0;
      if (!da) return 1;
      if (!db) return -1;
      return db.getTime() - da.getTime();
    });

    return list;
  }, [eventos, q, sort]);

  if (loading) {
    return (
      <Center h="60vh">
        <Spinner size="xl" color="teal.500" thickness="4px" />
      </Center>
    );
  }

  return (
    <Box bg="#F3F7FB" minH="100vh">
      {/* HERO */}
      <Box
        bgImage={HERO_BG ? `url(${HERO_BG})` : undefined}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgColor={HERO_BG ? undefined : "#074070"}
        position="relative"
        pb={{ base: 16, md: 24 }}
        pt={0}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient:
            "linear(to-b, rgba(3,27,53,0.85), rgba(3,27,53,0.7))",
          zIndex: 0,
        }}
      >
        <Box
          position="relative"
          zIndex={1}
          backdropFilter="blur(10px) brightness(0.9)"
        >
          {NavbarComponent}
        </Box>

        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          color="white"
          mt="2rem"
          position="relative"
          zIndex={1}
        >
          <VStack align="flex-start" spacing={3}>
            <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800">
              Events
            </Heading>
            <Text opacity={0.9}>
              Explora todos los eventos disponibles y aparta tu lugar.
            </Text>
          </VStack>
        </Box>
      </Box>

      {/* BREADCRUMB */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} mt={8} mb={8}>
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="0 15px 40px rgba(15, 23, 42, 0.15)"
          px={8}
          py={4}
          maxW={{ base: "100%", md: "360px" }}
          ml="auto"
        >
          <Text fontSize="sm">
            <Text as="span" color="gray.500">
              Home
            </Text>{" "}
            /{" "}
            <Text as="span" fontWeight="600" color="#111827">
              Events
            </Text>
          </Text>
        </Box>
      </Box>

      {/* CONTENIDO */}
      <Container maxW="container.xl" pb={16}>
        <Box bg="white" borderRadius="2xl" boxShadow="0 15px 40px rgba(15, 23, 42, 0.08)" p={{ base: 4, md: 8 }}>
          {/* Header + filtros */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "stretch", md: "center" }}
            justify="space-between"
            gap={4}
            mb={6}
          >
            <VStack align="flex-start" spacing={1}>
              <HStack spacing={3}>
                <Heading fontSize={{ base: "2xl", md: "3xl" }} color="#0F172A">
                  Próximos Eventos
                </Heading>
                <Badge colorScheme="blue" fontSize="0.8em">
                  {filteredEventos.length}
                </Badge>
              </HStack>
              <Text color="gray.600">
                Busca por nombre, descripción o lugar.
              </Text>
            </VStack>

            <HStack spacing={3} flexWrap="wrap" justify={{ base: "flex-start", md: "flex-end" }}>
              <InputGroup w={{ base: "100%", md: "320px" }}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input
                  bg="#F8FAFC"
                  placeholder="Buscar evento..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </InputGroup>

              <Select
                bg="#F8FAFC"
                w={{ base: "100%", md: "220px" }}
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="date_desc">Fecha: más recientes</option>
                <option value="date_asc">Fecha: más próximos</option>
                <option value="title_asc">Nombre: A → Z</option>
              </Select>

              <Button
                variant="outline"
                onClick={() => {
                  setQ("");
                  setSort("date_desc");
                }}
              >
                Limpiar
              </Button>
            </HStack>
          </Flex>

          <Divider mb={6} />

          {error ? (
            <Center py={10}>
              <VStack spacing={3}>
                <Text color="red.500">{error}</Text>
                <Button onClick={fetchEventos} colorScheme="blue">
                  Reintentar
                </Button>
              </VStack>
            </Center>
          ) : filteredEventos.length === 0 ? (
            <Center py={14} borderWidth={1} borderRadius="lg" borderStyle="dashed">
              <VStack spacing={2}>
                <Text color="gray.600" fontWeight="600">
                  No encontramos eventos con ese criterio.
                </Text>
                <Text color="gray.500" fontSize="sm">
                  Prueba con otra búsqueda o limpia los filtros.
                </Text>
              </VStack>
            </Center>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {filteredEventos.map((evento) => (
                <EventCard
                  key={evento.id_event}
                  evento={evento}
                  onOpen={handleOpenModal}
                />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Container>

      {/* MODAL INSCRIPCIÓN (ÚNICO) */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          motionPreset="none"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Inscripción al evento</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Nombre Completo</FormLabel>
                  <Input
                    placeholder="Tu nombre"
                    value={userData.nombre}
                    onChange={(e) =>
                      setUserData({ ...userData, nombre: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    placeholder="email@ejemplo.com"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    type="phone"
                    placeholder="+51 999999999"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                  />
                </FormControl>

                <Button
                  colorScheme="blue"
                  w="full"
                  onClick={handleInscribir}
                  isLoading={saving}
                >
                  Confirmar mi cupo
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
