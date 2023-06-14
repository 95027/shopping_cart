import './pages.css';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import { NavLink } from 'react-router-dom';

const Profile = () => {

  const uname = JSON.parse(localStorage.getItem('name'));
  const phone = JSON.parse(localStorage.getItem('phone'));
  const email = JSON.parse(localStorage.getItem('email'));

  return (
    <>
      <div className='profile-heading'>
        <h1>User Profile</h1>
      </div>
      <div className='profile'> 
        <div>
          <p> <PersonIcon/> : {uname} </p>
          <p> <PhoneIcon/> : {phone} </p>
          <p> <MailOutlineIcon/> : {email} </p>
          <p> <LockIcon/> : {'********'}</p>
        </div>
        <div className='createAccount'>
          <span>Don't have any account click to <NavLink to='/register'>register</NavLink></span>
        </div>
      </div>
    </>
  )
}

export default Profile