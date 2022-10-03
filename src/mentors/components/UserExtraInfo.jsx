import { HStack, Icon, useColorModeValue, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiUsers, HiStar } from 'react-icons/hi'

export const UserExtraInfo = (props) => {
  const { count, rating, ...stackProps } = props
  const colorMode = useColorModeValue('gray.600', 'gray.400')
  return (
    <React.Fragment>
      <HStack spacing="7" fontSize="sm" color={colorMode} {...stackProps}>
        <HStack>
          <Icon as={HiUsers} />
          <Text>{count}</Text>
        </HStack>
        <HStack>
          <Icon as={HiStar} color={'orange.500'} />
          <Text>{rating}</Text>
        </HStack>
      </HStack>
    </React.Fragment>
  )
}
