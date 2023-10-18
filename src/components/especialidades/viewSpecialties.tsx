import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetSpecialties, GetbyidSpecialties } from '@/config/specialities'

export const ViewSpecialties = () => {
  const { id } = useParams<string>()
  const [specialty, setSpecialty] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetbyidSpecialties(id)
        console.log(response)

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

  if (!specialty) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div>
        <h2>{specialty.name}</h2>
        <p>ID: {specialty.id}</p>
        <p>Enabled: {specialty.enabled ? 'Activo' : 'Inactivo'}</p>
        <p>Created At: {specialty.createdAt}</p>
        <p>Updated At: {specialty.updatedAt}</p>
      </div>
    </div>
  )
}
