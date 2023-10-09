import {
  GetNotifications,
  UpdateNotifications
} from '@/config/notificationsServices'
import { GetSpecialties, UpdateSpecialties } from '@/config/specialities'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const EditNotifications = () => {
  const { id } = useParams()

  const [title, setTitle] = useState<string>('')
  const [sendingDate, setSendingDate] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetNotifications(id)

        if (response) {
          setTitle(response.title)
          setSendingDate(response.sendingDate)
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
      await UpdateNotifications(id, { title, sendingDate, message })
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }

  if (isError) {
    return <p>Error loading data.</p>
  }

  return (
    <div>
      <h3>Edit Notificação</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <p>{title}</p>
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="date">Data</label>
        <input
          id="date"
          type="date"
          value={sendingDate}
          onChange={e => setSendingDate(e.target.value)}
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
