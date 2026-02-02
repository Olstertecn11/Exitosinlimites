import React, { useEffect, useState, useCallback } from "react";
import {
  SimpleGrid,
  Container,
  Heading,
  Spinner,
  Center,
  Text,
  Box,
  VStack
} from "@chakra-ui/react";
import { api } from "../../api/axios"; // Tu instancia de axios
import EventCard from "../../pages/admin/EventCard"; // El componente que hicimos arriba

const EventGallery = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usamos useCallback para poder pasar la función a las cards y refrescar tras inscribirse
  const fetchEventos = useCallback(async () => {
    try {
      setLoading(true);
      // Endpoint GET que creamos en Express
      const res = await api.get("/eventos");
      console.log("Fetched events:", res);
      setEventos(res.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("No se pudieron cargar los eventos. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEventos();
  }, [fetchEventos]);

  if (loading) {
    return (
      <Center h="60vh">
        <Spinner size="xl" color="teal.500" thickness="4px" />
      </Center>
    );
  }

  return (
    <Container maxW="container.xl" py={10} >
      <VStack spacing={2} mb={10} textAlign="center">
        <Heading as="h1" size="2xl" color="gray.800">
          Próximos Eventos
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Explora nuestra temática y aparta tu lugar ahora mismo.
        </Text>
      </VStack>

      {error ? (
        <Center>
          <Text color="red.500">{error}</Text>
        </Center>
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
              onRefresh={fetchEventos}
            />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default EventGallery;
