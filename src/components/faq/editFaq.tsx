import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
import { GetQuestions, GetbyidQuestions, UpdateFaq } from '@/config/faqServices'

type datatypoFaq = {
  title: string
  message: string
  type: string
}

export const EditQuestions = () => {
  const { id } = useParams<{ id?: string | undefined }>()
  const idAsNumber = !isNaN(Number(id)) ? Number(id) : null
  const [faq, setFaq] = useState<datatypoFaq>({
    title: '',
    message: '',
    type: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      if (!idAsNumber) {
        console.error('ID is undefined')
        return
      }
      try {
        const response = await GetbyidQuestions(idAsNumber)
        if (response) {
          setFaq(response)
          console.log(response)
        } else {
          console.error(` id ${id} not found`)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [id])

  const handleTitleChange = event => {
    setFaq({ ...faq, title: event.target.value })
  }

  const handleMessageChange = () => {
    setFaq({ ...faq, message: event.target.value })
  }

  const handleUpdate = async () => {
    if (!idAsNumber) {
      console.error('ID is undefined')
      return
    }

    try {
      const updatedFaq = {
        id: idAsNumber,
        title: faq.title,
        message: faq.message,
        type: faq.type
      }

      await UpdateFaq(idAsNumber, updatedFaq)
      navigate('/faq')
    } catch (error) {
      console.error('Error updating data:', error)
      alert('aconteceu algum erro')
    }
  }
  return (
    <>
      <DivForTitle>
        <BackButton>
          <Link to={'/faq'}>
            <img src={leftSmall} />
          </Link>
        </BackButton>
        <TitleEditCreate> Editar Faq</TitleEditCreate>
      </DivForTitle>
      <form>
        <BodyForForm>
          <TitleForForm>Dados da FAQ</TitleForForm>
          <BoxForForm>
            <InputDados>
              <label htmlFor="name">Titulo</label>
              <input
                type="text"
                id="name"
                value={faq.title}
                onChange={handleTitleChange}
              />
            </InputDados>
            <InputDados>
              <label htmlFor="description">Message</label>
              <input
                type="text"
                id="name"
                value={faq.message}
                onChange={handleMessageChange}
              />
            </InputDados>
            <InputDados>
              <label htmlFor="tipo">Tipo de usuario</label>
              <input type="text" id="tipo" value={faq.type} disabled />
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
