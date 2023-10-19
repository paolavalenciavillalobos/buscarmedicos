import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetSpecialties, GetbyidSpecialties } from '@/config/specialities'
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

export const ViewSpecialties = () => {
  const { id } = useParams<string>()
  const [specialty, setSpecialty] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetbyidSpecialties(id)
        console.log(response)

        if (response) {
          setSpecialty(response)
        } else {
          console.error(`Specialty with id ${id} not found`)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [id])

  if (!specialty) {
    return <p>Loading...</p>
  }

  return (
    <>
      <DivForTitle>
        <BackButton>
          <img src={leftSmall} />
        </BackButton>
        <TitleEditCreate> Ver especialidade</TitleEditCreate>
      </DivForTitle>
      <form>
        <BodyForForm>
          <TitleForForm>Dados da especialidade</TitleForForm>
          <BoxForForm>
            <div style={{ display: 'flex', width: '100%' }}>
              <InputDados>
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" value={specialty.name} disabled />
              </InputDados>
              <InputDados>
                <label htmlFor="enabled">Situação</label>
                <input
                  id="enabled"
                  type="text"
                  value={specialty.createdAt}
                  disabled
                />
              </InputDados>
            </div>
            <div style={{ display: 'flex' }}>
              <InputDados>
                <label htmlFor="create">Data de criação</label>
                <input
                  id="create"
                  type="text"
                  value={specialty.createdAt}
                  disabled
                />
              </InputDados>
              <InputDados>
                <label htmlFor="edit">Data de edição</label>
                <input
                  id="edit"
                  type="text"
                  value={specialty.updatedAt}
                  disabled
                />
              </InputDados>
            </div>
          </BoxForForm>
        </BodyForForm>
      </form>
    </>
  )
}
