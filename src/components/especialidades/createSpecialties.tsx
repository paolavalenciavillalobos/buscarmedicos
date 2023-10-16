import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

export const CreateSpecialties = () => {
  const [name, setName] = useState<string>('')
  const [enabled, setEnabled] = useState<boolean>(false)

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Crear el objeto de datos a enviar al servidor
    const data = {
      name: name, // Establece el nombre según el estado
      enabled: enabled // Establece la actividad según el estado
    }
    const create = await createPost(data)
    console.log('user:', create)
    // redirigir al usuario a otra página (status:inconcluso)
    //navigate('/register')
  }

  return (
    <>
      <DivForTitle>
        <BackButton>+</BackButton>
        <TitleEditCreate> Nova especialidade</TitleEditCreate>
      </DivForTitle>
      <form onSubmit={handleLoginSubmit}>
        <BodyForForm>
          <TitleForForm>Dados da especialidade</TitleForForm>
          <BoxForForm>
            <InputDados>
              <label htmlFor="title">Nome</label>
              <p>{name}</p>
              <input
                id="title"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </InputDados>
            <InputDados>
              <label htmlFor="description">ativo</label> <p>{enabled}</p>
              <label htmlFor="enabled">Activo</label>
              <input
                id="enabled"
                type="checkbox"
                checked={enabled}
                onChange={e => setEnabled(e.target.checked)} // Actualiza el estado cuando el checkbox cambie
              />
            </InputDados>
          </BoxForForm>
          <ButtonInputsEditCreate type="submit">Salvar</ButtonInputsEditCreate>
        </BodyForForm>
      </form>
    </>
  )
}
