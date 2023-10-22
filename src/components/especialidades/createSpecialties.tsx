import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { createPost } from '@/config/specialities'
import {
  BodyForForm,
  BoxForForm,
  ButtonInputsEditCreate,
  InputDados,
  TitleForForm,
  TitleEditCreate,
  DivForTitle,
  BackButton
} from '@/assets/styles/inputs/editCreate'
import leftSmall from '../../assets/images/left-small.png'
import { FormControlLabel, FormGroup } from '@mui/material'
import { IOSSwitch } from '../ui/toggleSwitch'
import Modal from '../modal/modal'
import { CloseButton } from '@/assets/styles/modal/modal'

export const CreateSpecialties = () => {
  const [name, setName] = useState<string>('')
  const [enabled, setEnabled] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    navigate('/especialidades')
  }

  const navigate = useNavigate()

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const data = {
      name: name,
      enabled: enabled
    }
    const create = await createPost(data)
    console.log('user:', create)
    openModal()
  }

  return (
    <>
      <DivForTitle>
        <BackButton>
          <Link to={'/especialidades'}>
            <img src={leftSmall} />
          </Link>
        </BackButton>
        <TitleEditCreate> Nova especialidade</TitleEditCreate>
      </DivForTitle>
      <form onSubmit={handleLoginSubmit}>
        <BodyForForm>
          <TitleForForm>Dados da especialidade</TitleForForm>
          <BoxForForm>
            <InputDados>
              <label htmlFor="title">Nome</label>

              <input
                id="title"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </InputDados>
            <InputDados>
              <label htmlFor="description">Situação</label>
              <FormGroup>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  checked={enabled}
                  onChange={e => setEnabled(e.target.checked)}
                  label={enabled ? 'Ativo' : 'Inativo'}
                />
              </FormGroup>
            </InputDados>
          </BoxForForm>
          <ButtonInputsEditCreate type="submit">Salvar</ButtonInputsEditCreate>
        </BodyForForm>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CloseButton
          onClick={() => {
            closeModal()
          }}
        >
          x
        </CloseButton>
        <p>Especialidade salva com sucesso!</p>
      </Modal>
    </>
  )
}
