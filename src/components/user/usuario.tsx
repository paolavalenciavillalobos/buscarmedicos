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
  DataBoxUsers,
  DivForComponent,
  EditButtonUser,
  EditButtonUser1,
  PForFirstData,
  PForSecondtData,
  TitleEditCreate,
  TitleForDadosUser
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
      <DivForComponent>
        <TitleForDadosUser>Dados</TitleForDadosUser>

        <DataBoxUsers>
          <PForFirstData>Nome</PForFirstData>
          <PForSecondtData className="userName">
            {userData.name}
          </PForSecondtData>
          <EditButtonUser1 onClick={() => navigate(`planos/editar/`)}>
            <img src={EditButton} />
          </EditButtonUser1>
        </DataBoxUsers>

        <DataBoxUsers>
          <PForFirstData>Email</PForFirstData>
          <PForSecondtData className="userEmail">
            {userData.email}
          </PForSecondtData>
          <EditButtonUser1 onClick={() => navigate(`planos/editar/`)}>
            <img src={EditButton} />
          </EditButtonUser1>
        </DataBoxUsers>
      </DivForComponent>
    </>
  )
}
