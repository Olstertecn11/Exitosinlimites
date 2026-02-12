import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { api } from "../../api/axios"; // Asegúrate de que la ruta sea correcta
import env from '../../config/environment'

export default function BooksSection() {
  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch de libros desde la API
  const fetchBooks = async () => {
    try {
      setLoading(true);
      // El backend debe devolver el array con id_book, name, category, price e image (Base64)
      const res = await api.get("/books");
      setBooksList(res.data);
    } catch (error) {
      console.error("Error al cargar los libros:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Estado de carga visual
  if (loading) {
    return (
      <Center py={20}>
        <Spinner size="xl" color="#00AEEF" thickness="4px" />
      </Center>
    );
  }

  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="white">
      {/* Título */}
      <VStack spacing={3} textAlign="center" mb={10}>
        <HStack spacing={2}>
          <Box w="28px" h="3px" bg="#00AEEF" borderRadius="full" />
          <Box w="16px" h="3px" bg="#00AEEF" borderRadius="full" />
        </HStack>

        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color="#0F172A"
        >
          Nuestros Productos
        </Heading>
      </VStack>

      {/* Grid de libros */}
      <Box maxW="1400px" mx="auto" px={{ base: 10, md: 20 }} mt={"2rem"}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }} // Añadido lg: 4 para mejor aprovechamiento
          spacing={{ base: 6, md: 8 }}
        >
          {booksList.map((book) => (
            <Box
              key={book.id_book} // Usamos el ID de la base de datos
              bg="white"
              boxShadow="8px 18px 40px rgba(15, 23, 42, 0.10)"
              borderRadius="md"
              overflow="hidden"
              transition="transform 0.3s ease"
              _hover={{ transform: "translateY(-5px)" }}
            >
              {/* Imagen: Aquí usamos el string Base64 directamente */}
              <Image
                src={`${env.config.apiUrl}/books/${book.id_book}/image`} // Ajusta la URL según tu backend
                alt={book.name}
                w="100%"
                h="320px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/300x400?text=Cargando+Libro"
              />

              {/* Info */}
              <Box p={5}>
                <Text
                  fontSize="xs"
                  textTransform="uppercase"
                  letterSpacing="0.12em"
                  color="gray.400"
                  mb={1}
                >
                  {book.category}
                </Text>

                <Text
                  fontSize="sm"
                  textTransform="uppercase"
                  fontWeight="600"
                  color="#111827"
                  mb={2}
                  noOfLines={1} // Evita que títulos largos rompan el diseño
                >
                  {book.name}
                </Text>

                <Text fontWeight="700" color="#E53935" fontSize="lg">
                  ${Number(book.price).toFixed(2)}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {booksList.length === 0 && (
          <Center mt={10}>
            <Text color="gray.500">No hay productos disponibles actualmente.</Text>
          </Center>
        )}
      </Box>
    </Box>
  );
}
