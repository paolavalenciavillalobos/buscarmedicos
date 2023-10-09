import { GetQuestions, UpdateFaq } from '@/config/faqServices'
import { GetSpecialties, UpdateSpecialties } from '@/config/specialities'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const EditQuestions = () => {
  const { id } = useParams()

  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetQuestions(id)

        if (response) {
          setTitle(response.title)
          setMessage(response.Message)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsError(true)
      }
    }

    fetchData()
  }, [id])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await UpdateFaq(id, { title, message })
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }

  if (isError) {
    return <p>Error loading data.</p>
  }

  return (
    <div>
      <h3>Edit Pergunta</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <p>{title}</p>
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="message">Mensagem</label>
        <input
          id="message"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
