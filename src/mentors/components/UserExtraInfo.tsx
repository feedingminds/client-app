import {
  HStack,
  Icon,
  StackProps,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiUsers } from 'react-icons/hi'

interface UserExtraInfoProps extends StackProps {
  count: number
}

export const UserExtraInfo = (props: UserExtraInfoProps) => {
  const { count, ...stackProps } = props
  return (
    <React.Fragment>
      <HStack
        spacing="1"
        fontSize="sm"
        color={useColorModeValue('gray.600', 'gray.400')}
        {...stackProps}
      >
        <Icon as={HiUsers} />
        <Text>{count} estudiantes</Text>
      </HStack>
    </React.Fragment>
  )
}
