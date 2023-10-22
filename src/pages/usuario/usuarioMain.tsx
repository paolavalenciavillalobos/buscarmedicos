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
  TitleEditCreate,
  TitleForDados
} from '@/assets/styles/users/users'
import { Usuario } from '@/components/user/usuario'
import { AdminProfiles } from '@/components/user/adminProfile'

export const UsuarioMain = () => {
  const [currentTab, setCurrentTab] = useState<'USER' | 'USERS'>('USER')
  const navigate = useNavigate()

  return (
    <>
      <DivForTitle>
        <TitleEditCreate>Edição de perfil</TitleEditCreate>
      </DivForTitle>
      <BigBox>
        <ButtonBox>
          <ButtonUsers
            type="button"
            value={currentTab}
            onClick={() => {
              setCurrentTab('USER')
            }}
          >
            Dados
          </ButtonUsers>
          <ButtonUsers
            type="button"
            value={currentTab}
            onClick={() => {
              setCurrentTab('USERS')
            }}
          >
            Administradores
          </ButtonUsers>
        </ButtonBox>
        <div>{currentTab === 'USER' ? <Usuario /> : <AdminProfiles />}</div>
      </BigBox>
    </>
  )
}
