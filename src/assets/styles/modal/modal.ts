import styled from 'styled-components'

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

export const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 30%;
  height: 40%;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  p {
    font-family: 'Sora';
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 8%;
  }
`

export const GreenButtonForDelete = styled.button`
  width: 50%;
  height: 30%;
  border-radius: 16px;
  background: #00c247;
  color: white;
  border: none;
  font-family: 'Poppins', sans-serif;
  margin-top: 4%;
  margin-bottom: 2%;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  cursor: pointer;

  padding: 0.8%;
`

export const CloseButton = styled.button`
  width: 10%;
  border: none;
  display: flex;
  align-items: start;
  margin-left: auto;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  background-color: white;
`

export const ModalContent = styled.div``
export const BackRedButton = styled.button`
  color: red;
  border: none;
  background-color: white;
  cursor: pointer;
`
