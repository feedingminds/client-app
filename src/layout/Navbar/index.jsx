import React, { Fragment } from 'react'

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
  Avatar,
  Image,
} from '@chakra-ui/react'
import {
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineVideoCamera,
} from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout, useAuth } from '../../auth/authSlice'
import { HiLogout } from 'react-icons/hi'
import { useDispatch } from 'react-redux'

export const Navbar = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  const dispatch = useDispatch()

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
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        // boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}
        shadow="md"
        position="fixed"
        zIndex={1000}
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
                  variant={location.pathname === '/mentors' ? 'solid' : 'ghost'}
                  leftIcon={<AiOutlineUser />}
                  onClick={navigateToMentors}
                  colorScheme={'blue'}
                >
                  Mentores
                </Button>
                {/* <Button
                  w="full"
                  variant={
                    location.pathname === '/sessions' ? 'solid' : 'ghost'
                  }
                  leftIcon={<AiOutlineVideoCamera />}
                  onClick={navigateToSessions}
                  colorScheme={'blue'}
                >
                  Sesiones
                </Button> */}
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
                colorScheme="blue"
                leftIcon={<AiOutlineUser />}
                size="sm"
                onClick={navigateToMentors}
                variant={location.pathname === '/mentors' ? 'solid' : 'ghost'}
              >
                Mentores
              </Button>
              {/* <Button
                leftIcon={<AiOutlineVideoCamera />}
                size="sm"
                onClick={navigateToSessions}
                colorScheme="blue"
                variant={location.pathname === '/sessions' ? 'solid' : 'ghost'}
              >
                Sesiones
              </Button> */}
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? 'none' : 'flex'}
            alignItems="center"
          >
            {isAuthenticated ? (
              <Fragment>
                <Button
                  onClick={navigateToProfile}
                  cursor={'pointer'}
                  colorScheme="blue"
                  variant={'ghost'}
                  size="sm"
                >
                  Ver mi Perfil
                </Button>
                <Button
                  cursor={'pointer'}
                  colorScheme="red"
                  variant={'ghost'}
                  size="sm"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </Button>
              </Fragment>
            ) : (
              <Button onClick={handleLogin} colorScheme="blue">
                Iniciar sesión
              </Button>
            )}
          </HStack>
        </Flex>
      </chakra.header>
      <div
        style={{
          height: '77px',
        }}
      />
    </React.Fragment>
  )
}
