import User from '../../assets/images/user.png'
import DownAround from '../../assets/images/down-arrow.png'
import { EmailUser, HeaderStyle } from '../../assets/styles/home/header'
import { useEffect, useState } from 'react'
import { GetUser } from '@/config/userService'
import { Button } from '../ui'
import { useNavigate } from 'react-router-dom'
import ModalMini from '../modal/miniModal'
import { CloseButton, UserButton } from '@/assets/styles/modal/miniModal'
import Logout from '../../assets/images/logout.png'
import UserModal from '../../assets/images/userModal.png'

export const Header = () => {
  const [userData, setUserData] = useState({ name: '', email: '' })
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await GetUser()
        console.log(result)

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
        <button
          style={{ border: 'none', background: 'white' }}
          onClick={() => {
            if (isModalOpen) {
              closeModal()
            } else {
              openModal()
            }
          }}
        >
          <img src={DownAround} alt="downaround" />
        </button>
      </HeaderStyle>
      <ModalMini isOpen={isModalOpen} onClose={closeModal}>
        <UserButton
          onClick={() => {
            navigate('/usuario')
          }}
        >
          <img src={UserModal} />
          Usuario
        </UserButton>
        <UserButton onClick={handleLogout}>
          <img src={Logout} />
          Sair
        </UserButton>
      </ModalMini>
    </>
  )
}
