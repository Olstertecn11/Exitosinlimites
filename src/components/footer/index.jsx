// Footer.jsx
import {
  Box,
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Link,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhoneCall } from "react-icons/fi";

const LOGO_URL =
  "https://exitossinlimites.com/wp-content/uploads/2021/10/logo-transparent-e1748282062154.png";

export default function Footer() {
  return (
    <Box as="footer" bg="#003452" color="white" pt={16} pb={8}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "flex-start" }}
          gap={{ base: 10, md: 16 }}
        >
          {/* Columna 1: logo + descripción + redes */}
          <VStack align="flex-start" spacing={6} flex="1">
            <Image
              src={LOGO_URL}
              alt="Éxito sin Límites"
              h="60px"
              objectFit="contain"
            />

            <Text maxW="360px" fontSize="sm" lineHeight="1.8" color="whiteAlpha.900">
              Impulsar a personas y organizaciones a descubrir y desarrollar su
              máximo potencial, a través del coaching personal, grupal y
              conferencias transformadoras.
            </Text>

            <HStack spacing={4} mt={2}>
              <SocialCircle icon={FaFacebookF} ariaLabel="Facebook" />
              <SocialCircle icon={FaInstagram} ariaLabel="Instagram" />
              <SocialCircle icon={FaLinkedinIn} ariaLabel="LinkedIn" />
            </HStack>
          </VStack>

          {/* Columna 2: links Éxitos sin límites */}
          <VStack align="flex-start" spacing={3} flex="0.8">
            <Text fontWeight="700" mb={1}>
              Éxitos sin límites
            </Text>
            <FooterLink>Hogar</FooterLink>
            <FooterLink>Acerca de</FooterLink>
            <FooterLink>Servicios</FooterLink>
            <FooterLink>Comercio</FooterLink>
            <FooterLink>Contacto</FooterLink>
          </VStack>

          {/* Columna 3: Servicios */}
          <VStack align="flex-start" spacing={3} flex="0.9">
            <Text fontWeight="700" mb={1}>
              Servicios
            </Text>
            <FooterLink>Conferencias Profesionales</FooterLink>
            <FooterLink>Motivación y liderazgo</FooterLink>
            <FooterLink>Entrenamiento personal</FooterLink>
          </VStack>

          {/* Columna 4: Contacto */}
          <VStack align="flex-start" spacing={5} flex="1.1">
            <Text fontWeight="700">Contacto</Text>

            <HStack align="flex-start" spacing={4}>
              <CircleIcon icon={FiMapPin} />
              <Box>
                <Text
                  fontSize="xs"
                  textTransform="uppercase"
                  color="whiteAlpha.700"
                >
                  Dirección
                </Text>
                <Text fontWeight="600">Reading PA</Text>
              </Box>
            </HStack>

            <HStack align="flex-start" spacing={4}>
              <CircleIcon icon={FiMail} />
              <Box>
                <Text
                  fontSize="xs"
                  textTransform="uppercase"
                  color="whiteAlpha.700"
                >
                  Dirección de correo electrónico
                </Text>
                <Text fontWeight="600">caguzman000@gmail.com</Text>
              </Box>
            </HStack>

            <HStack align="flex-start" spacing={4}>
              <CircleIcon icon={FiPhoneCall} />
              <Box>
                <Text
                  fontSize="xs"
                  textTransform="uppercase"
                  color="whiteAlpha.700"
                >
                  Llámanos
                </Text>
                <Text fontWeight="600">(571) 288-9862</Text>
              </Box>
            </HStack>
          </VStack>
        </Flex>

        {/* Línea divisoria */}
        <Box mt={10}>
          <Divider borderColor="whiteAlpha.300" />
        </Box>

        {/* Copyright */}
        <Text
          mt={6}
          fontSize="xs"
          textAlign="center"
          color="whiteAlpha.800"
        >
          © 2025 Éxito Sin Límites Formación De Ganadores
          Diseñado Por WebSolutionsGT
        </Text>
      </Box>
    </Box>
  );
}

/* --- Subcomponentes pequeños para mantener limpio --- */

function FooterLink({ children }) {
  return (
    <Link
      href="#"
      fontSize="sm"
      color="whiteAlpha.900"
      _hover={{ color: "white", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
}

function SocialCircle({ icon, ariaLabel }) {
  return (
    <Box
      as="button"
      aria-label={ariaLabel}
      w="34px"
      h="34px"
      borderRadius="full"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{ bg: "whiteAlpha.800" }}
    >
      <Icon as={icon} boxSize={4} color="#003452" />
    </Box>
  );
}

function CircleIcon({ icon }) {
  return (
    <Box
      w="44px"
      h="44px"
      borderRadius="full"
      bg="#1B5275"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={icon} boxSize={5} />
    </Box>
  );
}
