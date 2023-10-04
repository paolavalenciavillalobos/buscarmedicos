import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.buscarmedicos.izap.dev'
})
