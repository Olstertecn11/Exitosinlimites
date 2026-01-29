import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  Spacer,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { FiCheck, FiMail, FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function TopBar() {
  return (
    <Box bg="#003452" color="white" fontSize="xs" h={{ base: "auto", md: "60px" }} py={{ base: 2, md: 0 }}>
      <Flex
        maxW="1200px"
        h="full"
        mx="auto"
        align="center"
        px={4}
        flexDir={{ base: "column", md: "row" }} // Columna en móvil, fila en desktop
        gap={{ base: 2, md: 0 }}
      >
        {/* Lado izquierdo - Info de contacto */}
        <HStack spacing={4} justify={{ base: "center", md: "flex-start" }} w={{ base: "full", md: "auto" }}>
          <HStack spacing={1}>
            <Icon as={FiCheck} boxSize={3} color="cyan.400" />
            <Text fontWeight="medium">Reading PA</Text>
          </HStack>

          {/* El email se oculta en móviles muy pequeños para ahorrar espacio */}
          <HStack spacing={1} display={{ base: "none", sm: "flex" }}>
            <Icon as={FiMail} boxSize={3} color="cyan.400" />
            <Text>caguzman000@gmail.com</Text>
          </HStack>
        </HStack>

        <Spacer display={{ base: "none", md: "block" }} />

        {/* Lado derecho - Acciones y Redes */}
        <HStack spacing={3} justify="center" w={{ base: "full", md: "auto" }}>
          {/* Carrito y Buscar */}
          <HStack spacing={3}>
            <IconButton
              aria-label="Buscar"
              icon={<FiSearch />}
              variant="ghost"
              color="white"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
            <HStack spacing={1} cursor="pointer">
              <Icon as={FiShoppingCart} boxSize={4} />
              <Box bg="red.500" borderRadius="full" px={1.5} fontSize="10px" fontWeight="bold">
                0
              </Box>
            </HStack>
          </HStack>

          <Divider orientation="vertical" borderColor="whiteAlpha.500" h="18px" />

          {/* Redes Sociales - Ajustamos el espaciado en móvil */}
          <HStack spacing={{ base: 0, md: 1 }}>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              color="white"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebookF />}
              variant="ghost"
              color="white"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="white"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
            <IconButton
              aria-label="Pinterest"
              icon={<FaPinterestP />}
              variant="ghost"
              color="white"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
