import styled from 'styled-components'

// Estilo para el fondo semitransparente
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

// Estilo para el modal
export const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`

// Estilo para el botón de cierre
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: #333;
`

// Estilo para el contenido del modal
export const ModalContent = styled.div`
  /* Agrega estilos adicionales para el contenido del modal */
`
