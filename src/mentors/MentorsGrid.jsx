import {
  Box,
  Button,
  Image,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetMentorsQuery } from '../api/usersAPI'
import {
  careers,
  experiences,
  genres,
  jobs,
  nationalities,
  universities,
} from '../data'
import { CardWithAvatar } from './components/CardWithAvatar'
import { Hero } from './components/Hero'
import { UserExtraInfo } from './components/UserExtraInfo'
import { UserInfo } from './components/UserInfo'

import './index.css'

export const MentorsGrid = () => {
  const { data } = useGetMentorsQuery()
  console.log({ mentors: data })
  const navigate = useNavigate()
  return (
    <Fragment>
      <Hero />
      <Box
        bg="white"
        px={{ base: '6', md: '8' }}
        py="12"
        minHeight={'calc(100vh - 77px)'}
      >
        <Box
          as="section"
          maxW={{ base: 'xs', md: '3xl', lg: '7xl' }}
          mx="auto"
          display={'flex'}
          flexDir={{
            base: 'column',
            md: 'row',
          }}
          gap="24px"
        >
          <VStack
            w={{
              base: '100%',
              md: '300px',
            }}
          >
            <VStack w="100%" alignItems={'flex-start'}>
              <Text fontSize="md" fontWeight="bold" color={'blue.500'}>
                Carreras
              </Text>
              <Select
                placeholder="Todos..."
                bgColor={'#fff'}
                onChange={(e) => console.log(e.target.value)}
              >
                {careers.map(({ name, id }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack w="100%" alignItems={'flex-start'}>
              <Text fontSize="md" fontWeight="bold" color={'blue.500'}>
                Centro de estudios
              </Text>
              <Select
                placeholder="Todos..."
                bgColor={'#fff'}
                onChange={(e) => console.log(e.target.value)}
              >
                {universities.map(({ name, id }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack w="100%" alignItems={'flex-start'}>
              <Text fontSize="md" fontWeight="bold" color={'blue.500'}>
                Cargo
              </Text>
              <Select
                placeholder="Todos..."
                bgColor={'#fff'}
                onChange={(e) => console.log(e.target.value)}
              >
                {jobs.map(({ name, id }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack w="100%" alignItems={'flex-start'}>
              <Text fontSize="md" fontWeight="bold" color={'blue.500'}>
                Experiencia
              </Text>
              <Select
                placeholder="Todos..."
                bgColor={'#fff'}
                onChange={(e) => console.log(e.target.value)}
              >
                {experiences.map(({ name, id }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack w="100%" alignItems={'flex-start'}>
              <Text fontSize="md" fontWeight="bold" color={'blue.500'}>
                Nacional/Internacional
              </Text>
              <Select
                placeholder="Todos..."
                bgColor={'#fff'}
                onChange={(e) => console.log(e.target.value)}
              >
                {nationalities.map(({ name, id }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack w="100%" alignItems={'flex-start'}>
              <Text fontSize="md" fontWeight="bold" color={'blue.500'}>
                Sexo
              </Text>
              <Select
                placeholder="Todos..."
                bgColor={'#fff'}
                onChange={(e) => console.log(e.target.value)}
              >
                {genres.map(({ name, id }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </VStack>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }} spacing="6">
            {data?.users.map((user) => {
              const {
                id,
                name,
                career,
                photoURL,
                students = 100,
                average,
              } = user
              return (
                <CardWithAvatar key={id} avatarProps={{ src: photoURL, name }}>
                  <UserInfo mt="3" name={name} career={career} />
                  <UserExtraInfo my="4" count={students} rating={average} />
                  <Button
                    variant="outline"
                    colorScheme="blue"
                    rounded="full"
                    size="sm"
                    width="full"
                    onClick={() => {
                      navigate(`/mentor/${id}`)
                    }}
                  >
                    Ver más
                  </Button>
                </CardWithAvatar>
              )
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Fragment>
  )
}
