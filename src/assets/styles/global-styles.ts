import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export default createGlobalStyle`
  :root {
    --dark: #313131;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body, input, select, textarea {
    font-size: 1rem;
    color: var(--dark);
  }

`
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  min-width: 150px;
  background: #046639;
  position: relative;
  min-height: 100vh;
`

export const Logo = styled.div`
  height: 12.5vh;
  margin: 10%;
  padding-top: 10%;
  margin-bottom: 17%;
`

export const MenuText = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 4%;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  width: 100vh;
  cursor: pointer;
  .menu-link {
    text-decoration: none;
    color: white;
    display: flex; /* Mostrar los enlaces como elementos flexibles para alinear imagen y texto */
    align-items: center; /* Alinear elementos verticalmente (opcional) */
    padding: 8px;
    width: 33vh;
    border-radius: 10px;
  }
  .menu-link:hover {
    background-color: greenyellow; /* Color de fondo al pasar el mouse (ajusta según tus necesidades) */
    color: darkgreen; /* Color del texto al pasar el mouse (ajusta según tus necesidades) */
  }
  .menu-link .menu-icon {
    margin-right: 10px;
  }
`
