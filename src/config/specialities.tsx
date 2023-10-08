import Api from '../Api'

export const GetSpecialties = async () => {
  try {
    const token = localStorage.getItem('token')
    const dataGet = await Api.get('/specialties', {
      headers: { Authorization: token }
    })
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
  console.log(data)
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
