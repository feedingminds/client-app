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
} from '@chakra-ui/react'
import { Formik } from 'formik'
import * as React from 'react'
import { HiCloudUpload } from 'react-icons/hi'
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../api/usersAPI'
import { useAuth } from '../../auth/authSlice'
import { FieldGroup } from './FieldGroup'
// import * as Yup from 'yup'

export const ProfileSettings = () => {
  const { userId } = useAuth()
  const colorMode = useColorModeValue('gray.500', 'whiteAlpha.600')
  const { data: user = {} } = useGetUserByIdQuery(userId)
  const {
    name = '',
    email = '',
    profession = '',
    photoURL = '',
    bio = '',
  } = user
  const [updateUser, { isLoading }] = useUpdateUserMutation()

  return (
    <Formik
      initialValues={{ name, email, profession, photoURL, bio }}
      enableReinitialize
      onSubmit={(values) => {
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
                    <Input
                      type="email"
                      isReadOnly
                      name="email"
                      {...getFieldProps('email')}
                      disabled
                    />
                  </FormControl>
                  <FormControl id="profession">
                    <FormLabel>Profesión</FormLabel>
                    <Input
                      type="text"
                      name="profession"
                      {...getFieldProps('profession')}
                    />
                  </FormControl>
                  <FormControl id="bio">
                    <FormLabel>Bio</FormLabel>
                    <Textarea rows={5} name="bio" {...getFieldProps('bio')} />
                    <FormHelperText>
                      Brief description for your profile. URLs are hyperlinked.
                    </FormHelperText>
                  </FormControl>
                </VStack>
              </FieldGroup>
              <FieldGroup title="Foto de Perfil">
                <Stack direction="row" spacing="6" align="center" width="full">
                  <Avatar size="xl" name={name} src={photoURL} />
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
