// advertisement-section.jsx
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  HStack,
  VStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FiUsers, FiSmile, FiUserCheck } from "react-icons/fi";

const stats = [
  {
    id: 1,
    value: "315",
    label: "Casos completados",
    icon: FiUsers,
  },
  {
    id: 2,
    value: "966",
    label: "Clientes satisfechas",
    icon: FiSmile,
  },
  {
    id: 3,
    value: "868",
    label: "Consultor experto",
    icon: FiUserCheck,
  },
];

// Pon aquí la imagen que va a la derecha
const AD_IMAGE_URL = "https://exitossinlimites.com/wp-content/uploads/2025/05/698234cc-f895-42be-8708-3c69b3a92723.jpeg"; // por ejemplo: "https://tuservidor.com/imagen.jpg"

export default function AdvertisementSection() {
  return (
    <Box as="section" bg="#EDF3F7" py={{ base: 16, md: 20 }}>
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        bg="#042445"
        color="white"
        position="relative"
        overflow="hidden"
      >
        {/* Parte superior: texto + imagen */}
        <Flex
          direction={{ base: "column", md: "row" }}
          minH={{ md: "340px" }}
        >
          {/* Lado izquierdo - copy y botón */}
          <Box
            flex="1"
            py={{ base: 10, md: 14 }}
            pr={{ base: 0, md: 10 }}
            pl={{ base: 6, md: 10 }}
            position="relative"
          >
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "3.5xl" }}
              lineHeight="1.3"
              mb={6}
            >
              Guiando a líderes con
              <br />
              sabiduría y
              <br />
              estrategias comprobadas
            </Heading>

            <Button
              bg="#2FA5F5"
              color="white"
              fontWeight="bold"
              px={10}
              py={6}
              borderRadius="0"
              _hover={{ bg: "#2486c7" }}
            >
              CONTACTA CON NOSOTRAS
            </Button>
          </Box>

          {/* Lado derecho - imagen */}
          <Box flex="1" display={{ base: "none", md: "block" }}>
            {AD_IMAGE_URL ? (
              <Image
                src={AD_IMAGE_URL}
                alt="Personas en conferencia"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            ) : (
              <Box
                w="100%"
                h="100%"
                bg="whiteAlpha.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="sm"
                color="whiteAlpha.700"
              >
                {/* Placeholder, puedes borrar esto cuando uses una imagen real */}
                Imagen aquí
              </Box>
            )}
          </Box>
        </Flex>

        {/* Parte inferior: estadísticas */}
        <Box
          borderTop="1px solid rgba(255,255,255,0.12)"
          mt={{ base: 6, md: 0 }}
          px={{ base: 6, md: 10 }}
          py={{ base: 8, md: 10 }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 10 }}
          >
            {stats.map((stat) => (
              <HStack key={stat.id} spacing={5}>
                <Box
                  w="64px"
                  h="64px"
                  bg="whiteAlpha.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={stat.icon} boxSize={8} />
                </Box>

                <VStack align="flex-start" spacing={1}>
                  <Text fontSize="2xl" fontWeight="700">
                    {stat.value}
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.800">
                    {stat.label}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Decoración triangular (esquina inferior derecha) */}
        <Box
          position="absolute"
          bottom="-120px"
          right="-80px"
          w="260px"
          h="260px"
          bg="rgba(0, 88, 147, 0.9)"
          borderRadius="40% 60% 0 60%"
          transform="rotate(8deg)"
        />
      </Box>
    </Box>
  );
}
