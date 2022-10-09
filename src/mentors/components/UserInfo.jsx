import { HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import * as React from 'react'
// import { HiBadgeCheck } from 'react-icons/hi'

export const UserInfo = (props) => {
  const { name, career, ...stackProps } = props
  return (
    <React.Fragment>
      <VStack spacing="1" flex="1" {...stackProps}>
        <HStack>
          <Text textAlign="center" fontWeight="bold">
            {name}
          </Text>
        </HStack>
        <Text
          fontSize="sm"
          textAlign="center"
          noOfLines={2}
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          {career}
        </Text>
      </VStack>
    </React.Fragment>
  )
}
