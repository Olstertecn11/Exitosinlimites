import React, { useState, useEffect } from "react";
import {
  Box, Button, Table, Thead, Tbody, Tr, Th, Td, Badge,
  useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalCloseButton, FormControl, FormLabel, Input,
  VStack, Textarea, useToast, IconButton, Heading, HStack, Text
} from "@chakra-ui/react";
import { FiPlus, FiTrash2, FiUsers, FiMail, FiPhone } from "react-icons/fi";
import { api } from "../../api/axios";
import ConfirmDialog from "../../components/common/ConfirmDialog";

const EventManager = () => {
  const [eventos, setEventos] = useState([]);
  const [participantes, setParticipantes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null); // ID para cancelar

  const toast = useToast();

  // Modales
  const { isOpen, onOpen, onClose } = useDisclosure(); // Crear evento
  const { isOpen: isUsersOpen, onOpen: onUsersOpen, onClose: onUsersClose } = useDisclosure(); // Participantes
  const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onClose: onConfirmClose } = useDisclosure(); // Diálogo confirmación

  const [form, setForm] = useState({
    title: "",
    location: "",
    tematic: "",
    speaker: "",
    material: "",
    url_image: "",
    schedule: "",
    sites_availables: ""
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

  // Función para abrir el diálogo de confirmación
  const openCancelDialog = (id) => {
    setSelectedEventId(id);
    onConfirmOpen();
  };

  // Función que realmente llama al API después de confirmar
  const handleConfirmCancel = async () => {
    setLoading(true);
    try {
      const r = await api.patch(`/eventos/${selectedEventId}/cancelar`);
      toast({ title: "Evento cancelado", status: "info" });
      fetchEventos();
      onConfirmClose();
    } catch (err) {
      console.log(err)
      toast({ title: "No se pudo cancelar, verifíque que su evento no tenga inscripciones antes de cancelar.", status: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/admin/eventos", form);
      toast({ title: "Evento creado", status: "success" });
      onClose();
      fetchEventos();
    } catch (err) {
      toast({ title: "Error al crear", status: "error" });
    } finally { setLoading(false); }
  };

  const verParticipantes = async (id_event) => {
    try {
      const res = await api.get(`/admin/eventos/${id_event}/participantes`);
      setParticipantes(res.data);
      onUsersOpen();
    } catch (err) {
      toast({ title: "Error al cargar participantes", status: "error" });
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

      <Box overflowX="auto" boxShadow="sm" borderWidth="1px" borderRadius="lg" bg="white">
        <Table variant="simple">
          <Thead bg="gray.50">
            <Tr>
              <Th>Evento</Th>
              <Th>Lugar</Th>
              <Th>Fecha</Th>
              <Th>Cupos</Th>
              <Th>Estado</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {eventos.map((ev) => (
              <Tr key={ev.id_event}>
                <Td>
                  <Text fontWeight="bold">{ev.title}</Text>
                  <Text fontSize="xs" color="gray.500">{ev.tematic}</Text>
                </Td>
                <Td>{ev.location}</Td>
                <Td fontSize="sm">{new Date(ev.schedule).toLocaleString()}</Td>
                <Td>{ev.sites_availables}</Td>
                <Td>
                  <Badge colorScheme={ev.estado === "activo" ? "green" : "red"}>
                    {ev.status}
                  </Badge>
                </Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton
                      aria-label="Ver participantes"
                      icon={<FiUsers />}
                      colorScheme="purple"
                      variant="ghost"
                      onClick={() => verParticipantes(ev.id_event)}
                    />
                    <IconButton
                      aria-label="Cancelar"
                      icon={<FiTrash2 />}
                      colorScheme="red"
                      variant="ghost"
                      isDisabled={ev.estado === "cancelado"}
                      onClick={() => openCancelDialog(ev.id_event)} // Cambiado aquí
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* --- DIÁLOGO DE CONFIRMACIÓN REUTILIZABLE --- */}
      <ConfirmDialog
        isOpen={isConfirmOpen}
        onClose={onConfirmClose}
        onConfirm={handleConfirmCancel}
        title="Cancelar Evento"
        message="¿Estás seguro de que deseas cancelar este evento? Esta acción notificará a los sistemas y no se podrán recibir más inscripciones."
        confirmText="Sí, cancelar"
        isLoading={loading}
      />

      {/* MODAL: LISTA DE PARTICIPANTES (Tu código existente) */}
      <Modal isOpen={isUsersOpen} onClose={onUsersClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Participantes Inscritos</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {participantes.length === 0 ? (
              <Text color="gray.500">No hay inscritos todavía.</Text>
            ) : (
              <VStack align="stretch" spacing={4}>
                {participantes.map((p) => (
                  <Box key={p.id_event_registration} p={3} borderWidth="1px" borderRadius="md" bg="gray.50">
                    <Text fontWeight="bold">{p.user_fullname}</Text>
                    <HStack fontSize="sm" color="gray.600" mt={1}>
                      <FiMail /> <Text>{p.user_email}</Text>
                    </HStack>
                    <HStack fontSize="sm" color="gray.600">
                      <FiPhone /> <Text>{p.user_phone || "Sin teléfono"}</Text>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* MODAL: CREACIÓN DE EVENTO (Tu código existente) */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleCreate}>
            <ModalHeader>Crear Nuevo Evento</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Título del Evento</FormLabel>
                  <Input placeholder="Ej. Taller de React" onChange={e => setForm({ ...form, title: e.target.value })} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Lugar</FormLabel>
                  <Input placeholder="Ej. Auditorio Central" onChange={e => setForm({ ...form, location: e.target.value })} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Temática</FormLabel>
                  <Input placeholder="Ej. Desarrollo Web" onChange={e => setForm({ ...form, tematic: e.target.value })} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Orador</FormLabel>
                  <Input placeholder="Ej. Juan Pérez" onChange={e => setForm({ ...form, speaker: e.target.value })} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Material</FormLabel>
                  <Textarea placeholder="Describa el material del evento" onChange={e => setForm({ ...form, material: e.target.value })} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>URL de la Imagen</FormLabel>
                  <Input placeholder="Ej. https://ejemplo.com/imagen.jpg" onChange={e => setForm({ ...form, url_image: e.target.value })} />
                </FormControl>
                <Box w="full" borderBottom="1px" borderColor="gray.200" my={2} >
                  {form.url_image && (<img src={form.url_image} alt="Preview" style={{ maxWidth: '100%', borderRadius: '8px' }} />)}
                </Box>
                <HStack w="full">
                  <FormControl isRequired>
                    <FormLabel>Horario</FormLabel>
                    <Input type="datetime-local" onChange={e => setForm({ ...form, schedule: e.target.value })} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Cupos Iniciales</FormLabel>
                    <Input type="number" onChange={e => setForm({ ...form, sites_availables: e.target.value })} />
                  </FormControl>
                </HStack>
                <Button w="full" colorScheme="blue" type="submit" isLoading={loading} mt={4}>
                  Guardar Evento
                </Button>
              </VStack>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EventManager;
