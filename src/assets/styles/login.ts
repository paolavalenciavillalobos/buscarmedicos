import styled from 'styled-components'
import Login from '../images/Login.png'

export const StyledBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(${Login});
  background-size: cover;
  font-family: 'Karla', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  width: 35%;
  height: 70%;
  background-color: white;
  margin: auto 0;
  padding: 6%;
  border-radius: 15px;
`

export const Button = styled.button`
  width: 100%;
  height: 7vh;
  background: #046639;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  font-family: 'Poppins';
  color: #ffffff;
  margin-top: 2%;
  border: none;
`

export const Title = styled.p`
  font-size: 36px;
  color: #212121;
  font-weight: 800;
  line-height: 50px;
  margin-top: 0%;
  padding-top: 0%;
`
export const Text = styled.p`
  font-size: 20px;
  color: #424242;
  font-family: 'Karla', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.20000000298023224px;
  margin-bottom: 0%;
  padding-bottom: 0;
`
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  padding-right: 3%;
  margin-top: 4%;
  margin-bottom: 4%;
  input {
    border-radius: 16px;
    border: 2px solid #e0e0e0;
    padding: 4%;
  }
  label {
    padding-bottom: 2%;
    color: #757575;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
  }
`
export const Box = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  margin-top: 2%;
  margin-bottom: 8%;
  width: 100%;
`
export const PasswordBox = styled.p`
  color: #616161;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
`
