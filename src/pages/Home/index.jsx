// src/pages/Home.tsx
import { SimpleGrid, Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Hero from './hero'
import ServicesBlock from "./services_block";
import CtaDivider from './cta_divider'
import BooksSection from './books_section'
import AdvertisementSection from "./advertisement-section";
import EventCard from "../admin/EventCard";
import ExpertsSection from "./expers_section";
import EventGallery from './event_gallery'



const backgroundImageUrl =
  "https://exitossinlimites.com/wp-content/uploads/2025/05/63810.jpg";

export default function Home({ NavbarComponent }) {
  return (
    <div>
      <Box position="relative">
        <Box
          minH="100vh"
          bgImage={`url(${backgroundImageUrl})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            // capa azul/violeta encima de la imagen
            bg: "linear-gradient(90deg, rgb(5 31 80 / 0%), rgba(9, 30, 64, 0.85))",
          }}
        >
          {/* Navbar que viene por prop */}
          <Box position="relative" zIndex={2}>
            {NavbarComponent}
          </Box>

          {/* Contenido principal del hero */}
          <Flex
            position="relative"
            zIndex={0}
            maxW="1200px"
            mx="auto"
            px={{ base: 4, md: 8 }}
            minH="calc(100vh - 100px)"
            align="center"
          >
            <Box maxW={{ base: "100%", md: "600px" }} >
              <Heading
                as="h1"
                fontSize='4.2rem'
                lineHeight="1.2"
                color="white"
                mb={4}
              >
                Bienvenidos a
                Éxito sin Límites
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
                color="white"
                lineHeight="1.3"
                mb={8}
              >
                impulsamos tu liderazgo, potenciamos tu crecimiento
                y te guiamos a superar tus límites
              </Text>

              <Button
                size="lg"
                bg="#0086E7"
                color="white"
                borderRadius={'none'}
                fontWeight="bold"
                px={10}
                _hover={{ bg: "#006fbe" }}
              >
                LLÁMANOS AHORA
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Hero />
      <ServicesBlock />
      <CtaDivider />
      <BooksSection />
      <EventGallery />
      <AdvertisementSection />
      <ExpertsSection />
    </div>
  );
}
