import React, { useState, useEffect } from "react";
import {
  Box, Button, Table, Thead, Tbody, Tr, Th, Td,
  useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalCloseButton, FormControl, FormLabel, Input,
  VStack, Textarea, useToast, IconButton, Heading, HStack,
  Image, NumberInput, NumberInputField, Select, Icon
} from "@chakra-ui/react";
import { FiPlus, FiTrash2, FiEdit, FiUpload } from "react-icons/fi";
import { api } from "../../api/axios";
import env from '../../config/environment'
import ConfirmDialog from '../../components/common/ConfirmDialog'

const BooksManager = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [selectedBookId, setSelectedBookId] = useState(null);

  const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onClose: onConfirmClose } = useDisclosure(); // Diálogo confirmación

  const [form, setForm] = useState({
    name: "", description: "", category: "", price: "", image: null
  });

  const fetchBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (err) {
      toast({ title: "Error al cargar libros", status: "error" });
    }
  };

  useEffect(() => { fetchBooks(); }, []);

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Importante: Usar FormData para el envío de archivos (BLOB)
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("price", form.price);
    if (form.image) formData.append("image", form.image);

    try {
      await api.post("/admin/books", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      toast({ title: "Libro agregado", status: "success" });
      onClose();
      fetchBooks();
      setForm({ name: "", description: "", category: "", price: "", image: null });
    } catch (err) {
      toast({ title: "Error al guardar", description: err.response?.data?.message, status: "error" });
    } finally { setLoading(false); }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/books/${id}`);
      toast({ title: "Libro eliminado", status: "warning" });
      fetchBooks();
    } catch (err) {
      toast({ title: "Error al eliminar", status: "error" });
    }
  };

  const handleConfirmCancel = async () => {
    setLoading(true);
    handleDelete(selectedBookId);
    onConfirmClose();
    setSelectedBookId(null);
    setLoading(false);
  };

  return (
    <Box p={8}>
      <HStack justifyContent="space-between" mb={6}>
        <Heading size="lg">Inventario de Libros</Heading>
        <Button
          leftIcon={<Icon as={FiPlus} />} // Asegúrate de que tenga los brackets < />
          colorScheme="blue"
          onClick={onOpen}
        >
          Agregar Libro
        </Button>
      </HStack>


      <ConfirmDialog
        isOpen={isConfirmOpen}
        onClose={onConfirmClose}
        onConfirm={handleConfirmCancel}
        title="Cancelar Evento"
        message="¿Estás seguro de que deseas cancelar este evento? Esta acción notificará a los sistemas y no se podrán recibir más inscripciones."
        confirmText="Sí, cancelar"
        isLoading={loading}
      />

      <Box overflowX="auto" boxShadow="md" borderWidth="1px" borderRadius="lg">
        <Table variant="simple">
          <Thead bg="gray.50">
            <Tr>
              <Th w="100px">Portada</Th>
              <Th>Título</Th>
              <Th>Categoría</Th>
              <Th>Precio</Th>
              <Th textAlign="right">Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {books.map((book) => (
              <Tr key={book.id_book}>
                <Td>
                  {/* Cargamos la imagen desde el endpoint de BLOB que creamos en el backend */}
                  <Image
                    src={`${env.config.apiUrl}/books/${book.id_book}/image`} // Ajusta la URL según tu backend
                    borderRadius="md"
                    boxSize="50px"
                    objectFit="cover"
                  />
                </Td>
                <Td fontWeight="medium">{book.name}</Td>
                <Td>{book.category}</Td>
                <Td>${book.price}</Td>
                <Td textAlign="right">
                  <IconButton
                    icon={<FiTrash2 />}
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => {
                      setSelectedBookId(book.id_book);
                      onConfirmOpen();
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Modal de Formulario */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Nuevo Libro</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Nombre del Libro</FormLabel>
                  <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </FormControl>

                <HStack w="full">
                  <FormControl isRequired>
                    <FormLabel>Categoría</FormLabel>
                    <Input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} placeholder="Ej: Ficción, Tecnología..." />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Precio</FormLabel>
                    <NumberInput min={0}>
                      <NumberInputField value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
                    </NumberInput>
                  </FormControl>
                </HStack>

                <FormControl isRequired>
                  <FormLabel>Descripción</FormLabel>
                  <Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Imagen de Portada</FormLabel>
                  <Box
                    border="2px dashed"
                    borderColor="gray.200"
                    p={4}
                    borderRadius="md"
                    textAlign="center"
                    cursor="pointer"
                    _hover={{ borderColor: "blue.400" }}
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    <Icon as={FiUpload} mb={2} />
                    <Box as="span" fontSize="sm">
                      {form.image instanceof File ? form.image.name : "Haga clic para subir imagen"}
                    </Box>
                    <input
                      id="fileInput"
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </Box>
                </FormControl>
              </VStack>
            </ModalBody>
            <Box p={6} textAlign="right">
              <Button onClick={onClose} mr={3}>Cancelar</Button>
              <Button colorScheme="blue" type="submit" isLoading={loading}>Guardar Libro</Button>
            </Box>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BooksManager;
