import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Checkbox,
  VStack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export function Login() {
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
          <Heading>Iniciar Sesión</Heading>
          <Text display={'flex'} gap={2}>
            ¿No tienes una cuenta?
            <Button
              variant="link"
              colorScheme="blue"
              onClick={() => navigate('/register')}
            >
              Registrarse
            </Button>
          </Text>
        </VStack>
        <FormControl>
          <FormLabel>Correo</FormLabel>
          <Input variant="filled" />
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input variant="filled" type="password" />
        </FormControl>
        <HStack w="full" justify="space-between">
          <Checkbox>Recuérdame</Checkbox>
          <Button variant="link" colorScheme="blue">
            ¿Olvidaste tu contraseña?
          </Button>
        </HStack>
        <Button colorScheme="blue" w={['full', 'auto']} alignSelf="end">
          Ingresar
        </Button>
      </VStack>
    </Box>
  )
}
