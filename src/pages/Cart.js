import { useContext } from 'react';
import './pages.css';
import { shopContext } from "../context/Context";
import CartItem from './CartItem';
import { productsList } from '../context/Context';
import { NavLink } from 'react-router-dom';

const Cart = () => {

  const {cartItems, getTotalCartAmount} = useContext(shopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cart'>
      <h1>Your cart items</h1>
      <div>
        {
          productsList.map((product)=>{
            if(cartItems[product.id] !== 0)
            {
              return(
                <div key={product.id}>
                  <CartItem data={product}/>
                </div>
              )
            }
            return null;
          })
        }
      </div>
      {
        totalAmount > 0 ?
        <div className='checkout'>
          <p>subtotal: <mark>$ {totalAmount}</mark></p>
          <NavLink to='/home'><button>Back</button></NavLink>
          <button>Check Out</button>
        </div>
        : <h1>Your cart is empty</h1>
      }
    </div>
  )
}

export default Cart