import { Box, chakra, Image, VisuallyHidden } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => {
  return (
    <chakra.a
      href="/"
      title="Feeding Minds Home Page"
      display="flex"
      alignItems="center"
    >
      <Box h="45px" w="105px" bg="white" borderRadius={5}>
        <Image
          src={'https://feedingmindsperu.com/assets/img/logo.svg'}
          alt="Feeding Minds Logo"
        />
      </Box>
      <VisuallyHidden>Feeding Minds Perú</VisuallyHidden>
    </chakra.a>
  )
}
