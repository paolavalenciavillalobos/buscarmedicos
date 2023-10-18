import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  GetSpecialties,
  GetbyidSpecialties,
  UpdateSpecialties
} from '../../config/specialities' // Reemplaza con las funciones de tu API

export const EditSpecialties = () => {
  const { id } = useParams()
  const [specialty, setSpecialty] = useState({ name: '', enabled: false })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetbyidSpecialties(id)
        if (response) {
          // Quita la verificación response.content
          setSpecialty(response) // No necesitas buscar en response.content
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
    <div>
      <h2>Edit Speciality</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={specialty.name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="enabled">Enabled:</label>
          <input
            type="checkbox"
            id="enabled"
            checked={specialty.enabled}
            onChange={handleEnabledChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleUpdate}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
