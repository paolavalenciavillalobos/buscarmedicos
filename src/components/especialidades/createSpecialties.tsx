import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
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

export const CreateSpecialties = () => {
  const [name, setName] = useState<string>('')
  const [enabled, setEnabled] = useState<boolean>(false)

  //Navigate = useNavigate

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Crear el objeto de datos a enviar al servidor
    const data = {
      name: name, // Establece el nombre según el estado
      enabled: enabled // Establece la actividad según el estado
    }
    const create = await createPost(data)
    console.log('user:', create)
    //Navigate('/especialidades')
  }

  /*<label htmlFor="description">Situação</label>
              <label htmlFor="enabled">Ativo</label>
              <input
                id="enabled"
                type="checkbox"
                checked={enabled}
                onChange={e => setEnabled(e.target.checked)}*/

  return (
    <>
      <DivForTitle>
        <BackButton>
          <img src={leftSmall} />
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
                  label="ativo"
                />
              </FormGroup>
            </InputDados>
          </BoxForForm>
          <ButtonInputsEditCreate type="submit">Salvar</ButtonInputsEditCreate>
        </BodyForForm>
      </form>
    </>
  )
}
