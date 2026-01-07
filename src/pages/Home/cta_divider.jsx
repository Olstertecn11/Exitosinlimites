import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const bg =
  "https://exitossinlimites.com/wp-content/uploads/2025/05/qasass.jpg";

export default function CtaDivider() {
  return (
    <Box
      as="section"
      position="relative"
      bgImage={`url(${bg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={{ base: 18, md: 28 }}
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        bg: "rgba(9, 34, 64, 0.7)", // overlay azul oscuro
      }}
    >
      <Flex
        maxW="900px"
        mx="auto"
        px={6}
        textAlign="center"
        direction="column"
        align="center"
        position="relative"
        zIndex={2}
      >
        <Heading
          color="white"
          fontWeight="800"
          fontSize={'3.4rem'}
          lineHeight="1.3"
          mb={8}
        >
          Formando líderes, conectando
          <br />
          mentes, transformando
          <br />
          carreras
        </Heading>

        <Button
          bg="#3FA9F5"
          borderRadius='none'
          color="white"
          fontWeight="bold"
          size="lg"
          p={8}
          _hover={{ bg: "#2f8cd1" }}
        >
          RESERVA AHORA
        </Button>
      </Flex>
    </Box>
  );
}
