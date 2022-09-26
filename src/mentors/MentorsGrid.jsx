import { Box, Button, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { useGetMentorsQuery } from '../api/usersAPI'
import { CardWithAvatar } from './components/CardWithAvatar'
import { UserExtraInfo } from './components/UserExtraInfo'
import { UserInfo } from './components/UserInfo'

export const MentorsGrid = () => {
  const { data } = useGetMentorsQuery()
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.800')}
      px={{ base: '6', md: '8' }}
      py="12"
      minHeight={'calc(100vh - 77px)'}
    >
      <Box as="section" maxW={{ base: 'xs', md: '3xl', lg: '5xl' }} mx="auto">
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing="6">
          {data?.users.map((user) => {
            const {
              id,
              name,
              profession,
              photoURL,
              isVerified = true,
              followerCount = 100,
            } = user
            return (
              <CardWithAvatar key={id} avatarProps={{ src: photoURL, name }}>
                <UserInfo
                  mt="3"
                  name={name}
                  bio={profession}
                  isVerified={isVerified}
                />
                <UserExtraInfo my="4" count={followerCount} />
                <Button
                  variant="outline"
                  colorScheme="blue"
                  rounded="full"
                  size="sm"
                  width="full"
                >
                  Ver más
                </Button>
              </CardWithAvatar>
            )
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
