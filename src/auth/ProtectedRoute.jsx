import React from "react";
import { Navigate } from "react-router-dom";
import { Center, Spinner, Text } from "@chakra-ui/react";
import { useAuth } from "./AuthContext";
import { useLocation } from "react-router-dom";

export default function ProtectedRoute({ roles = [], children }) {
  const { booting, isAuthed, user } = useAuth();

  const location = useLocation();

  const isLoginRoute = location.pathname === "/admin/login";


  if (booting) {
    return (
      <Center minH="60vh" flexDir="column" gap="3">
        <Spinner size="lg" />
        <Text>Cargando sesión...</Text>
      </Center>
    );
  }

  if (isLoginRoute) return children;

  if (!isAuthed) return <Navigate to="/admin/login" replace />;

  if (roles.length && !roles.includes(user?.role)) {
    return (
      <Center minH="60vh" flexDir="column" gap="2">
        <Text fontWeight="700">No autorizado</Text>
        <Text fontSize="sm" opacity={0.8}>
          Tu rol: {user?.role}
        </Text>
      </Center>
    );
  }

  console.log("ProtectedRoute: access granted for user:", user);

  return children;
}
