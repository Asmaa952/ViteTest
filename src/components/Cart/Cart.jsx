import axios from 'axios'
import React, { useEffect, useState} from 'react'
import CartProduct from '../CartProduct/CartProduct';
import { Link } from 'react-router-dom';
import LodingScreen from '../LodingScreen/LodingScreen';
import Navbar from '../Navbar/Navbar';
 
 
 
 
export default function Cart() {
  const [cart, setCart] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  const token = localStorage.getItem("token");

  useEffect(() => {
    getUserCart()
  },[])

   

  async function getUserCart() {
    setisLoading(true)
    let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
      headers:{
          token:  token  
      }
    }).finally(() =>{
      setisLoading(false)
    })
    setCart(data);
  } 
  function clearCart() {
      axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{
      headers:{
          token:  token  
      }
    }).finally(() =>{
      setCart(null);
    })
  }

  if(isLoading){
    return <LodingScreen/>
  }
  
  return (
    cart ? <div className="pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        {cart?.data.products.map((product, index) => {
             return   <CartProduct key={index} product={product} setCart={setCart} cart={cart}/>
        })}
         
      </div>
       
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2  justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">${cart?.data.totalCartPrice}</p>
          <p className='text-gray-700 mt-4'>Total items <span className='text-red-700 font-bold'>{cart?.numOfCartItems} EGP</span></p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$ 0</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">${cart?.data.totalCartPrice} USD </p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <Link to={"/shippingAddress/" + cart?.data._id} className="mt-6 block text-center w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</Link>
      </div>
    </div>
    <button onClick={clearCart} className='text-red-800 border-2 border-red-800 rounded-md py-2 px-4 hover:text-white hover:bg-red-800 mx-auto block'>Clear Cart</button>
  </div>: <>   <h1 className='text-center text-4xl font-bold text-red-800'>No products in your cart</h1></>
              
  
          

    
 
)
}
