import { AxiosResponse } from 'axios'
import Api from '../Api'

interface SpecialtiesApi extends GetApi {
  content: {
    id: number
    name: string
    enabled: boolean
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    active: boolean
  }[]
}

export const GetSpecialties = async (
  searchTerm: string | null,
  pagina: number,
  elementosPorPagina: number
) => {
  console.log('pagina', pagina)
  try {
    const token = localStorage.getItem('token')
    const dataGet: AxiosResponse<SpecialtiesApi> = await Api.get(
      `/specialties`,
      {
        headers: { Authorization: token },
        params: { page: pagina, size: elementosPorPagina, search: searchTerm }
      }
    )
    return dataGet.data
  } catch (error) {
    throw error
  }
}

type datatypo = {
  name: string
  enabled: boolean
}

export const createPost = async (data: datatypo) => {
  try {
    const userData = await Api.post('/specialties', data, {
      headers: {
        Authorization: localStorage.getItem('token') ?? ''
      }
    })
    return userData.data
  } catch (error) {
    throw error
  }
}

export const UpdateSpecialties = async (id: number, data: datatypo) => {
  console.log(data)
  try {
    const token = localStorage.getItem('token')
    const updateData = await Api.put(`/specialties/${id}`, data, {
      headers: { Authorization: token }
    })
    return updateData.data
  } catch (error) {
    throw error
  }
}

export const DeleteSpecialties = async (id: number) => {
  console.log()
  try {
    const token = localStorage.getItem('token')
    const updateData = await Api.delete(`/specialties/${id}`, {
      headers: { Authorization: token }
    })
    return updateData.data
  } catch (error) {
    throw error
  }
}

export const GetbyidSpecialties = async (id: number) => {
  try {
    const token = localStorage.getItem('token')
    const data = await Api.get(`specialties/${id}`, {
      headers: { Authorization: token }
    })

    return data.data
  } catch (error) {
    throw error
  }
}
