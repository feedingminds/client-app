import React from 'react'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Image,
} from '@chakra-ui/react'
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
  AiOutlineUser,
  AiOutlineVideoCamera,
  AiOutlineRead,
} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()
  const navigate = useNavigate()

  const navigateToMentors = () => {
    navigate('/mentors')
  }

  const navigateToCourses = () => {
    navigate('/courses')
  }

  const navigateToPosts = () => {
    navigate('/')
  }

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: 'inherit' }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<AiOutlineVideoCamera />}
                  onClick={navigateToCourses}
                >
                  Cursos
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="blue"
                  leftIcon={<AiOutlineUser />}
                  onClick={navigateToMentors}
                >
                  Mentores
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<AiOutlineRead />}
                  onClick={navigateToPosts}
                >
                  Publicaciones
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Feeding Minds Home Page"
              display="flex"
              alignItems="center"
            >
              <Box h="45px" w="105px">
                <Image
                  src={'https://feedingmindsperu.com/assets/img/logo.svg'}
                  alt="Feeding Minds Logo"
                />
              </Box>
              <VisuallyHidden>Feeding Minds Perú</VisuallyHidden>
            </chakra.a>
            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <Button
                variant="ghost"
                leftIcon={<AiOutlineVideoCamera />}
                size="sm"
                onClick={navigateToCourses}
              >
                Cursos
              </Button>
              <Button
                variant="solid"
                colorScheme="blue"
                leftIcon={<AiOutlineUser />}
                size="sm"
                onClick={navigateToMentors}
              >
                Mentores
              </Button>
              <Button
                variant="ghost"
                leftIcon={<AiOutlineRead />}
                size="sm"
                onClick={navigateToPosts}
              >
                Publicaciones
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? 'none' : 'flex'}
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>

            <chakra.a
              p={3}
              color="gray.800"
              _dark={{ color: 'inherit' }}
              rounded="sm"
              _hover={{ color: 'gray.800', _dark: { color: 'gray.600' } }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
