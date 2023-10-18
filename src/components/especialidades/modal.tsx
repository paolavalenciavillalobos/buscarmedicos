import React, { useState } from 'react'
//import './Modal.css' // Estilos del modal
import {
  ModalContainer,
  CloseButton,
  Overlay,
  ModalContent
} from '../../assets/styles/modal/modal'

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Modal Title</h2>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
