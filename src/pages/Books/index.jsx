import React, { useEffect, useMemo, useState } from "react";
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
  Input,
  Select,
  Button,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/axios"; // 👈 ajusta si tu ruta es distinta
import env from "../../config/environment"; // 👈 ajusta si tu ruta es distinta

export default function Books({ NavbarComponent }) {
  const navigate = useNavigate();

  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI state
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest"); // newest | price_asc | price_desc | name_asc

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/books");
      setBooksList(res.data || []);
    } catch (error) {
      console.error("Error al cargar los libros:", error);
      setBooksList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const categories = useMemo(() => {
    const set = new Set();
    booksList.forEach((b) => {
      if (b?.category) set.add(b.category);
    });
    return ["all", ...Array.from(set)];
  }, [booksList]);

  const filtered = useMemo(() => {
    let list = [...booksList];

    // filtro categoría
    if (category !== "all") {
      list = list.filter((b) => (b?.category || "").toLowerCase() === category.toLowerCase());
    }

    // búsqueda
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((b) => {
        const name = (b?.name || "").toLowerCase();
        const cat = (b?.category || "").toLowerCase();
        return name.includes(q) || cat.includes(q);
      });
    }

    // sort
    if (sort === "price_asc") {
      list.sort((a, b) => Number(a?.price || 0) - Number(b?.price || 0));
    } else if (sort === "price_desc") {
      list.sort((a, b) => Number(b?.price || 0) - Number(a?.price || 0));
    } else if (sort === "name_asc") {
      list.sort((a, b) => String(a?.name || "").localeCompare(String(b?.name || ""), "es"));
    } else {
      // newest: si no tienes fecha, queda “como venga”
      // si luego agregas created_at, lo ordenamos aquí
    }

    return list;
  }, [booksList, category, query, sort]);

  if (loading) {
    return (
      <Center py={20}>
        <Spinner size="xl" color="#00AEEF" thickness="4px" />
      </Center>
    );
  }

  return (
    <Box bg="#F3F7FB" minH="100vh">
      {/* Navbar (si lo pasas desde Layout) */}
      {NavbarComponent ? (
        <Box
          bgImage={'url(https://media.istockphoto.com/id/1957612313/photo/teenage-girl-sitting-on-windowsill-and-reading-a-book.jpg?s=612x612&w=0&k=20&c=5ffcOPYEmdP_r0yr0gPlb_nuVdipEdgG_SrtaeW_AIE=)'}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          position="relative"
          pb={{ base: 16, md: 24 }}
          pt={0}
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            bgGradient: "linear(to-b, rgba(3,27,53,0.85), rgba(3,27,53,0.7))",
            zIndex: 0,
          }}
        >
          {NavbarComponent}
        </Box>
      ) : null}

      {/* HERO */}
      <Box
        bg="#074070"
        color="white"
        py={{ base: 14, md: 16 }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient: "linear(to-r, rgba(3,27,53,0.85), rgba(3,27,53,0.65))",
        }}
      >
        <Box position="relative" maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
          <HStack justify="space-between" align="flex-end" flexWrap="wrap" gap={4}>
            <Box>
              <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="900">
                Libros y recursos
              </Heading>
              <Text mt={2} opacity={0.9} maxW="700px">
                Explora nuestro catálogo, filtra por categoría y encuentra tu próximo ebook.
              </Text>
            </Box>

            <Button
              variant="outline"
              color="white"
              borderColor="whiteAlpha.400"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={() => navigate("/")}
            >
              Volver al inicio
            </Button>
          </HStack>
        </Box>
      </Box>

      {/* CONTROLES */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} mt={8}>
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="0 20px 50px rgba(15,23,42,0.10)"
          p={{ base: 4, md: 6 }}
        >
          <Flex gap={4} direction={{ base: "column", md: "row" }} align={{ md: "center" }}>
            <Input
              placeholder="Buscar por nombre o categoría..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              bg="white"
            />

            <Select value={category} onChange={(e) => setCategory(e.target.value)} bg="white">
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "Todas las categorías" : c}
                </option>
              ))}
            </Select>

            <Select value={sort} onChange={(e) => setSort(e.target.value)} bg="white">
              <option value="newest">Orden: Relevancia</option>
              <option value="price_asc">Precio: menor a mayor</option>
              <option value="price_desc">Precio: mayor a menor</option>
              <option value="name_asc">Nombre: A → Z</option>
            </Select>

            <HStack justify={{ base: "space-between", md: "flex-end" }} w={{ base: "full", md: "auto" }}>
              <Badge colorScheme="blue" px={3} py={2} borderRadius="full">
                {filtered.length} resultado(s)
              </Badge>

              <Button variant="outline" onClick={() => { setQuery(""); setCategory("all"); setSort("newest"); }}>
                Limpiar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Box>

      {/* LISTADO */}
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 10 }} py={{ base: 10, md: 14 }}>
        {filtered.length === 0 ? (
          <Center mt={10}>
            <VStack spacing={2}>
              <Heading fontSize="lg" color="#0F172A">
                No hay productos para mostrar
              </Heading>
              <Text color="gray.600">Prueba quitando filtros o cambiando tu búsqueda.</Text>
            </VStack>
          </Center>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 6, md: 8 }}>
            {filtered.map((book) => (
              <Box
                key={book.id_book}
                bg="white"
                boxShadow="8px 18px 40px rgba(15, 23, 42, 0.10)"
                borderRadius="md"
                overflow="hidden"
                transition="transform 0.3s ease"
                _hover={{ transform: "translateY(-5px)" }}
              >
                <Image
                  src={`${env.config.apiUrl}/books/${book.id_book}/image`}
                  alt={book.name}
                  w="100%"
                  h="320px"
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/300x400?text=Cargando+Libro"
                />

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
                    fontWeight="700"
                    color="#111827"
                    mb={2}
                    noOfLines={1}
                  >
                    {book.name}
                  </Text>

                  <HStack justify="space-between" align="center">
                    <Text fontWeight="800" color="#E53935" fontSize="lg">
                      ${Number(book.price).toFixed(2)}
                    </Text>

                    {/* Si luego quieres: botón ver detalle / agregar al carrito */}
                    {/* <Button size="sm" bg="#00AEEF" color="white" _hover={{ bg:"#008fca" }}>Agregar</Button> */}
                  </HStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
}
