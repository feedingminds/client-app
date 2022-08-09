import {
  Box,
  Button,
  SimpleGrid,
  Text,
  Icon,
  AvatarGroup,
  Avatar,
} from '@chakra-ui/react'
import {
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineFieldTime,
} from 'react-icons/ai'
import { SiZoom } from 'react-icons/all'

export const SessionCard = () => {
  return (
    <Box
      mh="300px"
      p="22px"
      bgColor={'#ffffff'}
      borderRadius="8px"
      display={'flex'}
      flexDirection="column"
    >
      <Text fontSize={'18px'} fontWeight="bold" as="h2" mb="20px">
        Orientación Vocacional
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="1" mb="28px">
        <Box display={'flex'} gap={'4px'} alignItems="center">
          <Icon as={AiOutlineCalendar} />
          Lunes, 28 Junio 2021
        </Box>
        <Box display={'flex'} gap={'4px'} alignItems="center">
          <Icon as={AiOutlineUser} />
          Juan Gonzalez
        </Box>
        <Box display={'flex'} gap={'4px'} alignItems="center">
          <Icon as={AiOutlineFieldTime} />
          02.00 -03.30 PM
        </Box>
        <Box display={'flex'} gap={'4px'} alignItems="center">
          <Icon as={SiZoom} />
          Zoom
        </Box>
      </SimpleGrid>
      <Box mb="10px">
        <Text fontSize={'13px'} fontWeight="bold" mb="10px">
          Asistentes
        </Text>
        <AvatarGroup size="md" max={2}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </Box>
      <Button colorScheme={'blue'} w="100%">
        Unirse a la clase
      </Button>
    </Box>
  )
}
