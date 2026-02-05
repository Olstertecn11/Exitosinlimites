import React from "react";
import {
  Box, Flex, Text, VStack, Icon, Link, Drawer, DrawerContent,
  useDisclosure, DrawerOverlay, IconButton, HStack, Spacer
} from "@chakra-ui/react";
import { FiCalendar, FiBook, FiDollarSign, FiLogOut, FiMenu } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const NavItem = ({ icon, children, to, ...rest }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      as={RouterLink}
      to={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      w="full"
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? "blue.500" : "transparent"}
        color={isActive ? "white" : "gray.600"}
        _hover={{
          bg: isActive ? "blue.500" : "blue.50",
          color: isActive ? "white" : "blue.600",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="18" as={icon} />}
        <Text fontWeight="medium">{children}</Text>
      </Flex>
    </Link>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  }

  return (
    <Box
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" align="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">
          AdminPanel
        </Text>
      </Flex>
      <VStack spacing={2} align="stretch">
        <NavItem to="/admin/eventos" icon={FiCalendar}>Eventos</NavItem>
        <NavItem to="/admin/libros" icon={FiBook}>Libros</NavItem>
        <NavItem to="/admin/ventas" icon={FiDollarSign}>Ventas</NavItem>
        <Spacer h="10" />
        <NavItem icon={FiLogOut} color="red.500" onClick={handleLogout}>Cerrar Sesión</NavItem>
      </VStack>
    </Box>
  );
};

const AdminNav = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Sidebar para Escritorio */}
      <SidebarContent display={{ base: "none", md: "block" }} />

      {/* Drawer para Móvil */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* TopNav para Móvil */}
      <Flex
        display={{ base: "flex", md: "none" }}
        ml={{ base: 0, md: 60 }}
        px="4"
        height="20"
        alignItems="center"
        bg="white"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
        justifyContent="flex-start"
      >
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Text fontSize="2xl" ml="8" fontWeight="bold" color="blue.600">
          AdminPanel
        </Text>
      </Flex>

      {/* Contenido Principal */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default AdminNav;
