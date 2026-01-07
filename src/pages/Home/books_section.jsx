import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const books = [
  {
    id: 1,
    title: "EBOOK DE FAMILIA",
    category: "SUCCESSFORMING",
    price: 8,
    image:
      "https://exitossinlimites.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-04.05.08-600x928.jpeg", // cambia por tu URL real
  },
  {
    id: 2,
    title: "EBOOK DE MOTIVACION",
    category: "SUCCESSFORMING",
    price: 8,
    image:
      "https://exitossinlimites.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-04.05.09-1.jpeg",
  },
  {
    id: 3,
    title: "EBOOK DE MOTIVACION",
    category: "SUCCESSFORMING",
    price: 8,
    image:
      "https://exitossinlimites.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-04.05.08-1.jpeg",
  },

  {
    id: 4,
    title: "LIBRO JUVENIL",
    category: "SUCCESSFORMING",
    price: 8,
    image:
      "https://exitossinlimites.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-04.05.09.jpeg",
  },

  {
    id: 5,
    title: "EBOOK DE MOTIVACION",
    category: "SUCCESSFORMING",
    price: 15,
    image:
      "https://exitossinlimites.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-04.05.08-2.jpeg",
  },
  {
    id: 6,
    title: "EBOOK DE FAMILIA",
    category: "SUCCESSFORMING",
    price: 8,
    image:
      "https://exitossinlimites.com/wp-content/uploads/2021/03/WhatsApp-Image-2025-05-21-at-04.05.08-1.png",
  },
];

export default function BooksSection() {
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
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }} mt={'8rem'}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 6, md: 8 }}
        >
          {books.map((book) => (
            <Box
              key={book.id}
              bg="white"
              boxShadow="0 18px 40px rgba(15, 23, 42, 0.10)"
              borderRadius="md"
              overflow="hidden"
            >
              {/* Imagen */}
              <Image
                src={book.image}
                alt={book.title}
                w="100%"
                h="320px"
                objectFit="cover"
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
                >
                  {book.title}
                </Text>

                <Text fontWeight="700" color="#E53935">
                  ${book.price.toFixed(2)}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
