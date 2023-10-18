import Api from '../Api'

export const GetQuestions = async (
  searchTerm: string | null,
  pagina: number,
  elementosPorPagina: number
) => {
  try {
    let pesquisar = ''
    if (searchTerm) {
      pesquisar = `?search=${searchTerm}`
    }
    const pageParam =
      pagina && elementosPorPagina
        ? `?page=${pagina}&size=${elementosPorPagina}`
        : ''
    console.log(pageParam)
    const token = localStorage.getItem('token')
    const dataGet = await Api.get(`/questions${pesquisar}${pageParam}`, {
      headers: { Authorization: token }
    })
    return dataGet.data
  } catch (error) {
    throw error
  }
}

type datatypoFaq = {
  title: string
  message: string
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
