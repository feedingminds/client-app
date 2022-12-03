import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { Calendar } from './Calendar'

export const Session = ({ isOpen, onClose, title }) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={{
        base: 'full',
        md: '2xl',
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <Calendar onClose={onClose} />
      </ModalContent>
    </Modal>
  )
}
