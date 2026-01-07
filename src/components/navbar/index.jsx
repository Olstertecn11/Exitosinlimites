import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Icon,
  Divider,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const history = useNavigate();

  const redirect = (path) => {
    history(path);
  };


  return (
    <Box
      position="relative"
      w="100%"
      zIndex="100"
      bg="transparent"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        h="80px"
        px={6}
        color="white"
      >
        {/* LOGO */}
        <Image
          src="https://exitossinlimites.com/wp-content/uploads/2021/10/logo-transparent-e1748282062154.png"
          alt="logo"
          h="55px"
          objectFit="contain"
        />

        {/* MENU */}
        <HStack spacing={8} fontWeight="600">
          <Text onClick={() => redirect('/')} cursor="pointer">Inicio</Text>
          <Text onClick={() => redirect('/acerca-de-nosotros')} cursor="pointer">Acerca de nosotros</Text>
          <Text onClick={() => redirect('/servicios')} cursor="pointer">Servicios</Text>
          <Text cursor="pointer">Comercio</Text>
          <Text cursor="pointer">Blogs</Text>
          <Text cursor="pointer">Contacto</Text>
        </HStack>

        {/* PHONE SECTION */}
        <HStack spacing={4}>
          <Divider orientation="vertical" borderColor="whiteAlpha.500" />

          <HStack spacing={3}>
            <Flex
              bg="#4DA3FF"
              w="40px"
              h="40px"
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <Icon as={FiPhoneCall} boxSize={5} />
            </Flex>

            <VStack spacing={0} align="start" fontSize="sm">
              <Text>Llama en cualquier momento</Text>
              <Text fontWeight="bold">(571) 288-9862</Text>
            </VStack>
          </HStack>
        </HStack>
      </Flex>

      <Box borderBottom="1px solid rgba(255,255,255,.2)" />
    </Box>
  );
}
