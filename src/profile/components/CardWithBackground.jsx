import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { HiPencilAlt } from 'react-icons/hi'
import { useAuth } from '../../auth/authSlice'
import { useGetUserById } from '../../hooks/useGetUserById'
import { CardContent } from './CardContent'
import { CardWithAvatar } from './CardWithAvatar'
import { UserInfo } from './UserInfo'

export const CardWithBackground = () => {
  const { userId } = useAuth()
  const { data: user = {} } = useGetUserById(userId)
  const { name } = user
  return (
    <Box as="section" pt="20" pb="12" position="relative">
      <Box position="absolute" inset="0" height="32" bg="blue.600" />
      <CardWithAvatar
        maxW="xl"
        avatarProps={{
          name,
        }}
      >
        <CardContent>
          <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
            {name}
          </Heading>
          {/* <Text color={useColorModeValue('gray.600', 'gray.400')}>
            Frontend Developer &amp; UI Designer
          </Text>
          <UserInfo
            career="Economía"
            university="Univesidad Peruana de Ciencias Aplicadas"
            linkedin="@john.doe"
          /> */}
        </CardContent>
      </CardWithAvatar>
    </Box>
  )
}
