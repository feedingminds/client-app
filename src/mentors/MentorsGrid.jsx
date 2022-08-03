import { Box, Button, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { CardWithAvatar } from './components/CardWithAvatar'
import data from './components/data.json'
import { UserExtraInfo } from './components/UserExtraInfo'
import { UserInfo } from './components/UserInfo'

export const MentorsGrid = () => (
  <Box
    bg={useColorModeValue('gray.100', 'gray.800')}
    px={{ base: '6', md: '8' }}
    py="12"
  >
    <Box as="section" maxW={{ base: 'xs', md: '3xl', lg: '5xl' }} mx="auto">
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing="6">
        {data.map((user) => {
          const { name, bio, src, isVerified, followerCount } = user
          return (
            <CardWithAvatar key={name} avatarProps={{ src, name }}>
              <UserInfo mt="3" name={name} bio={bio} isVerified={isVerified} />
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
        {data.map((user) => {
          const { name, bio, src, isVerified, followerCount } = user
          return (
            <CardWithAvatar key={name} avatarProps={{ src, name }}>
              <UserInfo mt="3" name={name} bio={bio} isVerified={isVerified} />
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
        {data.map((user) => {
          const { name, bio, src, isVerified, followerCount } = user
          return (
            <CardWithAvatar key={name} avatarProps={{ src, name }}>
              <UserInfo mt="3" name={name} bio={bio} isVerified={isVerified} />
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
        {data.map((user) => {
          const { name, bio, src, isVerified, followerCount } = user
          return (
            <CardWithAvatar key={name} avatarProps={{ src, name }}>
              <UserInfo mt="3" name={name} bio={bio} isVerified={isVerified} />
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
