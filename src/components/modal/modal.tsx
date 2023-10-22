import {
  ModalContainer,
  CloseButton,
  Overlay,
  ModalContent
} from '../../assets/styles/modal/modal'

interface ModalType {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

function Modal({ isOpen, onClose, children }: ModalType) {
  if (!isOpen) return null

  return (
    <Overlay>
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
