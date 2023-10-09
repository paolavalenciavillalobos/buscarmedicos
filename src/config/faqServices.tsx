import Api from '../Api'

export const GetQuestions = async () => {
  try {
    const token = localStorage.getItem('token')
    const dataGet = await Api.get('/questions', {
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
