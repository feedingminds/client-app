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
  Select,
} from '@chakra-ui/react'
import { ErrorMessage, Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useCreateUserMutation } from '../../authApi'
import { setIsAuthenticated, useAuth } from '../../authSlice'

export function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated } = useAuth()
  const [registerUser, { isSuccess, isLoading }] = useCreateUserMutation()
  const colorMode = useColorModeValue('md', 'md-dark')
  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsAuthenticated(true))
    }
  }, [isSuccess, dispatch])

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
        role: 'STUDENT_ROLE',
        email: '',
      }}
      onSubmit={(values) => {
        registerUser(values)
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('El nombre es requerido'),
        email: Yup.string()
          .email('Debe de ingresar un email valido')
          .required('El email es requerido'),
        password: Yup.string()
          .min(8, 'Debe de tener al menos 8 caracteres')
          .required('Este campo es requerido'),
        role: Yup.string().required('Este campo es requerido'),
      })}
    >
      {({ getFieldProps }) => (
        <Form>
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
                <Input
                  variant="filled"
                  name="name"
                  {...getFieldProps('name')}
                />
                <ErrorMessage name="name">
                  {(msg) => <FormHelperText color="red">{msg}</FormHelperText>}
                </ErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Correo</FormLabel>
                <Input
                  variant="filled"
                  name="email"
                  {...getFieldProps('email')}
                />
                <ErrorMessage name="email">
                  {(msg) => <FormHelperText color="red">{msg}</FormHelperText>}
                </ErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Quiero ser</FormLabel>
                <Select variant="filled" name="role" {...getFieldProps('role')}>
                  <option value="STUDENT_ROLE">Estudiante</option>
                  <option value="MENTOR_ROLE">Mentor</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  variant="filled"
                  type="password"
                  name="password"
                  {...getFieldProps('password')}
                />
                {/* <FormHelperText>Al menos 8 caracteres.</FormHelperText> */}
                <ErrorMessage name="password">
                  {(msg) => <FormHelperText color="red">{msg}</FormHelperText>}
                </ErrorMessage>
              </FormControl>
              <Button
                colorScheme="blue"
                w="100%"
                alignSelf="end"
                type="submit"
                isLoading={isLoading}
              >
                Crear Cuenta
              </Button>
            </VStack>
          </Box>
        </Form>
      )}
    </Formik>
  )
}
