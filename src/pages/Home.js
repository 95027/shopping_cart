import { useContext, useEffect, useState } from "react";
import './pages.css';
import { shopContext } from "../context/Context";

const Home = () => {

  const {addToCart, cartItems} = useContext(shopContext);
  const [products, setProducts] = useState([]);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
      //console.log(data.products);
      setProducts(data.products);
      setRecords(data.products);
      localStorage.setItem('productsList', JSON.stringify(data.products));
    })
    .catch(err=>console.log(err))

  },[])

  const searchItem = () => {
   const filtered= records.filter((product)=>{
    if(search.length !== 0)
    {
      return (product.category.toLowerCase().includes(search.toLowerCase()) || product.title.toLowerCase().includes(search.toLowerCase()));
    }
    return null
    
    })
    setProducts(filtered);

    if(filtered.length ===0)
    {
      alert('no products matched');
      setProducts(records);
    }
  }

  return (
    <div className="home">
      <div className='search'>
      <input type='search' placeholder='product name' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={searchItem}>Search</button>
      </div>
      {

        products.map(item=>{
          const {description, category, title, rating, id, price, thumbnail} = item;
          const cartItemAmount = cartItems[id];
          return(
            <div key={id} className='container'>
              <h1>{category}</h1>
              <div className="center">
                <img src={thumbnail} alt='logo' />
              </div>
              <div className='info'>
                <h2>{id}. {title}</h2>
                <p>price:<mark>$ {price}</mark></p>
                <p>rating: {rating}</p>
                <p className='left'><span>description:</span> {description}</p>
                <button className="add-to-cart" onClick={()=>addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
              </div>
            </div>
          )
        })

      }
    </div>
    
  )
}

export default Home