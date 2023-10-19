import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

export const EditSpecialties = () => {
  const { id } = useParams()
  const [specialty, setSpecialty] = useState({ name: '', enabled: false })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetbyidSpecialties(id)
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
    try {
      const updatedSpecialty = {
        id: Number(id),
        name: specialty.name,
        enabled: specialty.enabled
      }

      await UpdateSpecialties(id, updatedSpecialty) // Actualiza la especialidad con los nuevos datos
      alert('Especialidad actualizada correctamente')
    } catch (error) {
      console.error('Error updating data:', error)
      alert('Error al actualizar la especialidad')
    }
  }

  return (
    <>
      <DivForTitle>
        <BackButton>
          <img src={leftSmall} />
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
              <label htmlFor="enabled">Ativo</label>
              <input
                type="checkbox"
                id="enabled"
                checked={specialty.enabled}
                onChange={handleEnabledChange}
              />
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
