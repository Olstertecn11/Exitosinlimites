import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import ExpertsSection from "../Home/expers_section";

const HERO_BG =
  "https://exitossinlimites.com/wp-content/uploads/2021/10/breadcrumb.jpg";
const MISION_IMG =
  "https://exitossinlimites.com/wp-content/uploads/2025/05/about-scaled-e1748278685227.jpg"; // imagen sección Nuestra Misión
const VISION_IMG =
  "https://exitossinlimites.com/wp-content/uploads/2025/05/adssd-scaled.jpg"; // imagen sección Nuestra Visión
const VALORES_BG =
  "https://exitossinlimites.com/wp-content/uploads/2025/05/bg-section-01.jpg"; // opcional: textura para el fondo de "Nuestras Valores"

export default function About({ NavbarComponent }) {
  return (
    <div>

      <Box bg="#F3F7FB" position='relative'>
        {/* HERO / BANNER SUPERIOR */}
        <Box
          bgImage={HERO_BG ? `url(${HERO_BG})` : undefined}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgColor={HERO_BG ? undefined : "#074070"}
          position="relative"
          pb={{ base: 16, md: 24 }}
          pt={{ base: 1, md: 2 }}
        >
          <Box position="relative" zIndex={2}>
            {NavbarComponent}
          </Box>
          <Box
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8 }}
            color="white"
            py={'2rem'}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="800"
            >
              Acerca De Nosotros
            </Heading>
          </Box>
        </Box>


        {/* SECCIÓN: NUESTRA MISIÓN */}
        <Box bg="white" py={{ base: 12, md: 16 }}>
          <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              gap={{ base: 8, md: 14 }}
            >
              <Box flex="1">
                <Image
                  src={
                    MISION_IMG || "https://via.placeholder.com/800x500?text=Misión"
                  }
                  alt="Nuestra Misión"
                  borderRadius="2xl"
                  w="100%"
                  objectFit="cover"
                />
              </Box>

              <Box flex="1">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={4}
                  color="#111827"
                >
                  Nuestra Misión
                </Heading>

                <Box h="1px" bg="gray.200" mb={5} />

                <Text fontSize="md" color="gray.600" lineHeight="1.9">
                  Impulsar a personas y organizaciones a descubrir y desarrollar
                  su máximo potencial, a través del coaching personal, grupal y
                  conferencias transformadoras, brindando herramientas prácticas
                  que impulsen el crecimiento integral, la confianza y la acción
                  enfocada hacia resultados extraordinarios.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* SECCIÓN: NUESTRA VISIÓN */}
        <Box bg="white" py={{ base: 12, md: 16 }}>
          <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
            <Flex
              direction={{ base: "column", md: "row-reverse" }}
              align="center"
              gap={{ base: 8, md: 14 }}
            >
              <Box flex="1">
                <Image
                  src={
                    VISION_IMG || "https://via.placeholder.com/800x500?text=Visión"
                  }
                  alt="Nuestra Visión"
                  borderRadius="2xl"
                  w="100%"
                  objectFit="cover"
                />
              </Box>

              <Box flex="1">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={4}
                  color="#111827"
                >
                  Nuestra Visión
                </Heading>

                <Box h="1px" bg="gray.200" mb={5} />

                <Text fontSize="md" color="gray.600" lineHeight="1.9">
                  Ser una empresa líder e inspiradora en el mundo hispano,
                  reconocida por transformar vidas, guiando a miles de personas a
                  vivir con propósito, claridad y pasión, alcanzando un éxito sin
                  límites en cada área de su vida.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* SECCIÓN: NUESTROS VALORES */}
        <Box
          bgImage={VALORES_BG ? `url(${VALORES_BG})` : undefined}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          bg={VALORES_BG ? undefined : "#EFF1F4"}
          py={{ base: 14, md: 18 }}
        >
          <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={8}>
            <VStack align="flex-start" spacing={6}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                color="#111827"
              >
                Nuestras Valores
              </Heading>

              <VStack align="flex-start" spacing={3} py={2}>
                {[
                  "Crecimiento continuo: Creemos que siempre hay un siguiente nivel por alcanzar.",
                  "Autenticidad: Nos expresamos desde lo que somos, sin máscaras, con verdad y coherencia.",
                  "Compromiso humano: Acompañamos con cercanía, respeto y responsabilidad cada proceso.",
                  "Pasión por transformar: Hacemos lo que amamos, y lo hacemos con pasión.",
                  "Mentalidad positiva: Elegimos enfocarnos en posibilidades, soluciones y aprendizajes.",
                  "Impacto con propósito: Cada acción que realizamos busca generar un cambio real y duradero.",
                ].map((item, idx) => (
                  <HStack key={idx} align="flex-start" spacing={3}>
                    <Icon
                      as={FiCheck}
                      mt={1}
                      color="#00AEEF"
                      boxSize={5}
                    />
                    <Text fontSize="md" color="gray.700" lineHeight="1.8">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Box>
        </Box>
        <ExpertsSection />
      </Box>
    </div>
  );
}
