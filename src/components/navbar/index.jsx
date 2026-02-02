import React from "react";
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
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Stack,
  Collapse,
} from "@chakra-ui/react";

import { FaAngleDown } from "react-icons/fa";
import { FiPhoneCall, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const mobile = useDisclosure();
  const servicesCollapse = useDisclosure();

  const redirect = (path) => navigate(path);

  // estilos reutilizables
  const linkStyle = {
    cursor: "pointer",
    _hover: { opacity: 0.9 },
    userSelect: "none",
  };

  return (
    <Box
      position="relative"
      w="100%"
      zIndex={2000} // 🔥 alto para que quede encima del hero
      bg="transparent"
      pointerEvents="auto" // 🔥 importante si el padre trae overlay raro
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        h="80px"
        px={{ base: 4, md: 6 }}
        color="white"
      >
        {/* LOGO */}
        <Image
          src="https://exitossinlimites.com/wp-content/uploads/2021/10/logo-transparent-e1748282062154.png"
          alt="logo"
          h="55px"
          objectFit="contain"
          cursor="pointer"
          onClick={() => redirect("/")}
        />

        {/* DESKTOP MENU */}
        <HStack spacing={8} fontWeight="600" display={{ base: "none", md: "flex" }}>
          <Text onClick={() => redirect("/")} {...linkStyle}>
            Inicio
          </Text>

          <Text onClick={() => redirect("/acerca-de-nosotros")} {...linkStyle}>
            Acerca de nosotros
          </Text>

          <Menu
            isLazy
            placement="bottom-start"
            gutter={10}
            // 👇 evita problemas de click/focus dentro de overlays
            closeOnSelect
          >
            <MenuButton
              as={Button}
              rightIcon={<FaAngleDown />}
              color="white"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              _expanded={{ bg: "transparent" }}
              _focus={{ boxShadow: "none" }}
              px={0}
              fontWeight="600"
            >
              Servicios
            </MenuButton>

            <MenuList
              // 🔥 clave: que el list quede encima y clickeable
              zIndex={9999}
              bg="rgba(0,0,0,0.35)"
              backdropFilter="blur(12px) brightness(0.85)"
              border="1px solid rgba(255,255,255,0.12)"
              py={2}
              minW="270px"
            >
              <MenuItem
                bg="transparent"
                color="white"
                _hover={{ bg: "rgba(55,83,106,0.85)" }}
                _focus={{ bg: "rgba(55,83,106,0.85)" }}
                onClick={() => redirect("/servicios/conferencias-alto-impacto")}
              >
                Conferencias de alto impacto
              </MenuItem>

              <MenuItem
                bg="transparent"
                color="white"
                _hover={{ bg: "rgba(55,83,106,0.85)" }}
                _focus={{ bg: "rgba(55,83,106,0.85)" }}
                onClick={() => redirect("/servicios/entrenamiento-personal")}
              >
                Entrenamiento personal
              </MenuItem>

              <MenuItem
                bg="transparent"
                color="white"
                _hover={{ bg: "rgba(55,83,106,0.85)" }}
                _focus={{ bg: "rgba(55,83,106,0.85)" }}
                onClick={() => redirect("/servicios/motivacion&liderazgo")}
              >
                Motivación y liderazgo
              </MenuItem>
            </MenuList>
          </Menu>
          <Text onClick={() => redirect("/contacto")} {...linkStyle}>
            Eventos
          </Text>
          <Text onClick={() => redirect("/contacto")} {...linkStyle}>
            Contacto
          </Text>
        </HStack>

        {/* PHONE + HAMBURGER */}
        <HStack spacing={4}>
          <Divider
            orientation="vertical"
            borderColor="whiteAlpha.500"
            display={{ base: "none", md: "block" }}
            h="40px"
          />

          {/* phone desktop */}
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
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
              <Text opacity={0.9}>Llama en cualquier momento</Text>
              <Text fontWeight="bold">(571) 288-9862</Text>
            </VStack>
          </HStack>

          {/* hamburger mobile */}
          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            aria-label="Abrir menú"
            icon={<FiMenu />}
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
            _active={{ bg: "whiteAlpha.300" }}
            onClick={mobile.onOpen}
          />
        </HStack>
      </Flex>

      <Box borderBottom="1px solid rgba(255,255,255,.2)" />

      {/* ===== MOBILE DRAWER ===== */}
      <Drawer isOpen={mobile.isOpen} placement="right" onClose={mobile.onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="#0B2E47" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>

          <DrawerBody>
            <Stack spacing={2}>
              <Button
                variant="ghost"
                justifyContent="flex-start"
                color="white"
                onClick={() => {
                  mobile.onClose();
                  redirect("/");
                }}
              >
                Inicio
              </Button>

              <Button
                variant="ghost"
                justifyContent="flex-start"
                color="white"
                onClick={() => {
                  mobile.onClose();
                  redirect("/acerca-de-nosotros");
                }}
              >
                Acerca de nosotros
              </Button>

              {/* Servicios (collapse) */}
              <Button
                variant="ghost"
                justifyContent="space-between"
                rightIcon={<FaAngleDown />}
                color="white"
                onClick={servicesCollapse.onToggle}
              >
                Servicios
              </Button>

              <Collapse in={servicesCollapse.isOpen} animateOpacity>
                <Box pl={4} borderLeft="1px solid rgba(255,255,255,0.15)" ml={2}>
                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    color="white"
                    w="full"
                    onClick={() => {
                      mobile.onClose();
                      redirect("/servicios/conferencias-alto-impacto");
                    }}
                  >
                    Conferencias de alto impacto
                  </Button>

                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    color="white"
                    w="full"
                    onClick={() => {
                      mobile.onClose();
                      redirect("/servicios/entrenamiento-personal");
                    }}
                  >
                    Entrenamiento personal
                  </Button>

                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    w="full"
                    color="white"
                    onClick={() => {
                      mobile.onClose();
                      redirect("/servicios/motivacion&liderazgo");
                    }}
                  >
                    Motivación y liderazgo
                  </Button>
                </Box>
              </Collapse>

              <Button
                variant="ghost"
                justifyContent="flex-start"
                color="white"
                onClick={() => {
                  mobile.onClose();
                  redirect("/contacto");
                }}
              >
                Contacto
              </Button>

              <Divider my={4} borderColor="whiteAlpha.300" />

              {/* phone mobile */}
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
                  <Text opacity={0.9}>Llama en cualquier momento</Text>
                  <Text fontWeight="bold">(571) 288-9862</Text>
                </VStack>
              </HStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
