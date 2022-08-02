import { Box, Heading, Text, FormControl, FormLabel, Input, Button, HStack, Checkbox, VStack } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Box 
        w={['full', 'md']}
        p={[8, 10]}
        mt={[20, '10vh']}
        mx='auto'
        border={['none', '1px']}
        borderColor={['', 'gray.300']}
        borderRadius={10}
      >
        <VStack spacing={4} align='flex-start' w='full'>
          <VStack spacing={1} align={['flex-start', 'center']} w='full'>
            <Heading>Iniciar Sesión</Heading>
            <Text>Ingresa tu correo y contraseña</Text>
          </VStack>

          <FormControl>
            <FormLabel>Correo</FormLabel>
            <Input rounded='none' variant='filled' />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input rounded='none' variant='filled' type='password' />
          </FormControl>
          <HStack w='full' justify='space-between'>
            <Checkbox>Recuérdame</Checkbox>
            <Button variant='link' colorScheme='blue'>
              ¿Olvidaste tu contraseña?
            </Button>
          </HStack>
          <Button rounded='none' colorScheme='blue' w={['full', 'auto']} alignSelf='end'>
            Ingresar
          </Button>
        </VStack>
      </Box>
    </div>
  );
}

export default App;

/*import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button
} from '@chakra-ui/react'
import './App.css';

const VARIANT_COLOR = 'teal'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const LoginArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  )
}

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box textAlign='right' py={4}>
      <IconButton
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        variant='ghost'
      />
    </Box>
  )
}

const LoginHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>Iniciar Sesión</Heading>
      <Text>
        O <Link color={`${VARIANT_COLOR}.500`}>continuar como invitado</Link>
      </Text>
    </Box>
  )
}

const LoginForm = () => {
  return (
    <Box my={8} textAlign='left'>
      <form>

        <FormControl>
          <FormLabel>Correo</FormLabel>
          <Input type='email' placeholder='Ingresa tu dirección de correo electrónico' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input type='password' placeholder='Ingresa tu contraseña' />
        </FormControl>

        <Stack isInline justifyContent='space-between' mt={4}>
            <Box>
              <Checkbox>Recuérdame</Checkbox>
            </Box>
            <Box>
              <Link color={`${VARIANT_COLOR}.500`}>¿Olvidaste tu contraseña?</Link>
            </Box>
        </Stack>

        <Button variantColor={VARIANT_COLOR}  width='full' mt={4}>Ingresar</Button>
      </form>
    </Box>
  )
}

export default App;*/