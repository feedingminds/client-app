import React from 'react'
import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'

export function UnapprovedMentor({ open }) {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={open}
        colorScheme="blue"
        size={{
          base: 'full',
          sm: 'md',
        }}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent backgroundColor={'blue.500'}>
          <ModalBody
            style={{
              padding: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src="assets/undraw_online_learning.svg"
              pointerEvents={'none'}
              height="120px"
            />
            <Text
              sx={{
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '32px',
                letterSacing: '-0.015em',
                textAlign: 'center',
                color: '#EBEEF5',
              }}
            >
              El mentor aún no ha sido aprobado
            </Text>
            <Text
              sx={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              El mentor aún no ha sido aprobado porque su perfil no está
              completo, hacemos esto para brindarte la mejor experiencia como
              estudiante de Feeding Minds. Le haremos saber al mentor que los
              estudiantes están interesados ​​en contactarlo. Gracias por su
              comprensión. ❤
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
