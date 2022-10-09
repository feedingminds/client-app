import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiShieldCheck, HiAcademicCap } from 'react-icons/hi'
import { FaUniversity } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { Card } from './Card'
import { CustomerReviews } from './CustomerReviews'
import { Comments } from './Comments'
import { useGetUserByIdQuery } from '../../api/usersAPI'
import { useParams } from 'react-router-dom'
import { FiLinkedin } from 'react-icons/fi'

export const App = () => {
  const { mentorId } = useParams()
  const { data: mentor = {} } = useGetUserByIdQuery(mentorId)
  const { name, photoURL, rating, average } = mentor
  return (
    <Box
      as="section"
      bg={'white'}
      py="12"
      minH="calc(100vh - 77px)"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="32"
        bg="blue.600"
      />
      <Card my="35px">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '3', md: '10' }}
          align="flex-start"
        >
          <Stack spacing="4">
            <Avatar size="2xl" src={photoURL} name={name} />
            <Button
              width="full"
              colorScheme="blue"
              display={{ base: 'none', md: 'initial' }}
            >
              Contáctame
            </Button>
          </Stack>
          <Box>
            <Stack
              spacing={{ base: '1', md: '2' }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Text as="h2" fontWeight="bold" fontSize="xl">
                {name}
              </Text>
              <HStack fontSize={{ base: 'md', md: 'lg' }}>
                <Text
                  as="span"
                  color={useColorModeValue('gray.500', 'gray.300')}
                  lineHeight="1"
                >
                  @meldesigner
                </Text>
                <Icon as={FiLinkedin} color="blue.500" />
              </HStack>
            </Stack>
            <Text mt="2">Head Of Customer Experience</Text>
            <Wrap shouldWrapChildren my="4" spacing="4">
              <VStack flexDir={'column'} alignItems="flex-start">
                <CustomerReviews
                  reviewCount={
                    rating &&
                    rating[1] + rating[2] + rating[3] + rating[4] + rating[5]
                  }
                  rating={average}
                />
                <HStack>
                  <Icon as={HiAcademicCap} fontSize="xl" color="gray.400" />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    <b>Economía</b>
                  </Text>
                </HStack>
                <HStack spacing="1">
                  <Icon as={FaUniversity} color="gray.400" />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    Universidad Nacional Federico Villareal
                  </Text>
                </HStack>
                <HStack spacing="1">
                  <Icon as={BiTimeFive} color="gray.400" />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    Entre 5 y 10 años de experiencia trabajando
                  </Text>
                </HStack>
              </VStack>
            </Wrap>
            <Text fontWeight="semibold" mt="8" mb="2">
              Sobre mí
            </Text>
            <Box fontSize="sm">
              Tengo 8 años experiencia en el desarrollo de Proyectos de Customer
              Experience en Perú y Ecuador en sectores de Banca, Seguros,
              Telecomunicaciones, Aviación, hotelería y etc.
              <br />
              Especialización en Customer Experience Management (CEM) por ESIC –
              ICEMED e IZO, Finanzas por la Universidad del Pacíﬁco y
              Marketing-Operaciones por la Universidad ESAN. Estudiante de la
              Maestría de Dirección Comercial y Marketing de la Escuela de
              Dirección PAD de Piura.
              <br />
            </Box>
            <Text fontWeight="semibold" mt="8" mb="2">
              Intereses
            </Text>
            <Wrap
              shouldWrapChildren
              mt="5"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              {['Adobe Photoshop', 'UX/UI', 'Landing Page', 'Web Design'].map(
                (tag) => (
                  <Tag key={tag} color="inherit" px="3">
                    {tag}
                  </Tag>
                )
              )}
            </Wrap>
          </Box>
        </Stack>
        <Button mt="8" width="full" colorScheme="blue" display={{ md: 'none' }}>
          Contáctame{' '}
        </Button>
      </Card>
      <Comments />
    </Box>
  )
}
