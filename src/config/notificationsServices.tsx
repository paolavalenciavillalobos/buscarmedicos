import Api from '../Api'

export const GetNotifications = async () => {
  try {
    const token = localStorage.getItem('token')
    const dataGet = await Api.get('/notifications', {
      headers: { Authorization: token }
    })
    return dataGet.data
  } catch (error) {
    throw error
  }
}
