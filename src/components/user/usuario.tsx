import User from '../../assets/images/user.png'
import DownAround from '../../assets/images/down-arrow.png'
import { EmailUser, HeaderStyle } from '../../assets/styles/home/header'
import { useEffect, useState } from 'react'
import { GetUser } from '@/config/userService'
import { Button } from '../ui'
import { useNavigate } from 'react-router-dom'
import { EditButtonUniversal } from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import EditButton from '../../assets/images/edit.png'
import {
  ButtonInputsEditCreate,
  DivForTitle
} from '@/assets/styles/inputs/editCreate'
import {
  BigBox,
  ButtonBox,
  TitleEditCreate,
  TitleForDados
} from '@/assets/styles/users/users'

export const Usuario = () => {
  const [userData, setUserData] = useState({ name: '', email: '' })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await GetUser()
        console.log(result)

        // Formatear los datos del usuario
        const formattedUserData = {
          name: result.firstName || 'Usuario',
          email: result.email || 'email@email.com'
        }

        setUserData(formattedUserData)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchUser()
  }, [])

  return (
    <>
      <DivForTitle>
        <TitleEditCreate>Edição de perfil</TitleEditCreate>
      </DivForTitle>
      <BigBox>
        <ButtonBox>
          <ButtonInputsEditCreate onClick={() => navigate(`/usuario`)}>
            Dados
          </ButtonInputsEditCreate>
          <ButtonInputsEditCreate onClick={() => navigate(`/usuario`)}>
            Administradores
          </ButtonInputsEditCreate>
        </ButtonBox>

        <div>
          <TitleForDados>Dados</TitleForDados>
          <TitleForDados>
            <p>Nome</p>
            <p className="userName">{userData.name}</p>
            <EditButtonUniversal onClick={() => navigate(`planos/editar/`)}>
              <img src={EditButton} />
            </EditButtonUniversal>
          </TitleForDados>
          <div>
            <p>Email</p>
            <p className="userEmail">{userData.email}</p>
            <EditButtonUniversal onClick={() => navigate(`planos/editar/`)}>
              <img src={EditButton} />
            </EditButtonUniversal>
          </div>
        </div>
      </BigBox>
    </>
  )
}
