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
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";

const HERO_BG = "https://exitossinlimites.com/wp-content/uploads/2025/05/da17d1f2-07ff-4feb-b4ff-8191ff865133.jpeg";   // imagen de fondo para el hero (opcional)
const MAIN_IMG = "https://exitossinlimites.com/wp-content/uploads/2025/05/698234cc-f895-42be-8708-3c69b3a92723.jpeg";  // imagen lateral para la sección principal (opcional)

export default function PersonalTrainingService({ NavbarComponent }) {
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
        pt={0}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient: "linear(to-b, rgba(3,27,53,0.85), rgba(3,27,53,0.7))",
          zIndex: 0,
        }}
      >
        {/* Navbar sobre la imagen */}
        <Box
          position="relative"
          zIndex={1}
          backdropFilter="blur(10px) brightness(0.9)"
        >
          {NavbarComponent}
        </Box>

        {/* Contenido hero */}
        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          color="white"
          mt="2rem"
          position="relative"
          zIndex={1}
        >
          {/* mini menú de servicios */}
          <HStack
            spacing={4}
            mb={6}
            mt={'6rem'}
            flexWrap="wrap"
            fontSize="sm"
          >
            <Button
              variant="ghost"
              borderRadius="full"
              px={5}
              py={1}
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Conferencias de alto impacto
            </Button>
            <Button
              variant="solid"
              borderRadius="full"
              px={5}
              py={1}
              bg="#00AEEF"
              _hover={{ bg: "#008fca" }}
            >
              Entrenamiento personal
            </Button>
            <Button
              variant="ghost"
              borderRadius="full"
              px={5}
              py={1}
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Motivación y liderazgo
            </Button>
          </HStack>

          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            mb={4}
          >
            Entrenamiento Personal
          </Heading>

          <Text maxW="540px" fontSize="md" color="whiteAlpha.900">
            Contáctanos para cualquier asesoramiento. Llama en cualquier momento.
          </Text>

          <HStack mt={6} spacing={4} align="center">
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

      {/* CARD BREADCRUMB */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} mt={8} mb={12}>
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="0 15px 40px rgba(15, 23, 42, 0.15)"
          px={8}
          py={4}
          maxW={{ base: "100%", md: "440px" }}
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
              Entrenamiento personal
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
            {/* Imagen lateral */}
            <Box flex="1">
              {MAIN_IMG ? (
                <Image
                  src={MAIN_IMG}
                  alt="Entrenamiento personal"
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
                  Imagen de entrenamiento personal aquí
                </Box>
              )}
            </Box>

            {/* Texto descriptivo */}
            <Box flex="1">
              <VStack align="flex-start" spacing={5}>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="#111827"
                >
                  Entrenamiento Personal
                </Heading>

                <Text fontSize="md" color="gray.600" lineHeight="1.9">
                  En nuestras sesiones, nos enfocamos en el desarrollo de
                  habilidades claves que te permitirán alcanzar tus objetivos
                  personales y profesionales a través de técnicas y métodos
                  efectivos. Trabajaremos en tu crecimiento personal, la mejora
                  de tu autoestima, tus relaciones personales y la toma de
                  decisiones para una vida más plena y exitosa.
                </Text>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* LISTA DE CURSOS / TEMAS */}
      <Box bg="#F3F7FB" py={{ base: 12, md: 16 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
          <VStack align="flex-start" spacing={5}>
            <Heading
              as="h3"
              fontSize={{ base: "2xl", md: "2.5xl" }}
              color="#111827"
            >
              Entrenamiento personal
            </Heading>

            <VStack align="flex-start" spacing={3} fontSize="md" color="gray.700">
              <Text>1. Desarrollo y crecimiento personal</Text>
              <Text>2. Cambia tu actitud, transforma tu vida</Text>
              <Text>3. Inteligencia Emocional</Text>
              <Text>4. Fortaleciendo tu autoestima</Text>
              <Text>
                5. Gestionando adecuadamente el fracaso personal y profesional
              </Text>
              <Text>6. Superación personal</Text>
              <Text>7. La importancia de tus decisiones</Text>
              <Text>8. Estrés, depresión y ansiedad</Text>
            </VStack>
          </VStack>
        </Box>
      </Box>

      {/* FORMULARIO DE CONTACTO */}
      <Box bg="white" py={{ base: 12, md: 16 }}>
        <Box
          maxW="900px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          borderRadius="2xl"
          boxShadow="0 20px 50px rgba(15, 23, 42, 0.12)"
          bg="white"
          py={10}
        >
          <Heading
            as="h3"
            fontSize={{ base: "2xl", md: "2.5xl" }}
            color="#111827"
            mb={6}
            textAlign="center"
          >
            Solicita información
          </Heading>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
          >
            <VStack flex="1" spacing={4} align="stretch" >
              <FormControl>
                <FormLabel color='#111827'>Nombre</FormLabel>
                <Input placeholder="Oliver Dávila" border=" 1px solid #111827" color='#111827' _placeholder={{ color: 'blue.800' }} />
              </FormControl>

              <FormControl>
                <FormLabel color='#111827'>Teléfono</FormLabel>
                <Input placeholder="Teléfono" border="1px solid #111827" _placeholder={{ color: 'blue.800' }} />
              </FormControl>

              <FormControl>
                <FormLabel color='#111827'>Correo electrónico</FormLabel>
                <Input type="email" placeholder="Correo electrónico" border="1px solid #111827" _placeholder={{ color: 'blue.800' }} />
              </FormControl>
            </VStack>
            <VStack flex="1" spacing={4} align="stretch">
              <FormControl>
                <FormLabel color='#111827'>Curso de interés</FormLabel>
                <Select className="personal_training_contact_select" placeholder="Selecciona un curso" border="1px solid #111827" _placeholder={{ color: 'blue.800' }} background='white' color='#111827'>
                  <option>Desarrollo y crecimiento personal</option>
                  <option>Cambia tu actitud, transforma tu vida</option>
                  <option>Inteligencia Emocional</option>
                  <option>Fortaleciendo tu autoestima</option>
                  <option>
                    Gestionando el fracaso personal y profesional
                  </option>
                  <option>Superación personal</option>
                  <option>La importancia de tus decisiones</option>
                  <option>Estrés, depresión y ansiedad</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel color='#111827'>Preguntas</FormLabel>
                <Textarea
                  rows={5}
                  placeholder="Escribe aquí tus preguntas o comentarios"
                  _placeholder={{ color: 'blue.800' }}
                  border="1px solid #111827"
                />
              </FormControl>
            </VStack>
          </Flex>

          <Box textAlign="center" mt={8}>
            <Button
              bg="#00AEEF"
              color="white"
              fontWeight="bold"
              px={10}
              py={6}
              borderRadius="0"
              _hover={{ bg: "#008fca" }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
