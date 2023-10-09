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

type datatypoNotifications = {
  title: string
  sendingDate: string
  message: string
}

export const createNotification = async (data: datatypoNotifications) => {
  //console.log(data)
  try {
    const userData = await Api.post('/notifications', data, {
      headers: {
        Authorization: localStorage.getItem('token') ?? ''
      }
    })
    return userData.data
  } catch (error) {
    throw error
  }
}

export const UpdateNotifications = async (
  id: string,
  data: datatypoNotifications
) => {
  console.log(data)
  try {
    const token = localStorage.getItem('token')
    const updateData = await Api.put(`/notifications/${id}`, data, {
      headers: { Authorization: token }
    })
    return updateData.data
  } catch (error) {
    throw error
  }
}
