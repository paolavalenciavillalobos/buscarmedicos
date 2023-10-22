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

export const AdminProfiles = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <TitleForDados>Administrar Perfis</TitleForDados>
        <TitleForDados>
          <p>Nome</p>
          <p className="userName">User1</p>
          <EditButtonUniversal onClick={() => navigate(`planos/editar/`)}>
            <img src={EditButton} />
          </EditButtonUniversal>
        </TitleForDados>
        <div>
          <p>Email</p>
          <p className="userEmail">User2</p>
          <EditButtonUniversal onClick={() => navigate(`planos/editar/`)}>
            <img src={EditButton} />
          </EditButtonUniversal>
        </div>
      </div>
    </>
  )
}
