import Api from '../Api'
import { AxiosResponse } from 'axios'

interface FaqApi extends GetApi {
  content: {
    id: number
    createdAt: string
    updatedAt: string
    createdBy: null
    updatedBy: null
    title: string
    message: string
    type: string
  }[]
}

export const GetQuestions = async (
  searchTerm?: string | null,
  pagina?: number,
  elementosPorPagina?: number,
  currentTab?: string
) => {
  try {
    const token = localStorage.getItem('token')
    const dataGet: AxiosResponse<FaqApi> = await Api.get(`/questions`, {
      headers: { Authorization: token },
      params: {
        page: pagina,
        size: elementosPorPagina,
        search: searchTerm,
        type: currentTab
      }
    })
    return dataGet.data
  } catch (error) {
    throw error
  }
}

type datatypoFaq = {
  title: string
  message: string
  type: string | undefined
}

export const createFaqService = async (data: datatypoFaq) => {
  //console.log(data)
  try {
    const userData = await Api.post('/questions', data, {
      headers: {
        Authorization: localStorage.getItem('token') ?? ''
      }
    })
    return userData.data
  } catch (error) {
    throw error
  }
}

export const UpdateFaq = async (id: string, data: datatypoFaq) => {
  console.log(data)
  try {
    const token = localStorage.getItem('token')
    const updateData = await Api.put(`/questions/${id}`, data, {
      headers: { Authorization: token }
    })
    return updateData.data
  } catch (error) {
    throw error
  }
}

export const DeleteFaq = async (id: number) => {
  console.log()
  try {
    const token = localStorage.getItem('token')
    const updateData = await Api.delete(`/questions/${id}`, {
      headers: { Authorization: token }
    })
    return updateData.data
  } catch (error) {
    throw error
  }
}

export const GetbyidQuestions = async (id: number) => {
  try {
    const token = localStorage.getItem('token')
    const data = await Api.get(`/questions/${id}`, {
      headers: { Authorization: token }
    })

    return data.data
  } catch (error) {
    throw error
  }
}
