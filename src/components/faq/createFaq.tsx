import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createFaqService } from '@/config/faqServices'
import {
  BackButton,
  BodyForForm,
  BoxForForm,
  ButtonInputsEditCreate,
  DivForTitle,
  InputDados,
  TitleEditCreate,
  TitleForForm
} from '@/assets/styles/inputs/editCreate'
import leftSmall from '../../assets/images/left-small.png'
import Modal from '../modal/modal'
import { CloseButton } from '@/assets/styles/modal/modal'

export const CreateFaqs = () => {
  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const { type } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    navigate('/faq')
  }

  const navigate = useNavigate()

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const data = {
      title,
      message,
      type
    }
    const create = await createFaqService(data)
    console.log('QUESTION:', create)
    openModal()
  }

  return (
    <>
      <DivForTitle>
        <BackButton>
          <Link to={'/faq'}>
            <img src={leftSmall} />
          </Link>
        </BackButton>
        <TitleEditCreate> Nova pergunta</TitleEditCreate>
      </DivForTitle>
      <BodyForForm>
        <form onSubmit={handleLoginSubmit}>
          <TitleForForm>Dados da pergunta</TitleForForm>
          <BoxForForm>
            <InputDados>
              <label htmlFor="title">Titulo</label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </InputDados>
            <InputDados>
              <label htmlFor="message">Mensagem</label>
              <input
                id="message"
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </InputDados>
          </BoxForForm>
          <ButtonInputsEditCreate type="submit">Salvar</ButtonInputsEditCreate>
        </form>
      </BodyForForm>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CloseButton
          onClick={() => {
            closeModal()
          }}
        >
          x
        </CloseButton>
        <p>Pergunta salva com sucesso!</p>
      </Modal>
    </>
  )
}
