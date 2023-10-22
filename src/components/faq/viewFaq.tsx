import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetSpecialties } from '@/config/specialities'
import { GetQuestions, GetbyidQuestions } from '@/config/faqServices'
import {
  BackButton,
  BodyForForm,
  BoxForFormView,
  DivForTitle,
  InputDadosView,
  TitleEditCreate,
  TitleForForm
} from '@/assets/styles/inputs/editCreate'
import leftSmall from '../../assets/images/left-small.png'

export const ViewFaq = () => {
  const { id } = useParams<string>()
  const [faq, setFaq] = useState<FaqTypo>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetbyidQuestions(id)

        if (response) {
          setFaq(response)
        } else {
          console.error(`Specialty with id ${id} not found`)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [id])

  if (!faq) {
    return <p>Loading...</p>
  }

  return (
    <>
      <DivForTitle>
        <BackButton>
          <Link to={'/faq'}>
            <img src={leftSmall} />
          </Link>
        </BackButton>
        <TitleEditCreate> Ver pergunta</TitleEditCreate>
      </DivForTitle>
      <form>
        <BodyForForm>
          <TitleForForm>Dados da pergunta</TitleForForm>
          <BoxForFormView>
            <div style={{ display: 'flex', width: '100%' }}>
              <InputDadosView>
                <label htmlFor="titulo">Titulo</label>
                <input id="titulo" type="text" value={faq.title} disabled />
              </InputDadosView>
              <InputDadosView>
                <label htmlFor="message">Pergunta</label>
                <input id="message" type="text" value={faq.message} disabled />
              </InputDadosView>
            </div>
            <div style={{ display: 'flex' }}>
              <InputDadosView>
                <label htmlFor="create">Data de criação</label>
                <input id="create" type="text" value={faq.createdAt} disabled />
              </InputDadosView>
              <InputDadosView>
                <label htmlFor="edit">Data de edição</label>
                <input id="edit" type="text" value={faq.updatedAt} disabled />
              </InputDadosView>
            </div>
          </BoxForFormView>
        </BodyForForm>
      </form>
    </>
  )
}
