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
  Image,
} from '@chakra-ui/react'
import { Formik } from 'formik'
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
import { useFilePicker } from 'use-file-picker'
import { Select as AntdSelect } from 'antd'
import { optionsDays, optionsDuration, tagRender } from '../utils'
import React from 'react'
import { HourSelect } from './HourSelect'

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
  const [openFileSelector, { filesContent, plainFiles, clear }] = useFilePicker(
    {
      accept: 'image/*',
      multiple: false,
      readAs: 'DataURL',
      maxFileSize: 0.7,
    }
  )
  console.log({ plainFiles, filesContent, photoURL })
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
      onSubmit={async (values) => {
        console.log({ values })
        try {
          let photoURL
          if (plainFiles[0]) {
            const cloudinaryURL = import.meta.env.VITE_APP_CLOUDINARY_URL
            const formData = new FormData()
            formData.append('upload_preset', 'feeding-minds')
            formData.append('file', plainFiles[0])
            const resp = await fetch(cloudinaryURL, {
              method: 'POST',
              body: formData,
            })

            const { secure_url } = await resp.json()
            console.log({ secure_url })
            photoURL = secure_url
          }
          if (photoURL) {
            updateUser([userId, { ...values, photoURL }])
            return
          }
          updateUser([userId, values])
        } catch (err) {
          console.log(err)
        }
      }}
    >
      {({ getFieldProps, handleSubmit, setFieldValue, values }) => (
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
                  {filesContent[0]?.content ? (
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      src={filesContent[0]?.content}
                      alt={profile.name}
                      borderRadius="50%"
                    />
                  ) : (
                    <Avatar size="xl" name={profile.name} src={photoURL} />
                  )}
                  <Box>
                    <HStack spacing="5">
                      <Button
                        leftIcon={<HiCloudUpload />}
                        onClick={openFileSelector}
                      >
                        Cambiar foto
                      </Button>
                      {filesContent[0]?.content && (
                        <Button
                          variant="ghost"
                          colorScheme="red"
                          onClick={clear}
                        >
                          Limpiar
                        </Button>
                      )}
                    </HStack>
                    <Text fontSize="sm" mt="3" color={colorMode}>
                      .jpg, .gif, or .png. Tamaño máximo de archivo 700K.
                    </Text>
                  </Box>
                </Stack>
              </FieldGroup>

              {/*//* Schedule */}
              <FieldGroup title="Horario Disponible">
                <VStack width="full" spacing="6">
                  <FormControl id="days">
                    <FormLabel>Días</FormLabel>
                    <AntdSelect
                      mode="multiple"
                      showArrow
                      tagRender={tagRender}
                      style={{
                        width: '100%',
                      }}
                      options={optionsDays}
                      size="large"
                      placeholder="Seleccione los días"
                      name="schedule.days"
                      {...getFieldProps('schedule.days')}
                      onChange={(value) =>
                        setFieldValue('schedule.days', value)
                      }
                    />
                  </FormControl>
                  <FormControl id="duration">
                    <FormLabel>Duración</FormLabel>
                    <Select
                      placeholder="Selecciona una opción"
                      name={'schedule.duration'}
                      {...getFieldProps('schedule.duration')}
                    >
                      {optionsDuration.map(({ name, id }) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="meet">
                    <FormLabel>Enlace de Google Meet</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="https://meet.google.com/" />
                      <Input
                        type="text"
                        placeholder="bmi-dxiv-bia"
                        autoComplete="off"
                        name="meet"
                        {...getFieldProps('meet')}
                      />
                    </InputGroup>
                  </FormControl>
                  <HourSelect
                    name="schedule.hours"
                    value={values.schedule?.hours}
                    onChange={(value) => setFieldValue('schedule.hours', value)}
                  />
                </VStack>
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
