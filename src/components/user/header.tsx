import User from '../../assets/images/user.png'
import DownAround from '../../assets/images/down-arrow.png'
import { EmailUser, HeaderStyle } from '../../assets/styles/home/header'
import { useEffect, useState } from 'react'
import { GetUser } from '@/config/userService'
import { Button } from '../ui'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const [userData, setUserData] = useState({ name: '', email: '' })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await GetUser()
        console.log(result)

        // Formatear los datos del usuario
        const formattedUserData = {
          name: result.firstName || 'Usuario',
          email: result.email || 'email@email.com'
        }

        setUserData(formattedUserData)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchUser()
  }, [])

  return (
    <>
      <HeaderStyle>
        <div>
          <img src={User} alt="user" />
        </div>
        <EmailUser>
          <p className="userName">{userData.name}</p>
          <p className="userEmail">{userData.email}</p>
        </EmailUser>
        <Button onClick={() => navigate(`/usuario`)}>
          <img src={DownAround} alt="downaround" />
        </Button>
      </HeaderStyle>
    </>
  )
}
