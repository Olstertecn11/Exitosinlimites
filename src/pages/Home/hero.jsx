// Hero.jsx
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";

const imageUrl =
  "https://exitossinlimites.com/wp-content/uploads/2025/05/business-executives-participating-business-meeting_107420-63848.avif";

export default function Hero() {
  return (
    <Box as="section" bg="white" py={{ base: 12, md: 20 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        gap={{ base: 10, md: 16 }}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        {/* Imagen izquierda */}
        <Box flex="1" w="100%">
          <Image
            src={imageUrl}
            alt="Personas en conferencia"
            w="100%"
            objectFit="cover"
          />
        </Box>

        {/* Texto derecha */}
        <Box flex="1">
          {/* Nuestra Misión */}
          <VStack align="flex-start" spacing={6}>
            <Box>
              <HStack spacing={2} mb={2}>
                <Box w="28px" h="3px" bg="#00AEEF" borderRadius="full" />
                <Box w="16px" h="3px" bg="#00AEEF" borderRadius="full" />
              </HStack>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={3}
                color="#111827"
              >
                Nuestra Misión
              </Heading>
              <Text fontSize="md" color="gray.600" lineHeight="1.8" textAlign="justify">
                Impulsar a personas y organizaciones a descubrir y desarrollar
                su máximo potencial, a través del coaching personal, grupal y
                conferencias transformadoras, brindando herramientas prácticas
                que impulsen el crecimiento integral, la confianza y la acción
                enfocada hacia resultados extraordinarios.
              </Text>
            </Box>

            {/* Nuestra Visión */}
            <Box>
              <HStack spacing={2} mb={2}>
                <Box w="28px" h="3px" bg="#00AEEF" borderRadius="full" />
                <Box w="16px" h="3px" bg="#00AEEF" borderRadius="full" />
              </HStack>
              <Heading
                as="h3"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={3}
                color="#111827"
              >
                Nuestra Visión
              </Heading>
              <Text fontSize="md" color="gray.600" lineHeight="1.8" textAlign="justify">
                Ser una empresa líder e inspiradora en el mundo hispano,
                reconocida por transformar vidas, guiando a miles de personas a
                vivir con propósito, claridad y pasión, alcanzando un éxito sin
                límites en cada área de su vida.
              </Text>
            </Box>

            {/* Botón + tarjeta teléfono */}
            <VStack
              spacing={6}
              flexWrap="wrap"
              align="left"
              pt={2}
            >
              <Button
                bg="#00AEEF"
                color="white"
                fontWeight="bold"
                px={8}
                py={6}
                borderRadius="0"
                _hover={{ bg: "#008cd1" }}
              >
                ACERCA DE MÁS
              </Button>

              <HStack
                spacing={4}
                p={4}
                borderRadius="full"
                bg="white"
                boxShadow="0 12px 30px rgba(15, 23, 42, 0.12)"
              >
                <Box
                  w="44px"
                  h="44px"
                  borderRadius="full"
                  bg="#E6F4FF"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FiPhoneCall} color="#00AEEF" boxSize={5} />
                </Box>
                <Box>
                  <Text
                    fontSize="xs"
                    textTransform="uppercase"
                    color="gray.500"
                  >
                    Llama en cualquier momento
                  </Text>
                  <Text fontWeight="bold" fontSize="sm" color="#111827">
                    +1 (307) 776-0608
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
