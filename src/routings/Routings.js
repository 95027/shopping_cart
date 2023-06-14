import { Outlet, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Cart from "../pages/Cart"
import Footer from "../components/Footer"


const Routings = () => {
  return (
    <div >
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="*" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={ 
                <>
                <Navbar />
                <Outlet />
                <Footer/>
                </>
             }>
                <Route path="/home" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Routings