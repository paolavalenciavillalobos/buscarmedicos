import Api from '../Api'
import { AxiosResponse, isAxiosError } from 'axios'

export const GetUsersDashboard = async () => {
  try {
    const token = localStorage.getItem('token')
    const usersDashboard = await Api.get('/users/dashboard', {
      headers: { Authorization: token }
    })
    return usersDashboard.data
  } catch (error) {
    throw error
  }
}

export const GetUsersCount = async () => {
  try {
    const token = localStorage.getItem('token')
    const usersDashboard = await Api.get('/users/count', {
      headers: { Authorization: token }
    })
    return usersDashboard.data
  } catch (error) {
    throw error
  }
}

export const GetLastUsersDashboard = async () => {
  try {
    const token = localStorage.getItem('token')
    const usersDashboard = await Api.get('/users?page=1&size=10', {
      headers: { Authorization: token }
    })
    return usersDashboard.data
  } catch (error) {
    throw error
  }
}

export const GetLastUsers = async (
  searchTerm: string | null,
  pagina: number,
  elementosPorPagina?: number
) => {
  try {
    console.log(
      'search:',
      searchTerm,
      'page:',
      pagina,
      'size:',
      elementosPorPagina
    )
    const token = localStorage.getItem('token')
    const usersDashboard = await Api.get(`/users`, {
      headers: { Authorization: token },
      params: { page: pagina, size: elementosPorPagina, search: searchTerm }
    })
    return usersDashboard.data
  } catch (error) {
    throw error
  }
}

export const GetLastUsersMEDICO = async (
  searchTerm: string,
  pagina: number,
  elementosPorPagina?: number
) => {
  try {
    console.log(
      'search:',
      searchTerm,
      'page:',
      pagina,
      'size:',
      elementosPorPagina
    )
    const token = localStorage.getItem('token')
    console.log(token)
    const usersDashboard = await Api.get(`/users/profile?type=MEDICO`, {
      headers: { Authorization: token },
      params: { page: pagina, size: elementosPorPagina, search: searchTerm }
    })
    console.log(usersDashboard)
    return usersDashboard.data
  } catch (error) {
    throw error
  }
}

export const GetLastUsersCONTRATANTE = async (
  searchTerm: string,
  pagina: number,
  elementosPorPagina?: number
) => {
  try {
    console.log(
      'search:',
      searchTerm,
      'page:',
      pagina,
      'size:',
      elementosPorPagina
    )
    const token = localStorage.getItem('token')
    console.log(token)
    const usersDashboard = await Api.get(`/users/profile?type=contratante`, {
      headers: { Authorization: token },
      params: { page: pagina, size: elementosPorPagina, search: searchTerm }
    })
    console.log(usersDashboard)
    return usersDashboard.data
  } catch (error) {
    throw error
  }
}

type LoginApi = {
  token: string
  name: string
}

export const LoginPost = async (email: string, password: string) => {
  try {
    const userData: AxiosResponse<LoginApi> = await Api.post(
      `public/register/login?email=${email}&password=${password}`,
      {}
    )

    const token = userData.data.token

    localStorage.setItem('token', token)
    return token
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 404) {
        return 'Usuário não encontrado'
      }
      if (error.status === 401) {
        return 'Senha incorreta'
      }
    }
  }
}
