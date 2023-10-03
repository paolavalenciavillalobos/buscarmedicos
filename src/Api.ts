import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.buscarmedicos.izap.dev/swagger-ui/index.html#/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'token'
  }
})
