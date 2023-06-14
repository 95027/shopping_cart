import { NavLink } from 'react-router-dom';
import './style.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <NavLink to="/home"><h2>Shopping cart</h2></NavLink>
      </div>
      <div>
        <NavLink to="/profile"><AccountCircleIcon/></NavLink>
        <NavLink to="/cart"><ShoppingCartIcon/></NavLink>
      </div>
    </div>
  )
}

export default Navbar