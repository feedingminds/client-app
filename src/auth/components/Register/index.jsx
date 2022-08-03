import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  FormHelperText,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export function Register() {
  const navigate = useNavigate()
  return (
    <Box
      w={['full', 'md']}
      p={[8, 10]}
      mt={[20, '10vh']}
      mx="auto"
      borderRadius={{ base: 'none', sm: 'xl' }}
      boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={['flex-start', 'center']} w="full">
          <Box>
            <Image
              src="https://feedingmindsperu.com/assets/img/logo.svg"
              alt="Feeding Minds Perú Logo"
            />
          </Box>
          <Heading>Crear una cuenta</Heading>
          <Text display={'flex'} gap={2}>
            ¿Ya tienes una cuenta?
            <Button
              variant="link"
              colorScheme="blue"
              onClick={() => navigate('/login')}
            >
              Ingresar
            </Button>
          </Text>
        </VStack>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input variant="filled" />
        </FormControl>
        <FormControl>
          <FormLabel>Correo</FormLabel>
          <Input variant="filled" />
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input variant="filled" type="password" />
          <FormHelperText>Al menos 8 caracteres.</FormHelperText>
        </FormControl>
        <Button colorScheme="blue" w="100%" alignSelf="end">
          Crear Cuenta
        </Button>
      </VStack>
    </Box>
  )
}
