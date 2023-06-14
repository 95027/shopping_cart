import { useContext } from 'react';
import { shopContext } from "../context/Context";

const CartItem = (props) => {

  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(shopContext);

  const {title, id, price, thumbnail} = props.data;
  return (
    <>
    <div className="cart-item">
      <img src={thumbnail} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <div className="count">
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input type="number" value={cartItems[id]} onChange={(e)=>updateCartItemCount(e.target.value, id)}/>
          <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartItem