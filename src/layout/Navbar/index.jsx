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
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/authSlice'

export const Navbar = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  const navigateToProfile = () => {
    navigate('/profile')
  }

  const navigateToMentors = () => {
    navigate('/mentors')
  }

  const navigateToSessions = () => {
    navigate('/sessions')
  }

  const navigateToPosts = () => {
    navigate('/')
  }

  const handleLogin = () => {
    navigate('/login')
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
                zIndex={'100'}
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button
                  w="full"
                  variant={
                    location.pathname === '/sessions' ? 'solid' : 'ghost'
                  }
                  leftIcon={<AiOutlineVideoCamera />}
                  onClick={navigateToSessions}
                  colorScheme={'blue'}
                >
                  Sesiones
                </Button>
                <Button
                  w="full"
                  variant={location.pathname === '/mentors' ? 'solid' : 'ghost'}
                  leftIcon={<AiOutlineUser />}
                  onClick={navigateToMentors}
                  colorScheme={'blue'}
                >
                  Mentores
                </Button>
                <Button
                  w="full"
                  variant={location.pathname === '/' ? 'solid' : 'ghost'}
                  leftIcon={<AiOutlineRead />}
                  onClick={navigateToPosts}
                  colorScheme={'blue'}
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
                leftIcon={<AiOutlineVideoCamera />}
                size="sm"
                onClick={navigateToSessions}
                colorScheme="blue"
                variant={location.pathname === '/sessions' ? 'solid' : 'ghost'}
              >
                Sesiones
              </Button>
              <Button
                colorScheme="blue"
                leftIcon={<AiOutlineUser />}
                size="sm"
                onClick={navigateToMentors}
                variant={location.pathname === '/mentors' ? 'solid' : 'ghost'}
              >
                Mentores
              </Button>
              <Button
                leftIcon={<AiOutlineRead />}
                size="sm"
                onClick={navigateToPosts}
                colorScheme="blue"
                variant={location.pathname === '/' ? 'solid' : 'ghost'}
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
            {isAuthenticated ? (
              <Avatar
                size="sm"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                onClick={navigateToProfile}
                cursor={'pointer'}
              />
            ) : (
              <Button onClick={handleLogin} colorScheme="blue">
                Iniciar sesión
              </Button>
            )}
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
