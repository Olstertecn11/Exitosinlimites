import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";

const HERO_BG = "https://exitossinlimites.com/wp-content/uploads/2025/05/eventum-img1.jpg";   // fondo del banner superior (opcional)
const MAIN_IMG = "https://exitossinlimites.com/wp-content/uploads/2025/05/image-R53GRA4.jpg";  // imagen principal de conferencias (opcional)

export default function HighImpactConferences({ NavbarComponent }) {
  return (
    <Box bg="#F3F7FB">
      {/* HERO / BANNER SUPERIOR */}
      <Box
        bgImage={HERO_BG ? `url(${HERO_BG})` : undefined}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgColor={HERO_BG ? undefined : "#074070"}
        position="relative"
        pb={{ base: 16, md: 24 }}
        pt={{ base: 0, md: 0 }}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient:
            "linear(to-b, rgba(3,27,53,0.75), rgba(3,27,53,0.75))",
          zIndex: 0,
        }}
      >
        <Box position={'relative'} backdropFilter={'blur(10px) brightness(0.9)'} zIndex={2}>
          {NavbarComponent}
        </Box>
        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          color="white"
          mt="2rem"
          position="relative"
          zIndex={1}
        >
          <Heading
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="800"
            mt={'10vh'}
          >
            Conferencias de alto impacto
          </Heading>
          <Text mt={4} maxW="540px" fontSize="xl" color="whiteAlpha.900">
            Contáctanos para cualquier asesoramiento. Llama en cualquier momento.
          </Text>

          <HStack
            mt={6}
            spacing={4}
            align="center"
          >
            <Box
              w="44px"
              h="44px"
              borderRadius="full"
              bg="#1B79C6"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FiPhoneCall} boxSize={6} />
            </Box>
            <VStack align="flex-start" spacing={0}>
              <Text
                fontSize="xs"
                textTransform="uppercase"
                color="whiteAlpha.700"
              >
                Llama en cualquier momento
              </Text>
              <Text fontWeight="700" fontSize="lg">
                (571) 288-9862
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>

      {/* BREADCRUMB CARD */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} mt={-8} mb={12}>
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="0 15px 40px rgba(15, 23, 42, 0.15)"
          px={8}
          py={4}
          mt='4rem'
          maxW={{ base: "100%", md: "420px" }}
          ml="auto"
        >
          <Text fontSize="sm">
            <Text as="span" color="gray.500">
              Home
            </Text>{" "}
            /{" "}
            <Text as="span" color="gray.500">
              Servicios
            </Text>{" "}
            /{" "}
            <Text as="span" fontWeight="600" color="#111827">
              Conferencias de alto impacto
            </Text>
          </Text>
        </Box>
      </Box>

      {/* SECCIÓN PRINCIPAL */}
      <Box bg="white" py={{ base: 12, md: 16 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={{ base: 10, md: 16 }}
          >
            {/* Imagen o placeholder */}
            <Box flex="1">
              {MAIN_IMG ? (
                <Image
                  src={MAIN_IMG}
                  alt="Conferencias de alto impacto"
                  w="100%"
                  borderRadius="2xl"
                  objectFit="cover"
                />
              ) : (
                <Box
                  w="100%"
                  h={{ base: "260px", md: "360px" }}
                  borderRadius="2xl"
                  bg="#E1E8F0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.500"
                  fontSize="sm"
                >
                  Imagen de conferencias aquí
                </Box>
              )}
            </Box>

            {/* Texto */}
            <Box flex="1">
              <VStack align="flex-start" spacing={5}>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="#111827"
                >
                  Conferencias de alto impacto
                </Heading>

                <Text fontSize="md" color="gray.600" lineHeight="1.9" textAlign="justify">
                  ¿Estás buscando una conferencia que no solo impacte, sino que
                  transforme? En Éxito sin Límites ofrecemos conferencias que
                  inspiran, movilizan y transforman. A través de mensajes
                  impactantes y herramientas prácticas, abordamos temas clave
                  como liderazgo, motivación y superación personal.
                </Text>

                <Text fontSize="md" color="gray.600" lineHeight="1.9" textAlign="justify">
                  Diseñadas para empresas, instituciones o eventos especiales,
                  nuestras charlas generan un verdadero antes y después en cada
                  audiencia. Adaptamos el contenido a las necesidades de tu
                  organización para asegurar relevancia, conexión y resultados
                  tangibles.
                </Text>

                <Button
                  mt={4}
                  bg="#00AEEF"
                  color="white"
                  fontWeight="bold"
                  px={10}
                  py={6}
                  borderRadius="0"
                  _hover={{ bg: "#008fca" }}
                >
                  Catálogo De Conferencias
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* PERFIL DE TODAS LAS CONFERENCIAS */}
      <Box bg="#F3F7FB" py={{ base: 12, md: 16 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
          <VStack align="flex-start" spacing={5}>
            <Heading
              as="h3"
              fontSize={{ base: "2xl", md: "2.5xl" }}
              color="#111827"
            >
              El perfil de todas conferencias
            </Heading>

            <Text fontSize="md" color="gray.600" lineHeight="1.9">
              Todas nuestras conferencias se caracterizan por ser prácticas,
              dinámicas y profundamente humanas. Cada tema se desarrolla con
              ejemplos reales, historias inspiradoras y aplicaciones concretas
              para el día a día.
            </Text>

            <Text fontSize="md" color="gray.600" lineHeight="1.9">
              Buscamos que cada participante se lleve claridad, motivación y
              herramientas accionables para aplicar inmediatamente en su vida
              personal y profesional, manteniendo siempre un enfoque de
              crecimiento integral y liderazgo con propósito.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
