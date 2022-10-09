import React from 'react'
import {
  chakra,
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Button,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  Image,
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

export const Hero = () => {
  const Feature = (props) => (
    <Flex alignItems="center" color={null} _dark={{ color: 'white' }}>
      <Icon
        boxSize={4}
        mr={1}
        color="green.600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      {props.children}
    </Flex>
  )
  return (
    <Box px={4} py={32} mx="auto" bgColor={'blue.600'} position="relative">
      <Image
        position={'absolute'}
        bottom="0"
        left="16px"
        src="assets/undraw_book_reading.svg"
        pointerEvents={'none'}
        height="50%"
        className="SvgHero"
      />
      <Image
        position={'absolute'}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          bottom: 0,
        }}
        src="assets/undraw_graduation_white.svg"
        pointerEvents={'none'}
        height="120px"
      />
      <Image
        position={'absolute'}
        bottom="0"
        right="16px"
        src="assets/undraw_road_to_knowledge.svg"
        pointerEvents={'none'}
        height="50%"
        className="SvgHero"
      />
      <Box
        w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: 'left', md: 'center' }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight={{ base: 'bold', md: 'extrabold' }}
          color="white"
          lineHeight="shorter"
        >
          Encuentra el mentor que mejor se acomode a tus intereses
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          color="white"
          lineHeight="base"
        >
          Queremos facilitarle, a los jóvenes y a sus padres, la decisión sobre
          qué carrera estudiar.
        </chakra.p>
        <InputGroup colorScheme={'blue'} maxW="400px" margin="auto">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<BiSearch />}
          />
          <Input
            placeholder="Busca un mentor..."
            variant={'flushed'}
            colorScheme={'blue'}
            _placeholder={{
              color: '#fff',
            }}
            color="white"
          />
        </InputGroup>
      </Box>
    </Box>
  )
}
