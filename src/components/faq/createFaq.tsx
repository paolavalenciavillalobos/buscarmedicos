import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createFaqService } from '@/config/faqServices'

export const CreateFaqs = () => {
  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const data = {
      title,
      message
    }
    const create = await createFaqService(data)
    console.log('QUESTION:', create)
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
