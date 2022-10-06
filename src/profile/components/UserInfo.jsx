import { HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { HiAcademicCap } from 'react-icons/hi'
import { FaUniversity, FaLinkedin } from 'react-icons/fa'

export const UserInfo = (props) => {
  const { career, university, linkedin, ...stackProps } = props
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      spacing={{ base: '1', sm: '6' }}
      mt="4"
      fontSize="sm"
      fontWeight="medium"
      color={useColorModeValue('blue.600', 'blue.300')}
      {...stackProps}
    >
      <HStack>
        <Icon as={HiAcademicCap} />
        <Text>{career}</Text>
      </HStack>
      <HStack>
        <Icon as={FaUniversity} />
        <Text>{university}</Text>
      </HStack>
      <HStack>
        <Icon as={FaLinkedin} />
        <Text>{linkedin}</Text>
      </HStack>
    </Stack>
  )
}
