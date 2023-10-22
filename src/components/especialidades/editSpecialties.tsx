import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  GetbyidSpecialties,
  UpdateSpecialties
} from '../../config/specialities'
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
import { IOSSwitch } from '../ui/toggleSwitch'
import { FormControlLabel, FormGroup } from '@mui/material'

export const EditSpecialties = () => {
  const { id } = useParams<{ id?: string | undefined }>()
  const idAsNumber = !isNaN(Number(id)) ? Number(id) : null
  const [specialty, setSpecialty] = useState({ name: '', enabled: false })

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      if (!idAsNumber) {
        console.error('ID is undefined')
        return
      }
      try {
        const response = await GetbyidSpecialties(idAsNumber)
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

  const handleNameChange = event => {
    setSpecialty({ ...specialty, name: event.target.value })
  }

  const handleEnabledChange = () => {
    setSpecialty({ ...specialty, enabled: !specialty.enabled })
  }

  const handleUpdate = async () => {
    if (!idAsNumber) {
      console.error('ID is undefined')
      return
    }

    try {
      const updatedSpecialty = {
        id: idAsNumber,
        name: specialty.name,
        enabled: specialty.enabled
      }

      await UpdateSpecialties(idAsNumber, updatedSpecialty)
      navigate('/especialidades')
    } catch (error) {
      console.error('Error updating data:', error)
      alert('Aconteceu um erro')
    }
  }
  return (
    <>
      <DivForTitle>
        <BackButton>
          <Link to={'/especialidades'}>
            <img src={leftSmall} />
          </Link>
        </BackButton>
        <TitleEditCreate> Editar especialidade</TitleEditCreate>
      </DivForTitle>
      <form>
        <BodyForForm>
          <TitleForForm>Dados da especialidade</TitleForForm>
          <BoxForForm>
            <InputDados>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                value={specialty.name}
                onChange={handleNameChange}
              />
            </InputDados>
            <InputDados>
              <label htmlFor="description">Situação</label>
              <FormGroup>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  checked={specialty.enabled}
                  onChange={handleEnabledChange}
                  label={specialty.enabled ? 'Ativo' : 'Inativo'}
                />
              </FormGroup>
            </InputDados>
          </BoxForForm>

          <ButtonInputsEditCreate type="button" onClick={handleUpdate}>
            Salvar
          </ButtonInputsEditCreate>
        </BodyForForm>
      </form>
    </>
  )
}
