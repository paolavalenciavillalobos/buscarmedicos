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
  //console.log(data)
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

export const UpdateSpecialties = async (id: string, data: datatypo) => {
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

export const DeleteSpecialties = async (id: string) => {
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

export const Getbyid = async (id: string) => {
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
