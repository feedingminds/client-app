import { Box } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props) => (
  <Box
    maxW={'5xl'}
    mx="auto"
    bg={'white'}
    rounded={{ lg: 'xl' }}
    padding="10"
    shadow={{ lg: 'base' }}
    px={{ base: '6', md: '8' }}
    position="relative"
    {...props}
  />
)
