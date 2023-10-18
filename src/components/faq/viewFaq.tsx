import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetSpecialties } from '@/config/specialities'
import { GetQuestions, GetbyidQuestions } from '@/config/faqServices'

export const ViewFaq = () => {
  const { id } = useParams<string>()
  const [specialty, setSpecialty] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetbyidQuestions(id)

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
        <h2>{specialty.title}</h2>
        <p>ID: {specialty.id}</p>
        <p>Message: {specialty.message}</p>
        <p>Type: {specialty.type}</p>
        <p>Created At: {specialty.createdAt}</p>
        <p>Updated At: {specialty.updatedAt}</p>
      </div>
    </div>
  )
}
