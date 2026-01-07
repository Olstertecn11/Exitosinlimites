import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
} from "@chakra-ui/react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const HERO_BG = "https://exitossinlimites.com/wp-content/uploads/2021/10/breadcrumb.jpg";      // fondo del banner superior
const CONTACT_IMG = "https://exitossinlimites.com/wp-content/uploads/2025/05/contact.jpg";  // imagen de la chica del call center

export default function Contact({ NavbarComponent }) {
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
        {/* Navbar encima del hero */}
        <Box
          position="relative"
          zIndex={1}
          backdropFilter="blur(10px) brightness(0.9)"
        >
          {NavbarComponent}
        </Box>

        {/* Título hero */}
        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          color="white"
          mt="2rem"
          position="relative"
          zIndex={1}
        >
          <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800">
            Contact
          </Heading>
        </Box>
      </Box>

      {/* BREADCRUMB */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} mt={8} mb={12}>
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="0 15px 40px rgba(15, 23, 42, 0.15)"
          px={8}
          py={4}
          maxW={{ base: "100%", md: "360px" }}
          ml="auto"
        >
          <Text fontSize="sm">
            <Text as="span" color="gray.500">
              Home
            </Text>{" "}
            /{" "}
            <Text as="span" fontWeight="600" color="#111827">
              Contact
            </Text>
          </Text>
        </Box>
      </Box>

      {/* SECCIÓN: NO DUDE EN CONTACTARNOS */}
      <Box bg="white" py={{ base: 12, md: 16 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
          {/* Título centrado */}
          <VStack spacing={3} textAlign="center" mb={10}>
            <HStack spacing={2}>
              <Box w="28px" h="3px" bg="#00AEEF" borderRadius="full" />
              <Box w="16px" h="3px" bg="#00AEEF" borderRadius="full" />
            </HStack>
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color="#0F172A"
            >
              No Dude En Contactarnos
            </Heading>
          </VStack>

          {/* Contenido dos columnas */}
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 10, md: 16 }}
            align="flex-start"
          >
            {/* Imagen */}
            <Box flex="1">
              {CONTACT_IMG ? (
                <Image
                  src={CONTACT_IMG}
                  alt="Soporte"
                  w="100%"
                  borderRadius="2xl"
                  objectFit="cover"
                />
              ) : (
                <Box
                  w="100%"
                  h={{ base: "260px", md: "340px" }}
                  bg="#E1E8F0"
                  borderRadius="2xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.500"
                  fontSize="sm"
                >
                  Imagen de soporte aquí
                </Box>
              )}
            </Box>

            {/* Texto + datos */}
            <Box flex="1">
              <VStack align="flex-start" spacing={5}>
                <Text fontSize="md" color="gray.600" lineHeight="1.9" textAlign='justify'>
                  Impulsar a personas y organizaciones a descubrir y desarrollar
                  su máximo potencial, a través del coaching personal, grupal y
                  conferencias transformadoras, brindando herramientas prácticas
                  que impulsen el crecimiento integral, la confianza y la acción
                  enfocada hacia resultados extraordinarios.
                </Text>

                <Box h="2px" w="80px" bg="#00AEEF" mt={2} mb={4} />

                {/* Teléfono */}
                <Box color='gray.800'>
                  <Text
                    fontSize="xs"
                    textTransform="uppercase"
                    color="gray.500"
                  >
                    Llama en cualquier momento
                  </Text>
                  <Text fontWeight="700" mt={1}>
                    (571) 288-9862
                  </Text>
                </Box>

                {/* Email */}
                <Box>
                  <Text
                    fontSize="xs"
                    textTransform="uppercase"
                    color="gray.500"
                  >
                    Enviar correo electrónico
                  </Text>
                  <Text fontWeight="700" mt={1} color='gray.800'>
                    caguzman000@gmail.com
                  </Text>
                </Box>

                {/* Dirección */}
                <Box>
                  <Text
                    fontSize="xs"
                    textTransform="uppercase"
                    color="gray.500"
                  >
                    Visitar la oficina
                  </Text>
                  <Text fontWeight="700" mt={1} color='gray.800'>
                    8 Ranor Ct Reading PA 19606
                  </Text>
                </Box>

                {/* Iconos sociales */}
                <HStack spacing={4} mt={4}>
                  <SocialCircle icon={FaFacebookF} />
                  <SocialCircle icon={FaInstagram} />
                </HStack>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* SECCIÓN: FORMULARIO - ENVÍANOS UN MENSAJE */}
      <Box bg="#F3F7FB" py={{ base: 12, md: 16 }}>
        <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }}>
          <VStack spacing={3} textAlign="center" mb={8}>
            <HStack spacing={2}>
              <Box w="28px" h="3px" bg="#00AEEF" borderRadius="full" />
              <Box w="16px" h="3px" bg="#00AEEF" borderRadius="full" />
            </HStack>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              color="#0F172A"
            >
              Envíanos un mensaje
            </Heading>
          </VStack>

          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel color='blue.800'>Nombre</FormLabel>
              <Input placeholder="Nombre" bg="white" />
            </FormControl>

            <FormControl>
              <FormLabel color='blue.800'>Teléfono</FormLabel>
              <Input placeholder="Teléfono" bg="white" />
            </FormControl>

            <FormControl>
              <FormLabel color='blue.800'>Correo electrónico</FormLabel>
              <Input
                type="email"
                placeholder="Correo electrónico"
                bg="white"
              />
            </FormControl>

            <FormControl>
              <FormLabel color='blue.800'>Curso de interés</FormLabel>
              <Input placeholder="Curso de interés" bg="white" />
            </FormControl>

            <FormControl>
              <FormLabel color='blue.800'>Mensaje</FormLabel>
              <Textarea
                placeholder="Preguntas"
                rows={5}
                bg="white"
              />
            </FormControl>

            <Button
              mt={4}
              bg="#003452"
              color="white"
              fontWeight="600"
              py={6}
              borderRadius={0}
              _hover={{ bg: "#01273a" }}
            >
              Enviar
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

/* Subcomponente para iconos sociales */
function SocialCircle({ icon }) {
  return (
    <Link
      href="#"
      _hover={{ textDecoration: "none" }}
    >
      <Box
        w="34px"
        h="34px"
        borderRadius="full"
        bg="#E6F4FF"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} boxSize={4} color="#003452" />
      </Box>
    </Link>
  );
}
