import React, { useEffect, useState, useCallback } from "react";
import {
  SimpleGrid, Container, Heading, Spinner, Center, Text, VStack,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  FormControl, FormLabel, Input, Button, useDisclosure, useToast
} from "@chakra-ui/react";
import { api } from "../../api/axios";
import EventCard from "../../pages/admin/EventCard";

const EventGallery = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvento, setSelectedEvento] = useState(null);

  // Form state
  const [saving, setSaving] = useState(false);
  const [userData, setUserData] = useState({ nombre: "", email: "", phone: "", id_user_fk: null });
  const toast = useToast();

  const fetchEventos = useCallback(async (isSilent = false) => {
    try {
      if (!isSilent) setLoading(true);
      const res = await api.get("/eventos");
      setEventos(res.data);
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
    setUserData({ nombre: "", email: "", phone: "" });
    onOpen();
  };

  const handleCloseModal = () => {
    onClose();
    setSelectedEvento(null);
  };

  const handleInscribir = async () => {
    if (!userData.nombre || !userData.email || !selectedEvento) return toast({
      title: "Por favor completa todos los campos.",
      status: "warning",
    });

    setSaving(true);
    try {
      // Los nombres aquí (nombre, email, phone) deben ser iguales a los del backend
      const payload = {
        nombre: userData.nombre,
        email: userData.email,
        phone: userData.phone,
        id_user_fk: null
      };

      // Usamos selectedEvento.id_event
      await api.post(`/eventos/${selectedEvento.id_event}/inscribir`, payload);

      handleCloseModal(); // Esto setea selectedEvento a null y cierra el modal

      toast({
        title: "¡Inscrito con éxito!",
        status: "success",
        duration: 4000
      });

      // Refresco silencioso
      setTimeout(() => {
        fetchEventos(true);
      }, 300);

    } catch (err) {
      console.error("Error capturado:", err.response?.data);
      toast({
        title: "Error de inscripción",
        description: err.response?.data?.message || "Ocurrió un error inesperado",
        status: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Center h="60vh">
        <Spinner size="xl" color="teal.500" thickness="4px" />
      </Center>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={2} mb={10} textAlign="center">
        <Heading as="h1" size="2xl" color="gray.800">Próximos Eventos</Heading>
        <Text fontSize="lg" color="gray.600">
          Explora nuestra temática y aparta tu lugar ahora mismo.
        </Text>
      </VStack>

      {error ? (
        <Center><Text color="red.500">{error}</Text></Center>
      ) : eventos.length === 0 ? (
        <Center p={10} borderWidth={1} borderRadius="lg" borderStyle="dashed">
          <Text color="gray.500">No hay eventos disponibles por el momento.</Text>
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {eventos.map((evento) => (
            <EventCard
              key={evento.id_event}
              evento={evento}
              onOpen={handleOpenModal}
            />
          ))}
        </SimpleGrid>
      )}

      {/* MODAL ÚNICO */}
      {isOpen && (

        <Modal isOpen={isOpen} onClose={handleCloseModal} motionPreset="none" isCentered>
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
                    onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    placeholder="email@ejemplo.com"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    type="phone"
                    placeholder="+51 999999999"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  />
                </FormControl>

                <Button colorScheme="blue" w="full" onClick={handleInscribir} isLoading={saving}>
                  Confirmar mi cupo
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default EventGallery;
