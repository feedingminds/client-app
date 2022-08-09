import {
  Box,
  Button,
  SimpleGrid,
  useColorModeValue,
  Text,
  Icon,
  AvatarGroup,
  Avatar,
} from '@chakra-ui/react'
import * as React from 'react'
import { SessionCard } from './components'
import {
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineFieldTime,
} from 'react-icons/ai'
import { SiZoom } from 'react-icons/all'

export const Sessions = () => (
  <Box
    bg={useColorModeValue('gray.100', 'gray.800')}
    px={{ base: '6', md: '8' }}
    py="12"
  >
    <Box as="section" maxW={{ base: 'xs', md: '3xl', lg: '5xl' }} mx="auto">
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing="6">
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
      </SimpleGrid>
    </Box>
  </Box>
)
