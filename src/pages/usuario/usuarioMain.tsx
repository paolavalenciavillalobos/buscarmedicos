import User from '../../assets/images/user.png'
import DownAround from '../../assets/images/down-arrow.png'
import { EmailUser, HeaderStyle } from '../../assets/styles/home/header'
import { useEffect, useState } from 'react'
import { GetUser } from '@/config/userService'
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
  ButtonUsers,
  TitleEditCreate
} from '@/assets/styles/users/users'
import { Usuario } from '@/components/user/usuario'
import { AdminProfiles } from '@/components/user/adminProfile'

export const UsuarioMain = () => {
  const [currentTab, setCurrentTab] = useState<'USER' | 'USERS'>('USER')
  const [button1Active, setButton1Active] = useState(true)
  const [button2Active, setButton2Active] = useState(false)

  const toggleTab = (
    tab: string | ((prevState: 'USER' | 'USERS') => 'USER' | 'USERS')
  ) => {
    setCurrentTab(tab)

    if (tab === 'USER') {
      setButton1Active(true)
      setButton2Active(false)
    } else {
      setButton1Active(false)
      setButton2Active(true)
    }
  }
  const navigate = useNavigate()

  return (
    <>
      <div>
        <DivForTitle>
          <TitleEditCreate>Edição de perfil</TitleEditCreate>
        </DivForTitle>
        <BigBox>
          <ButtonBox>
            <ButtonUsers
              active={button1Active}
              type="button"
              onClick={() => toggleTab('USER')}
            >
              Dados
            </ButtonUsers>
            <ButtonUsers>Alterar senha</ButtonUsers>
            <ButtonUsers
              active={button2Active}
              type="button"
              onClick={() => toggleTab('USERS')}
            >
              Administradores
            </ButtonUsers>
          </ButtonBox>
          <div>{currentTab === 'USER' ? <Usuario /> : <AdminProfiles />}</div>
        </BigBox>
      </div>
    </>
  )
}
