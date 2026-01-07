// TopBar.tsx
import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  Spacer,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { FiCheck, FiMail, FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function TopBar() {
  return (
    <Box bg="#003452" color="white" fontSize="sm" h="60px">
      <Flex
        maxW="1200px"
        h="full"
        mx="auto"
        align="center"
        px={4}
      >
        {/* Lado izquierdo */}
        <HStack spacing={3}>
          <HStack spacing={1}>
            <Icon as={FiCheck} boxSize={4} />
            <Text>Reading PA</Text>
          </HStack>

          <HStack spacing={1}>
            <Icon as={FiMail} boxSize={4} />
            <Text>caguzman000@gmail.com</Text>
          </HStack>
        </HStack>

        <Spacer />

        {/* Lado derecho */}
        <HStack spacing={3}>
          <IconButton
            aria-label="Buscar"
            icon={<FiSearch />}
            variant="ghost"
            size="sm"
            _hover={{ bg: "whiteAlpha.200" }}
          />

          <HStack spacing={1}>
            <Icon as={FiShoppingCart} boxSize={5} />
            <Text fontSize="xs">0</Text>
          </HStack>

          <Divider orientation="vertical" borderColor="whiteAlpha.500" h="18px" />

          <HStack spacing={2}>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebookF />}
              variant="ghost"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
            <IconButton
              aria-label="Pinterest"
              icon={<FaPinterestP />}
              variant="ghost"
              size="sm"
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
