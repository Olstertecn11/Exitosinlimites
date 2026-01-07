import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

export default function ServicesBlock() {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg="white"
      position="relative"
    >
      {/* Título */}
      <VStack spacing={3} textAlign="center" mb={12}>
        <HStack spacing={2}>
          <Box w="28px" h="3px" bg="#00AEEF" borderRadius="full" />
          <Box w="16px" h="3px" bg="#00AEEF" borderRadius="full" />
        </HStack>

        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color="#0F172A"
        >
          Nuestros Servicios
        </Heading>
      </VStack>

      {/* Cards */}
      <Flex
        maxW="1200px"
        mx="auto"
        py={10}
        px={{ base: 4, md: 8 }}
        gap={8}
        direction={{ base: "column", md: "row" }}
      >
        {/* Card 1 */}
        <Box
          flex="1"
          bg="white"
          p={{ base: 6, md: 10 }}
          borderRadius="md"
          boxShadow="0 20px 40px rgba(15, 23, 42, 0.08)"
        >
          <VStack spacing={5} textAlign="center">
            <Heading fontSize="2xl" color="#111827">
              Conferencias de alto impacto
            </Heading>

            <Text color="gray.600" lineHeight="1.8" fontSize='lg'>
              ¿Estás buscando una conferencia que no solo impacte, sino que
              transforme? En Éxito sin Límites ofrecemos conferencias que
              inspiran, movilizan y transforman. A través de mensajes
              impactantes y herramientas prácticas.
            </Text>

            <IconButton
              aria-label="Ver más"
              icon={<Icon as={FiArrowRight} boxSize={5} />}
              variant="outline"
              borderRadius="full"
              size="lg"
              color="gray.600"
              _hover={{ bg: "gray.100" }}
            />
          </VStack>
        </Box>

        {/* Card 2 */}
        <Box
          flex="1"
          bg="white"
          p={{ base: 6, md: 10 }}
          borderRadius="md"
          boxShadow="0 20px 40px rgba(15, 23, 42, 0.08)"
        >
          <VStack spacing={5} textAlign="center">
            <Heading fontSize="2xl" color="#111827">
              Motivación y liderazgo
            </Heading>

            <Text color="gray.600" lineHeight="1.8" fontSize="lg">
              Desarrolla tus habilidades de liderazgo y fortalece tu motivación
              personal con nuestros talleres interactivos, diseñados para
              inspirarte y guiarte en tu camino hacia el éxito. Aprenderás a
              liderar equipos con confianza.
            </Text>

            <IconButton
              aria-label="Ver más"
              icon={<Icon as={FiArrowRight} boxSize={5} />}
              variant="outline"
              borderRadius="full"
              size="lg"
              color="gray.600"
              _hover={{ bg: "gray.100" }}
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
