import { createContext, useState } from 'react';


export const shopContext = createContext(null);

export const productsList = JSON.parse(localStorage.getItem('productsList')) ? JSON.parse(localStorage.getItem('productsList')) : [];

const getDefaultCart = () => {
    let cart = {};
    for(let i=1; i<=productsList.length; i++)
    {
        cart[i] = 0;
    }
    return cart;
}

const Context = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for(const item in cartItems)
      {
        if(cartItems[item] > 0)
        {
          let itemInfo = productsList.find((product)=> product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmount;
    }
    const addToCart = (itemId) => {
      setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
      setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }
    const updateCartItemCount = (newAmount, itemId)=>{
      setCartItems((prev)=>({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

    //console.log(cartItems);
  return (
    <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
  )
}

export default Context