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
  useToast,
} from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated, setUserId, useAuth } from '../../authSlice'
import { useLoginMutation } from '../../authApi'
import { useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

export function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated } = useAuth()
  const colorMode = useColorModeValue('md', 'md-dark')
  const [login, { isSuccess, data: user, isLoading, error }] =
    useLoginMutation()
  const toast = useToast()
  console.log({ error })
  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsAuthenticated(true))
      dispatch(setUserId(user?.id))
    }
  }, [isSuccess, dispatch, user?.id])

  useEffect(() => {
    if (error) {
      toast({
        title: error.data.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }, [error])

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      onSubmit={(values) => {
        login(values)
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Debe de ingresar un email valido')
          .required('El email es requerido'),
        password: Yup.string()
          .min(6, 'Debe de tener al menos 6 caracteres')
          .required('Este campo es requerido'),
      })}
    >
      {({ getFieldProps, handleSubmit }) => (
        <Box
          w={['full', 'md']}
          p={[8, 10]}
          mt={[20, '10vh']}
          mx="auto"
          borderRadius={{ base: 'none', sm: 'xl' }}
          boxShadow={{ base: 'none', sm: colorMode }}
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
              <Input
                variant="filled"
                name="email"
                {...getFieldProps('email')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                variant="filled"
                type="password"
                name="password"
                {...getFieldProps('password')}
              />
            </FormControl>
            <HStack w="full" justify="space-between">
              <Checkbox>Recuérdame</Checkbox>
              <Button variant="link" colorScheme="blue">
                ¿Olvidaste tu contraseña?
              </Button>
            </HStack>
            <Button
              colorScheme="blue"
              w={['full', 'auto']}
              alignSelf="end"
              isLoading={isLoading}
              type="submit"
              onClick={handleSubmit}
            >
              Ingresar
            </Button>
          </VStack>
        </Box>
      )}
    </Formik>
  )
}
