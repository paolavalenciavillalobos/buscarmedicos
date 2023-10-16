import Api from '../Api'

export const GetUser = async () => {
  try {
    const token = localStorage.getItem('token')
    const dataGet = await Api.get('/me', {
      headers: { Authorization: token }
    })
    return dataGet.data
  } catch (error) {
    throw error
  }
}
