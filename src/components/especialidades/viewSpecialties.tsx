import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetSpecialties, GetbyidSpecialties } from '@/config/specialities'
import {
  BodyForForm,
  TitleForForm,
  TitleEditCreate,
  DivForTitle,
  BackButton,
  InputDadosView,
  BoxForFormView
} from '@/assets/styles/inputs/editCreate'
import leftSmall from '../../assets/images/left-small.png'

export const ViewSpecialties = () => {
  const { id } = useParams<string>()
  const [specialty, setSpecialty] = useState<SpecialtiesGetTypo>()

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
          <Link to={'/especialidades'}>
            <img src={leftSmall} />
          </Link>
        </BackButton>
        <TitleEditCreate> Ver especialidade</TitleEditCreate>
      </DivForTitle>
      <form>
        <BodyForForm>
          <TitleForForm>Dados da especialidade</TitleForForm>
          <BoxForFormView>
            <div style={{ display: 'flex', width: '100%' }}>
              <InputDadosView>
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" value={specialty.name} disabled />
              </InputDadosView>
              <InputDadosView>
                <label htmlFor="enabled">Situação</label>
                <input
                  id="enabled"
                  type="text"
                  value={specialty.createdAt}
                  disabled
                />
              </InputDadosView>
            </div>
            <div style={{ display: 'flex' }}>
              <InputDadosView>
                <label htmlFor="create">Data de criação</label>
                <input
                  id="create"
                  type="text"
                  value={specialty.createdAt}
                  disabled
                />
              </InputDadosView>
              <InputDadosView>
                <label htmlFor="edit">Data de edição</label>
                <input
                  id="edit"
                  type="text"
                  value={specialty.updatedAt}
                  disabled
                />
              </InputDadosView>
            </div>
          </BoxForFormView>
        </BodyForForm>
      </form>
    </>
  )
}
