import User from '../../assets/images/user.png'
import DownAround from '../../assets/images/down-arrow.png'
import { EmailUser, HeaderStyle } from '../../assets/styles/home/header'
import { useEffect, useState } from 'react'
import { GetUser } from '@/config/userService'
import { Button } from '../ui'
import { useNavigate } from 'react-router-dom'
import {
  EditButtonUniversal,
  GreenButtonForAdd
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
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
  GreenButtonForUser,
  PForFirstData,
  PForSecondtData,
  TitleEditCreate,
  TitleForDadosUser
} from '@/assets/styles/users/users'
import DeleteButton from '../../assets/images/delete.png'
import AddButton from '../../assets/images/add.png'

export const AdminProfiles = () => {
  const navigate = useNavigate()

  return (
    <>
      <>
        <DivForComponent>
          <TitleForDadosUser>Administrar perfis</TitleForDadosUser>

          <DataBoxUsers>
            <PForFirstData>User1</PForFirstData>
            <PForSecondtData className="userName">
              email@email.com
            </PForSecondtData>
            <EditButtonUser onClick={() => navigate(`planos/editar/`)}>
              <img src={EditButton} />
            </EditButtonUser>
            <EditButtonUser onClick={() => navigate(`planos/editar/`)}>
              <img src={DeleteButton} />
            </EditButtonUser>
          </DataBoxUsers>
          <DataBoxUsers>
            <PForFirstData>User2</PForFirstData>
            <PForSecondtData className="userName">
              email@email.com
            </PForSecondtData>
            <EditButtonUser onClick={() => navigate(`planos/editar/`)}>
              <img src={EditButton} />
            </EditButtonUser>
            <EditButtonUser onClick={() => navigate(`planos/editar/`)}>
              <img src={DeleteButton} />
            </EditButtonUser>
          </DataBoxUsers>
          <DataBoxUsers>
            <PForFirstData>User3</PForFirstData>
            <PForSecondtData className="userName">
              email@email.com
            </PForSecondtData>
            <EditButtonUser onClick={() => navigate(`planos/editar/`)}>
              <img src={EditButton} />
            </EditButtonUser>
            <EditButtonUser onClick={() => navigate(`planos/editar/`)}>
              <img src={DeleteButton} />
            </EditButtonUser>
          </DataBoxUsers>
          <GreenButtonForUser>
            <img src={AddButton} />
            Novo Perfil
          </GreenButtonForUser>
        </DivForComponent>
      </>
    </>
  )
}
