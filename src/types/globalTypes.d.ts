type UserData = {
  id?: number
  name: string
  firstName: string
  lastName: string
  email: string
  phone: string
  specialties: Array<{ name: string }>
  address?: {
    city: string
    uf: string
  }
  profiles?: Array<{ name: string }>
}

type DataTempItem = {
  user?: string
  email?: string
  whatsapp?: string
  specialty?: string
  city?: string
  uf?: string
  userType?: string
}

type Profile = {
  id: number
  name: string
  authority?: string
}

type User = {
  id: number | undefined
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
  profiles: Profile[]
}

interface TableDashboardProps {
  searchTerm: string
  pagina: number
  elementosPorPagina: number
  setPagina?: (pagina: number) => void
  //setElementosPorPagina?: (elementosPorPagina: number) => void
  type?: string
}

interface GetApi {
  pageable: {
    pageNumber: number
    pageSize: number
    sort: {
      empty: boolean
      unsorted: boolean
      sorted: boolean
    }
    offset: number
    paged: boolean
    unpaged: boolean
  }
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: {
    empty: boolean
    unsorted: boolean
    sorted: boolean
  }
  first: boolean
  numberOfElements: number
  empty: boolean
}
