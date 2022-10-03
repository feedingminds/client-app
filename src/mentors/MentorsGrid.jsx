import {
  Box,
  Button,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useGetMentorsQuery } from '../api/usersAPI'
import { CardWithAvatar } from './components/CardWithAvatar'
import { UserExtraInfo } from './components/UserExtraInfo'
import { UserInfo } from './components/UserInfo'

export const MentorsGrid = () => {
  const { data } = useGetMentorsQuery()
  const navigate = useNavigate()
  return (
    <Box
      // bg={useColorModeValue('gray.100', 'gray.800')}
      bg="white"
      px={{ base: '6', md: '8' }}
      py="12"
      minHeight={'calc(100vh - 77px)'}
    >
      <Box
        as="section"
        maxW={{ base: 'xs', md: '3xl', lg: '7xl' }}
        mx="auto"
        display={'flex'}
        flexDir={{
          base: 'column',
          md: 'row',
        }}
        gap="24px"
      >
        <VStack w="300px">
          <VStack w="100%" alignItems={'flex-start'}>
            <Text fontSize="md" fontWeight="bold">
              Carreras
            </Text>
            <Select placeholder="Select option" bgColor={'#fff'}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </VStack>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }} spacing="6">
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
                  profession={profession}
                  isVerified={isVerified}
                />
                <UserExtraInfo my="4" count={followerCount} rating={'5.0'} />
                <Button
                  variant="outline"
                  colorScheme="blue"
                  rounded="full"
                  size="sm"
                  width="full"
                  onClick={() => {
                    navigate('/mentor')
                  }}
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
