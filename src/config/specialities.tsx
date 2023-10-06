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
