type UserData = {
  name: string
  email: string
  phone: string
  specialties: Array<{ name: string }>
  address?: {
    city: string
    uf: string
  }
  profiles: Array<{ name: string }>
}

type DataTempItem = {
  user?: string
  email?: string
  whatsapp?: string
  specialty?: string
  city?: string
  uf?: string
  userType: string
}

type Profile = {
  id: number
  name: string
  authority?: string
}

type User = {
  id: number
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
  profiles: Profile[]
}

type UsuarioFilter = 'MEDICO' | 'CONTRATANTE' | 'TODOS'
