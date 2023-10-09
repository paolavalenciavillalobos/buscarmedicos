import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createNotification } from '@/config/notificationsServices'

export const CreateNotifications = () => {
  const [title, setTitle] = useState<string>('')
  const [sendingDate, setSendingDate] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const data = {
      title,
      sendingDate,
      message
    }
    const create = await createNotification(data)
    console.log('NOTIFICATION:', create)
    // redirigir al usuario a otra página (status:inconcluso)
    //navigate('/register')
  }

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <h3>Dados da pergunta</h3>
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
    </>
  )
}
