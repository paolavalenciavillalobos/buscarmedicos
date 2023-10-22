import {
  ModalContainerMini,
  OverlayMini
} from '@/assets/styles/modal/miniModal'
import {
  ModalContainer,
  Overlay,
  ModalContent
} from '../../assets/styles/modal/modal'

interface ModalType {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

function ModalMini({ isOpen, onClose, children }: ModalType) {
  if (!isOpen) return null

  return (
    <OverlayMini>
      <ModalContainerMini>
        <ModalContent>{children}</ModalContent>
      </ModalContainerMini>
    </OverlayMini>
  )
}

export default ModalMini
