import React, { useState, useEffect } from "react";
import {
  Box, Button, Table, Thead, Tbody, Tr, Th, Td, Badge,
  useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalCloseButton, FormControl, FormLabel, Input,
  VStack, Textarea, useToast, IconButton, Heading, HStack, Text
} from "@chakra-ui/react";
import { FiPlus, FiTrash2, FiCalendar, FiMapPin, FiUser } from "react-icons/fi";
import { api } from "../api/axios"; // Ajusta la ruta a tu archivo de axios

const EventManager = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [form, setForm] = useState({
    titulo: "", lugar: "", tematica: "", horario: "",
    sitiosDisponibles: "", material: "", orador: "", imagen_url: ""
  });

  const fetchEventos = async () => {
    try {
      const res = await api.get("/eventos");
      setEventos(res.data);
    } catch (err) {
      toast({ title: "Error al cargar eventos", status: "error" });
    }
  };

  useEffect(() => { fetchEventos(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/eventos", form);
      toast({ title: "Evento creado", status: "success" });
      onClose();
      fetchEventos();
    } catch (err) {
      toast({ title: "Error al crear", status: "error" });
    } finally { setLoading(false); }
  };

  const handleCancelar = async (id) => {
    if (!window.confirm("¿Seguro que quieres cancelar este evento?")) return;
    try {
      await api.patch(`/eventos/${id}/cancelar`);
      toast({ title: "Evento cancelado", status: "info" });
      fetchEventos();
    } catch (err) {
      toast({ title: "No se pudo cancelar", status: "error" });
    }
  };

  return (
    <Box p={8}>
      <HStack justifyContent="space-between" mb={6}>
        <Heading size="lg">Gestión de Eventos</Heading>
        <Button leftIcon={<FiPlus />} colorScheme="blue" onClick={onOpen}>
          Nuevo Evento
        </Button>
      </HStack>

      <Box overflowX="auto" boxShadow="sm" borderWidth="1px" borderRadius="lg">
        <Table variant="simple">
          <Thead bg="gray.50">
            <Tr>
              <Th>Evento</Th>
              <Th>Fecha</Th>
              <Th>Cupos</Th>
              <Th>Estado</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {eventos.map((ev) => (
              <Tr key={ev.id}>
                <Td fontWeight="bold">{ev.titulo}</Td>
                <Td>{new Date(ev.horario).toLocaleString()}</Td>
                <Td>{ev.sitiosDisponibles}</Td>
                <Td>
                  <Badge colorScheme={ev.estado === "activo" ? "green" : "red"}>
                    {ev.estado}
                  </Badge>
                </Td>
                <Td>
                  <IconButton
                    icon={<FiTrash2 />}
                    colorScheme="red"
                    variant="ghost"
                    isDisabled={ev.estado === "cancelado"}
                    onClick={() => handleCancelar(ev.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Modal de Creación */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleCreate}>
            <ModalHeader>Crear Evento</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Título</FormLabel>
                  <Input onChange={e => setForm({ ...form, titulo: e.target.value })} />
                </FormControl>
                <HStack w="full">
                  <FormControl isRequired>
                    <FormLabel>Lugar</FormLabel>
                    <Input onChange={e => setForm({ ...form, lugar: e.target.value })} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Horario</FormLabel>
                    <Input type="datetime-local" onChange={e => setForm({ ...form, horario: e.target.value })} />
                  </FormControl>
                </HStack>
                <HStack w="full">
                  <FormControl isRequired>
                    <FormLabel>Orador</FormLabel>
                    <Input onChange={e => setForm({ ...form, orador: e.target.value })} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Cupos</FormLabel>
                    <Input type="number" onChange={e => setForm({ ...form, sitiosDisponibles: e.target.value })} />
                  </FormControl>
                </HStack>
                <FormControl>
                  <FormLabel>URL Imagen</FormLabel>
                  <Input onChange={e => setForm({ ...form, imagen_url: e.target.value })} />
                </FormControl>
                <FormControl>
                  <FormLabel>Materiales</FormLabel>
                  <Textarea onChange={e => setForm({ ...form, material: e.target.value })} />
                </FormControl>
              </VStack>
            </ModalBody>
            <Box p={6} textAlign="right">
              <Button onClick={onClose} mr={3}>Cancelar</Button>
              <Button colorScheme="blue" type="submit" isLoading={loading}>Guardar</Button>
            </Box>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EventManager;
