import Api from '../Api'

export const GetPlans = async () => {
  try {
    const token = localStorage.getItem('token')
    const dataGet = await Api.get('/plans', {
      headers: { Authorization: token }
    })
    return dataGet.data
  } catch (error) {
    throw error
  }
}
