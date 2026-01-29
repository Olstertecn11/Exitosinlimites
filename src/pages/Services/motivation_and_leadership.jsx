import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  FormControl,
  Link,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HERO_BG = "https://cdn.prod.website-files.com/645e5ca8882c17703ced9581/65cfb1b03db952abc466bcc0_Quels%20sont%20les%20diffe%CC%81rents%20types%20de%20leadership%20%20%20Visconti%20Partners.png"; // (opcional) fondo superior tipo banner si lo quieres
const WORLD_BG =
  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5pFxGhtH4nf7m8LbGDsktb/2f466f97669c53f4c31578ec8ae82237/GettyImages-2168812964.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"; // textura mapa (puedes cambiarla)
const LOGO_URL = ""; // pon tu logo cuando quieras
const MAIN_IMAGE_URL = "https://www.sloneek.cz/wp-content/uploads/2024/02/young-business-people-meeting-office-teamwork-grou-2023-11-27-04-54-24-utc-1024x722.jpg"; // imagen grande del contenido (la pones luego)

export default function MotivationLeadership({ NavbarComponent }) {
  const navigate = useNavigate();

  // Side links (servicios)
  const sideLinks = [
    {
      label: "Conferencias de alto impacto",
      to: "/servicios/conferencias-alto-impacto",
      active: false,
    },
    {
      label: "Entrenamiento personal",
      to: "/servicios/entrenamiento-personal",
      active: false,
    },
    {
      label: "Motivación y liderazgo",
      to: "/servicio/motivacion&liderazgo",
      active: true,
    },
  ];

  const topics = [
    "Liderazgo efectivo",
    "Liderazgo transformacional",
    "Resolución de conflictos",
    "Trabajo en equipo",
    "Relaciones interpersonales del líder",
    "Espíritu de liderazgo",
    "El líder y su visión",
    "Inteligencia emocional del líder",
  ];

  return (
    <Box bg="#F3F7FB">
      {/* Navbar si lo pasas desde Layout */}

      {/* ====== BLOQUE SUPERIOR (logo + lista + form) ====== */}
      <Box
        bg="white"
        position="relative"
        overflow="hidden"
      >
        {/* textura/overlay mapa */}
        <Box
          position="absolute"
          inset={0}
          opacity={0.9}
          bgImage={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${WORLD_BG})`}
          bgRepeat="no-repeat"
          bgSize="cover"
          pointerEvents="none"
        />
        {NavbarComponent ? (
          <Box position="relative" backdropFilter="blur(10px) brightness(0.4)">
            {NavbarComponent}
          </Box>
        ) : null}
        <Box
          maxW="1200px"
          mx="auto"
          padding={'2rem'}
          px={{ base: 4, md: 8 }}
          position="relative"
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, lg: 14 }}
            align="flex-start"
          >
            {/* LEFT */}
            <Box flex="1">
              <Heading
                color="white"
                fontWeight="800"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={4}
              >
                Coaching Personal y en grupo
              </Heading>

              <VStack align="flex-start" spacing={2} color="gray.700">
                {topics.map((t, i) => (
                  <Text key={t} fontSize="md" color={'gray.200'}>
                    {i + 1}. {t}
                  </Text>
                ))}
              </VStack>
            </Box>

            {/* RIGHT FORM */}
            <Box
              flex="1"
              w="100%"
              maxW={{ base: "100%", lg: "520px" }}
              bg="#ffffff70"
              border="none"
              borderColor="gray.200"
              borderRadius="md"
              boxShadow="0 18px 45px rgba(15,23,42,0.08)"
              p={{ base: 4, md: 6 }}
            >
              <VStack spacing={4} align="stretch">
                <Input _placeholder={{ color: 'gray.400' }} bg='#0b12167a' placeholder="Nombre" />
                <Input _placeholder={{ color: 'gray.400' }} bg='#0b12167a' placeholder="Teléfono" />
                <Input _placeholder={{ color: 'gray.400' }} bg='#0b12167a' type="email" placeholder="Correo electrónico" />
                <Input _placeholder={{ color: 'gray.400' }} bg='#0b12167a' placeholder="Curso de interés" />
                <Textarea placeholder="Preguntas" rows={4} bg='#ffffff8a' color='black' _placeholder={{ color: 'gray.600' }} />
                <Button
                  bg="gray.200"
                  color="#0b12167a"
                  borderRadius="0"
                  py={6}
                  _hover={{ bg: "gray.100" }}
                >
                  Enviar
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* ====== BLOQUE PRINCIPAL (sidebar + contenido) ====== */}
      <Box bg="white" py={{ base: 12, md: 16 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, lg: 10 }}
            align="flex-start"
          >
            {/* SIDEBAR */}
            <Box w={{ base: "100%", lg: "320px" }}>
              <Box bg="white" border="1px solid" borderColor="gray.200">
                {sideLinks.map((l) => (
                  <Flex
                    key={l.label}
                    align="center"
                    justify="space-between"
                    px={5}
                    py={5}
                    cursor="pointer"
                    bg={l.active ? "#4AADE7" : "white"}
                    color={l.active ? "white" : "#0F172A"}
                    borderBottom="1px solid"
                    borderColor={l.active ? "rgba(255,255,255,0.25)" : "gray.200"}
                    _hover={{
                      bg: l.active ? "#40A3DE" : "#F3F7FB",
                    }}
                    onClick={() => navigate(l.to)}
                  >
                    <Text fontWeight="700">{l.label}</Text>
                    <Icon as={FiArrowRight} />
                  </Flex>
                ))}
              </Box>

              {/* CTA CARD */}
              <Box
                mt={6}
                bg="#003452"
                borderRadius="0"
                overflow="hidden"
                position="relative"
                minH="320px"
              >
                <Box
                  position="absolute"
                  inset={0}
                  opacity={0.18}
                  bgImage="url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=60)"
                  bgSize="cover"
                  bgPosition="center"
                />
                <Box position="relative" p={7} color="white">
                  <Heading fontSize="2xl" fontWeight="800" lineHeight="1.2">
                    Contáctanos <br /> para cualquier <br /> asesoramiento.
                  </Heading>

                  <Box
                    mt={8}
                    w="64px"
                    h="64px"
                    borderRadius="full"
                    bg="#1B79C6"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                  >
                    <Icon as={FiPhoneCall} boxSize={7} />
                  </Box>

                  <VStack spacing={1} mt={4} textAlign="center">
                    <Text fontSize="sm" color="whiteAlpha.800">
                      Llama en cualquier momento
                    </Text>
                    <Text fontWeight="800" fontSize="xl">
                      (571) 288-9862
                    </Text>
                  </VStack>
                </Box>
              </Box>
            </Box>

            {/* CONTENT */}
            <Box flex="1" w="100%">
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="900"
                color="#0F172A"
                mb={5}
              >
                Motivación y liderazgo
              </Heading>

              {/* Imagen grande */}
              {MAIN_IMAGE_URL ? (
                <Image
                  src={MAIN_IMAGE_URL}
                  alt="Motivación y liderazgo"
                  w="100%"
                  borderRadius="0"
                  objectFit="cover"
                  maxH="420px"
                />
              ) : (
                <Box
                  w="100%"
                  h={{ base: "240px", md: "420px" }}
                  bg="#E1E8F0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.500"
                  fontSize="sm"
                >
                  Imagen principal aquí
                </Box>
              )}

              <Text mt={6} color="gray.600" lineHeight="1.95" fontSize="md">
                Desarrolla tus habilidades de liderazgo y fortalece tu motivación
                personal con nuestros talleres interactivos, diseñados para
                inspirarte y guiarte en tu camino hacia el éxito. Aprenderás a
                liderar equipos con confianza, tomar decisiones efectivas y
                gestionar conflictos con inteligencia emocional en entornos
                profesionales exigentes.
              </Text>

              <Text mt={4} color="gray.600" lineHeight="1.95" fontSize="md">
                Trabajamos con metodologías prácticas y dinámicas: ejercicios
                aplicables a la vida real, herramientas de comunicación, rutinas
                de productividad, mentalidad de crecimiento y planes de acción.
                El objetivo es que salgas con claridad, enfoque y hábitos que se
                sostengan en el tiempo.
              </Text>

              {/* Bloque extra: beneficios */}
              <Box mt={8} bg="#F3F7FB" p={{ base: 5, md: 7 }}>
                <Heading fontSize="lg" color="#0F172A" fontWeight="900" mb={3}>
                  ¿Qué lograrás con este entrenamiento?
                </Heading>

                <VStack align="flex-start" spacing={2} color="gray.700">
                  <Text>• Aumentar tu confianza y comunicación al liderar.</Text>
                  <Text>• Mejorar tu toma de decisiones bajo presión.</Text>
                  <Text>• Gestionar conflictos de manera inteligente.</Text>
                  <Text>• Motivar equipos y elevar el rendimiento.</Text>
                  <Text>• Construir una visión clara y un plan de acción realista.</Text>
                </VStack>

                <HStack mt={6} spacing={3} flexWrap="wrap">
                  <Button
                    bg="#00AEEF"
                    color="white"
                    _hover={{ bg: "#008fca" }}
                    borderRadius="0"
                    px={8}
                  >
                    Solicitar información
                  </Button>
                  <Button
                    variant="outline"
                    borderRadius="0"
                    px={8}
                    onClick={() => navigate("/Contacto")}
                  >
                    Ir a contacto
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
