import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetSpecialties } from '@/config/specialities'

export const ViewSpecialties = () => {
  const { id } = useParams<string>()
  const [specialty, setSpecialty] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetSpecialties(id)

        if (response.content) {
          const foundSpecialty = response.content.find(
            item => item.id === Number(id)
          )
          if (foundSpecialty) {
            setSpecialty(foundSpecialty)
          } else {
            console.error(`Specialty with id ${id} not found`)
          }
        } else {
          console.error('Invalid response data:', response)
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
