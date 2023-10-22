import styled from 'styled-components'

export const OverlayMini = styled.div`
  position: fixed;
  top: 10%;
  left: 88%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
`

export const ModalContainerMini = styled.div`
  background: #fff;
  // padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  //text-align: center;
  width: 10%;
  height: 15%;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  /*p {
    font-family: 'Sora';
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    //text-align: center;
    margin-top: 8%;
  }*/
`

export const UserButton = styled.button`
  width: 80%;
  height: 30%;
  //border-radius: 16px;
  //background: #00c247;
  //color: white;
  background-color: white;
  border: none;
  font-family: 'Poppins', sans-serif;
  margin-top: 9%;
  margin-bottom: 2%;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  cursor: pointer;
  color: #757575;

  padding: 0.8%;
  img {
    margin-left: 0;
    padding-right: 5%;
  }
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
