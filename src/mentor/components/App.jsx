import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Progress,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiAcademicCap } from 'react-icons/hi'
import { FaUniversity } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { Card } from './Card'
import { CustomerReviews } from './CustomerReviews'
import { Comments } from './Comments'
import { useGetUserByIdQuery } from '../../api/usersAPI'
import { useParams } from 'react-router-dom'
import { FiLinkedin } from 'react-icons/fi'
import { Session } from './Session'
import { UnapprovedMentor } from './UnapprovedMentor'
import { useAuth } from '../../auth/authSlice'

export const App = () => {
  const { mentorId } = useParams()
  const { data: mentor = {}, isLoading } = useGetUserByIdQuery(mentorId)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    name,
    photoURL,
    rating,
    average,
    linkedin,
    job,
    university,
    career,
    experience,
    about,
    meet,
  } = mentor
  const { isAuthenticated } = useAuth()

  const isUnapprovedMentor =
    !photoURL ||
    !job ||
    !university ||
    !career ||
    !experience ||
    !about ||
    !meet
  const colorText = useColorModeValue('gray.600', 'gray.300')
  const colorLinkedIn = useColorModeValue('gray.500', 'gray.300')
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])
  if (isLoading)
    return (
      <Box height={'calc(100vh - 77px)'}>
        <Progress size="xs" isIndeterminate />
      </Box>
    )
  return (
    <React.Fragment>
      <UnapprovedMentor open={isUnapprovedMentor} />
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
                onClick={onOpen}
                disabled={!isAuthenticated}
              >
                Agendar sesión
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
                  <Text as="span" color={colorLinkedIn} lineHeight="1">
                    @{linkedin}
                  </Text>
                  <a
                    target={'_blank'}
                    href={`https://www.linkedin.com/in/${linkedin}`}
                    rel="noreferrer"
                  >
                    <Icon as={FiLinkedin} color="blue.500" />
                  </a>
                </HStack>
              </Stack>
              <Text mt="2">{job}</Text>
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
                    <Text fontSize="sm" fontWeight="medium" color={colorText}>
                      <b>{career}</b>
                    </Text>
                  </HStack>
                  <HStack spacing="1">
                    <Icon as={FaUniversity} color="gray.400" />
                    <Text fontSize="sm" fontWeight="medium" color={colorText}>
                      {university}
                    </Text>
                  </HStack>
                  <HStack spacing="1">
                    <Icon as={BiTimeFive} color="gray.400" />
                    <Text fontSize="sm" fontWeight="medium" color={colorText}>
                      {experience}
                    </Text>
                  </HStack>
                </VStack>
              </Wrap>
              <Text fontWeight="semibold" mt="8" mb="2">
                Sobre mí
              </Text>
              <Box fontSize="sm">{about}</Box>
              {/* <Text fontWeight="semibold" mt="8" mb="2">
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
            </Wrap> */}
            </Box>
          </Stack>
          <Button
            mt="8"
            width="full"
            colorScheme="blue"
            display={{ md: 'none' }}
            onClick={onOpen}
            disabled={!isAuthenticated}
          >
            Agendar una sesión{' '}
          </Button>
        </Card>
        <Session
          isOpen={isOpen}
          onClose={onClose}
          title={`Reunirse con: ${name}`}
        />
        <Comments />
      </Box>
    </React.Fragment>
  )
}
