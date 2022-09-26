import { HStack, Icon, useColorModeValue, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiUsers } from 'react-icons/hi'

export const UserExtraInfo = (props) => {
  const { count, ...stackProps } = props
  const colorMode = useColorModeValue('gray.600', 'gray.400')
  return (
    <React.Fragment>
      <HStack spacing="1" fontSize="sm" color={colorMode} {...stackProps}>
        <Icon as={HiUsers} />
        <Text>{count} estudiantes</Text>
      </HStack>
    </React.Fragment>
  )
}
