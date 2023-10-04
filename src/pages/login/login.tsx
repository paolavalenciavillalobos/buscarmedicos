import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  StyledBody,
  Button,
  Title,
  Text,
  Input,
  Box,
  PasswordBox
} from '@/assets/styles/login'
import { LoginPost } from '@/config/servicies'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const userName = await LoginPost(email, password)
    console.log('user:', userName)
    navigate('/')
  }

  return (
    <>
      <StyledBody>
        <Container>
          <Text>Seja bem-vindo</Text>
          <Title>Realize seu login</Title>
          <Input>
            <label htmlFor="user">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Input>
          <Input>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Input>
          <Box>
            <label>
              <input type="checkbox" />
              Lembrar-me
            </label>
            <PasswordBox>Esqueci minha senha</PasswordBox>
          </Box>
          <Button onClick={e => handleLoginSubmit(e)} type="button">
            Entrar
          </Button>
        </Container>
      </StyledBody>
    </>
  )
}

export default Login
