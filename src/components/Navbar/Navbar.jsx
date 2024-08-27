import React, {  useContext, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import logo from '/src/assets/Fresh-Cart-logo 1.svg'

export default function Navbar() {
     
    const [isOpen, setisOpen] = useState(false)
    let {userToken,  setUserToken} = useContext(AuthContext)
    console.log(userToken)
     const navigate = useNavigate()

    function SignOut(){
      setUserToken("");
      localStorage.removeItem("token")
      navigate("/login")
    }



  return <>
<header className="bg-gray-800 absolute w-full">
  <nav  className="container mx-auto px-6 py-3 ">
    <div  className="flex items-center justify-between">
       <div className='flex items-center '>
          <div  className="text-white font-bold text-xl flex items-center">
            <img src={logo} alt="Logo" className='w-10'/> 
            <a href='#'> FreshCart</a> 
          </div>

         {userToken && <div  className="hidden md:block">
          <ul  className="flex items-center space-x-8">
            <li><NavLink  to={"/"} className="text-white ps-10 ">Home</NavLink></li>
            <li><NavLink  to={"/products"} className="text-white px-2">Products</NavLink></li>
            <li><NavLink  to={"/categories"} className="text-white px-2">Categories</NavLink></li>
            <li><NavLink  to={"/brand"} className="text-white px-2">Brands</NavLink></li>
            <li><NavLink  to={"/wishList"} className="text-white px-2">WishList</NavLink></li>
            <li><NavLink  to={"/cart"} className="text-white px-2">Cart</NavLink></li>
          </ul>
         </div>}
          <div  className="md:hidden">
            <button  onClick={() => setisOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg  className="w-6 h-6 text-white" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                   <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
       </div>
       <div className='flex gap-2 items-center'>
           <div className='social-media'>
               <i className="fa-brands fa-facebook-f  text-white mx-1"></i>
               <i className="fa-brands fa-twitter  text-white mx-1"></i>
               <i className="fa-brands fa-linkedin  text-white mx-1"></i>
               <i className="fa-brands fa-youtube  text-white mx-1"></i>
               <i className="fa-brands fa-tiktok  text-white mx-1"></i>
               
           </div>
           <div>
                <ul className='flex gap-1'> 
                   
                  {!userToken && <>  <li><NavLink to={"/login"} className="block px-3 py-2 text-white rounded">Login</NavLink></li>
                   <li><NavLink to={"/register"} className="block px-3 py-2 text-white  rounded">Register</NavLink></li> </>}
                   {userToken && <li><button onClick={SignOut} to={"/signout"}  className="block px-3 py-2 text-white   rounded">SignOut</button></li>}
                </ul>
           </div>
       </div>

    </div>
    {userToken && <div  className={isOpen ? "mobile-menu  md:hidden" : "mobile-menu  md:hidden hidden" }>
      <ul  className="mt-4 space-y-4">
        <li><NavLink to={"/"} className="block px-4 py-2 text-white bg-gray-900 rounded">Home</NavLink></li>
        <li><NavLink to={"/products"} className="block px-4 py-2 text-white bg-gray-900 rounded">Products</NavLink></li>
        <li><NavLink to={"/categories"} className="block px-4 py-2 text-white bg-gray-900 rounded">Categories</NavLink></li>
        <li><NavLink to={"/brand"} className="block px-4 py-2 text-white bg-gray-900 rounded">Brand</NavLink></li>
        <li><NavLink to={"/wishList"} className="block px-4 py-2 text-white bg-gray-900 rounded">WishList</NavLink></li>
        <li><NavLink to={"/cart"} className="block px-4 py-2 text-white bg-gray-900 rounded">Cart</NavLink></li>
      </ul>
    </div>}
    
  </nav>
</header>


  </>
    
  
}
