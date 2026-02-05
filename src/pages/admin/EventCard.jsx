// EventCard.jsx
import React from "react";
import {
  Box, Image, Text, Stack, Heading, Button, Badge, Icon
} from "@chakra-ui/react";
import { FiMapPin, FiClock, FiUser, FiInfo } from "react-icons/fi";

const EventCard = ({ evento, onOpen }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
      <Image
        src={evento.url_image || "https://via.placeholder.com/300"}
        h="200px"
        w="full"
        objectFit="cover"
      />

      <Stack p={4} spacing={3}>
        <Badge alignSelf="flex-start" colorScheme="purple">{evento.tematica}</Badge>
        <Heading size="md">{evento.titulo}</Heading>

        <Stack fontSize="sm" color="gray.600" spacing={1}>
          <Text><Icon as={FiMapPin} mr={2} />{evento.location}</Text>
          <Text><Icon as={FiClock} mr={2} />{new Date(evento.schedule).toLocaleString()}</Text>
          <Text><Icon as={FiUser} mr={2} /><b>Orador:</b> {evento.speaker}</Text>
        </Stack>

        <Text fontSize="sm" noOfLines={2} color="gray.500">
          <Icon as={FiInfo} mr={2} /> Material: {evento.material || "Ninguno"}
        </Text>

        <Box pt={2}>
          <Text fontWeight="bold" color="gray.600" mb={2}>
            Cupos disponibles: {evento.sites_availables}
          </Text>

          <Button
            colorScheme={evento.sites_availables > 0 ? "blue" : "red"}
            w="full"
            onClick={() => onOpen(evento)}
            isDisabled={evento.sites_availables <= 0}
          >
            {evento.sites_availables > 0 ? "Inscribirme" : "Agotado"}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default EventCard;
