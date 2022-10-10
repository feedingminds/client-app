import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  Select,
  InputGroup,
  InputLeftAddon,
  useToast,
} from '@chakra-ui/react'
import { Formik } from 'formik'
import * as React from 'react'
import { HiCloudUpload } from 'react-icons/hi'
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../api/usersAPI'
import { useAuth } from '../../auth/authSlice'
import { FieldGroup } from './FieldGroup'
import {
  careers,
  experiences,
  genres,
  jobs,
  nationalities,
  universities,
} from '../../data'
// import * as Yup from 'yup'

export const ProfileSettings = () => {
  const { userId } = useAuth()
  const colorMode = useColorModeValue('gray.500', 'whiteAlpha.600')
  const { data: user = {} } = useGetUserByIdQuery(userId)
  console.log({ user })
  const {
    comments,
    average,
    rating,
    email,
    id,
    role,
    students,
    photoURL,
    ...profile
  } = user
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation()
  const toast = useToast()
  React.useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Perfil actualizado',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    }
  }, [isSuccess])

  return (
    <Formik
      initialValues={profile}
      enableReinitialize
      onSubmit={(values) => {
        console.log({ values })
        updateUser([userId, values])
      }}
    >
      {({ getFieldProps, handleSubmit }) => (
        <Box px={{ base: '4', md: '10' }} py="16" maxWidth="3xl" mx="auto">
          <form
            id="settings-form"
            onSubmit={(e) => {
              e.preventDefault()
              // form submit logic
            }}
          >
            <Stack spacing="4" divider={<StackDivider />}>
              <Heading size="lg" as="h1" paddingBottom="4">
                Configuración de cuenta
              </Heading>
              <FieldGroup title="Infomación Personal">
                <VStack width="full" spacing="6">
                  <FormControl id="name">
                    <FormLabel>Nombre</FormLabel>
                    <Input
                      type="text"
                      maxLength={255}
                      name="name"
                      {...getFieldProps('name')}
                    />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" isReadOnly disabled value={email} />
                  </FormControl>
                  <FormControl id="about">
                    <FormLabel>Sobre mí</FormLabel>
                    <Textarea
                      rows={5}
                      name="about"
                      {...getFieldProps('about')}
                    />
                    <FormHelperText>
                      Breve descripción de tu perfil.
                    </FormHelperText>
                  </FormControl>
                </VStack>
              </FieldGroup>
              {/* //TODO: Actualizar Infomación Profesional */}
              <FieldGroup title="Infomación Profesional">
                <VStack width="full" spacing="6">
                  <FormControl id="career">
                    <FormLabel>Carrera</FormLabel>
                    <Select
                      placeholder="Selecciona una opción"
                      name="career"
                      {...getFieldProps('career')}
                    >
                      {careers.map(({ name, id }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="university">
                    <FormLabel>Centro de Estudios</FormLabel>
                    <Select
                      placeholder="Selecciona una opción"
                      name="university"
                      {...getFieldProps('university')}
                    >
                      {universities.map(({ name, id }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="job">
                    <FormLabel>Cargo</FormLabel>
                    <Select
                      placeholder="Selecciona una opción"
                      name="job"
                      {...getFieldProps('job')}
                    >
                      {jobs.map(({ name, id }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="experience">
                    <FormLabel>Experiencia</FormLabel>
                    <Select
                      placeholder="Selecciona una opción"
                      name="experience"
                      {...getFieldProps('experience')}
                    >
                      {experiences.map(({ name, id }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="nationality">
                    <FormLabel>Nacional/Internacional</FormLabel>
                    <Select
                      placeholder="Selecciona una opción"
                      name="nationality"
                      {...getFieldProps('nationality')}
                    >
                      {nationalities.map(({ name, id }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="genre">
                    <FormLabel>Sexo</FormLabel>
                    <Select
                      placeholder="Selecciona una opción"
                      name="genre"
                      {...getFieldProps('genre')}
                    >
                      {genres.map(({ name, id }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="linkedin">
                    <FormLabel>LinkedIn</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="https://www.linkedin.com/in/" />
                      <Input
                        placeholder="john.doe"
                        autoComplete="off"
                        name="linkedin"
                        {...getFieldProps('linkedin')}
                      />
                    </InputGroup>
                  </FormControl>
                </VStack>
              </FieldGroup>
              <FieldGroup title="Foto de Perfil">
                <Stack direction="row" spacing="6" align="center" width="full">
                  {/* //TODO: Mostrar avatar  */}
                  <Avatar size="xl" name={profile.name} src={photoURL} />
                  <Box>
                    <HStack spacing="5">
                      <Button leftIcon={<HiCloudUpload />}>Cambiar foto</Button>
                      <Button variant="ghost" colorScheme="red">
                        Borrar
                      </Button>
                    </HStack>
                    <Text fontSize="sm" mt="3" color={colorMode}>
                      .jpg, .gif, or .png. Max file size 700K.
                    </Text>
                  </Box>
                </Stack>
              </FieldGroup>
            </Stack>
            <FieldGroup mt="8">
              <HStack width="full">
                <Button
                  type="submit"
                  colorScheme="blue"
                  onClick={handleSubmit}
                  isLoading={isLoading}
                >
                  Guardar Cambios
                </Button>
                <Button variant="outline">Cancelar</Button>
              </HStack>
            </FieldGroup>
          </form>
        </Box>
      )}
    </Formik>
  )
}
