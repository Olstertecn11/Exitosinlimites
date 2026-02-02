import React, { useState } from "react";
import {
  Box, Image, Text, Stack, Heading, Button, Badge,
  VStack,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
  FormControl, FormLabel, Input, useDisclosure, useToast, Icon
} from "@chakra-ui/react";
import { FiMapPin, FiClock, FiUser, FiInfo } from "react-icons/fi";
import { api } from "../../api/axios";

const EventCard = ({ evento, onRefresh }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ nombre: "", email: "" });
  const toast = useToast();

  const handleInscribir = async () => {
    if (!userData.nombre || !userData.email) return;
    setLoading(true);
    try {
      await api.post(`/eventos/${evento.id}/inscribir`, userData);
      toast({ title: "¡Inscrito con éxito!", status: "success" });
      onClose();
      onRefresh(); // Refresca los cupos en la pantalla principal
    } catch (err) {
      toast({ title: "Error", description: err.response?.data?.message, status: "error" });
    } finally { setLoading(false); }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
      <Image src={evento.url_image || "https://via.placeholder.com/300"} h="200px" w="full" objectFit="cover" />

      <Stack p={4} spacing={3}>
        <Badge alignSelf="flex-start" colorScheme="purple">{evento.tematica}</Badge>
        <Heading size="md">{evento.titulo}</Heading>

        <Stack fontSize="sm" color="gray.600" spacing={1}>
          <Text><Icon as={FiMapPin} mr={2} />{evento.lugar}</Text>
          <Text><Icon as={FiClock} mr={2} />{new Date(evento.horario).toLocaleString()}</Text>
          <Text><Icon as={FiUser} mr={2} /><b>Orador:</b> {evento.orador}</Text>
        </Stack>

        <Text fontSize="sm" noOfLines={2} color="gray.500">
          <Icon as={FiInfo} mr={2} /> Material: {evento.material || "Ninguno"}
        </Text>

        <Box pt={2}>
          <Text fontWeight="bold" color="blue.600" mb={2}>
            Cupos disponibles: {evento.sitiosDisponibles}
          </Text>
          <Button colorScheme="teal" w="full" onClick={onOpen} isDisabled={evento.sitiosDisponibles <= 0}>
            {evento.sitiosDisponibles > 0 ? "Inscribirme" : "Agotado"}
          </Button>
        </Box>
      </Stack>

      {/* Modal de Inscripción Rápida */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inscripción al evento</ModalHeader>
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Nombre Completo</FormLabel>
                <Input placeholder="Tu nombre" onChange={e => setUserData({ ...userData, nombre: e.target.value })} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Correo Electrónico</FormLabel>
                <Input type="email" placeholder="email@ejemplo.com" onChange={e => setUserData({ ...userData, email: e.target.value })} />
              </FormControl>
              <Button colorScheme="blue" w="full" onClick={handleInscribir} isLoading={loading}>
                Confirmar mi cupo
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EventCard;
