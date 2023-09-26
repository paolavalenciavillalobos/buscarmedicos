import User from '../../assets/images/user.png'
import DownAround from '../../assets/images/down-arrow.png'
import { EmailUser, HeaderStyle } from '../../assets/styles/home/header'

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div>
          <img src={User} alt="user" />
        </div>
        <EmailUser>
          <p className="userName">Nome de usuario</p>
          <p className="userEmail">Email@email.com</p>
        </EmailUser>
        <div>
          <img src={DownAround} alt="downaround" />
        </div>
      </HeaderStyle>
    </>
  )
}
