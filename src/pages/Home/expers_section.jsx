import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const experts = [
  {
    id: 1,
    name: "Yessenia de Guzmán",
    role: "Coach y Conferencista",
    image: "https://exitossinlimites.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-03.48.48.jpg",
  },
  {
    id: 2,
    name: "Christine Eve",
    role: "Consultant",
    image: "https://gaviaspreview.com/wp/conult/wp-content/plugins/conult-themer/elementor/assets/images/team-3.jpg",
  },
  {
    id: 3,
    name: "David Hardson",
    role: "Consultant",
    image: "https://gaviaspreview.com/wp/conult/wp-content/plugins/conult-themer/elementor/assets/images/team-4.jpg",
  },
  {
    id: 4,
    name: "Carlos Guzmán",
    role: "CEO",
    image: "https://exitossinlimites.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-03.48.48.jpeg",
  },
];

export default function ExpertsSection() {
  return (
    <Box as="section" bg="#EAF2F6" py={{ base: 16, md: 20 }}>
      {/* Encabezado */}
      <VStack spacing={3} textAlign="center" mb={10}>
        <HStack spacing={2}>
          <Box w="28px" h="3px" bg="#00AEEF" borderRadius="full" />
          <Box w="16px" h="3px" bg="#00AEEF" borderRadius="full" />
        </HStack>

        <Text
          fontSize="xs"
          letterSpacing="0.2em"
          color="gray.500"
          textTransform="uppercase"
        >
          Consultora Profesional
        </Text>

        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color="#0F172A"
        >
          Conoce nuestros expertos
        </Heading>
      </VStack>

      {/* Cards */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 8, md: 10 }}
        >
          {experts.map((expert) => (
            <Box key={expert.id}>
              {/* Imagen */}
              <Image
                src={expert.image || "https://via.placeholder.com/400x450"}
                alt={expert.name}
                w="100%"
                h="360px"
                objectFit="cover"
              />

              {/* Card inferior */}
              <Box
                bg="white"
                textAlign="center"
                py={5}
                mt={-4}
                mx="auto"
                w="90%"
                boxShadow="0 25px 40px rgba(15, 23, 42, 0.12)"
              >
                <Text fontWeight="700" color="#0F172A">
                  {expert.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {expert.role}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
