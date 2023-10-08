import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '@/config/specialities'

export const CreateSpecialties = () => {
  const [name, setName] = useState<string>('')
  const [enabled, setEnabled] = useState<boolean>(false)

  //const navigate = useNavigate()

  /*const createPost = async (data: CreateType): Promise<CardsType> => {
      console.log(data)
      try {
        //const token = localStorage.getItem("token")
        const userData = await Api.post("api/card", data, {
          headers: {
            'Authorization': localStorage.getItem('token') ?? ''
          }
        })
        return userData.data

      } catch (error) {
        throw error;
      }
    };*/

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Crear el objeto de datos a enviar al servidor
    const data = {
      name: name, // Establece el nombre según el estado
      enabled: enabled // Establece la actividad según el estado
    }
    const create = await createPost(data)
    console.log('user:', create)
    // redirigir al usuario a otra página (status:inconcluso)
    //navigate('/register')
  }

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <h3>New</h3>
        <label htmlFor="title">Nome</label>
        <p>{name}</p>
        <input
          id="title"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="description">ativo</label> <p>{enabled}</p>
        <label htmlFor="enabled">Activo</label>
        <input
          id="enabled"
          type="checkbox"
          checked={enabled}
          onChange={e => setEnabled(e.target.checked)} // Actualiza el estado cuando el checkbox cambie
        />
        <button type="submit">add new specialtie</button>
      </form>
    </>
  )
}
