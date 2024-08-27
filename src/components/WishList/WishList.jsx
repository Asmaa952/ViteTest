import axios from 'axios'
import React, { useContext, useEffect, useState} from 'react'
import LodingScreen from '../LodingScreen/LodingScreen';
import RatingStars from '../RatingStars/RatingStars';
 
import { Bounce, toast } from 'react-toastify';
import { addProductToCart } from '../../CartServices';
import { AuthContext } from '../../Context/AuthContext';
 
 
export default function WishList() {
    let {userToken}  = useContext(AuthContext)
  const [wishList, setWishList] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  const token = localStorage.getItem("token");
   
  useEffect(() => {
    getUserWishList()
  },[])

  async function removeProductFromWishList(productId) {
    let {data} = await axios.delete("https://ecommerce.routemisr.com/api/v1/wishlist/" + productId, {
      headers:{
        token: localStorage.getItem("token")
      }
    })
    setWishList(data);
    toast.success("product has been removed successfuly", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      getUserWishList()
}

  async function getUserWishList() {
    setisLoading(true)
    let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
      headers:{
          token:  token  
      }
    }).finally(() =>{
      setisLoading(false)
    })
    setWishList(data);
     
  } 

  if(isLoading){
    return <LodingScreen/>
  }  



  return (
    wishList ? <div className="pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">WishList Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        {wishList?.data.map((data, index, product) => {
            return (
                <div>
                    <div key={index}  className=" w-full  mb-6 rounded-lg bg-white p-6 shadow-md  ">
                       <div className="flex items-center space-x-4">
                            <svg onClick={() => { removeProductFromWishList(data._id) }}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <img src={data.imageCover} alt="product-image" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900"> {data.title}</h2>
                            <RatingStars rating={data.ratingsAverage ?? 0}  />
                            <p className="mt-1 text-xl text-gray-700">${data.price}</p>
                            <div className="flex items-center justify-between">
					            <button  onClick={() => addProductToCart(data._id, userToken)}
						           className="text-white ms-64  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
						        to cart</button>
				            </div>
                          </div>
                        </div>
                    </div>
               
                    
                 </div>
            )
        })}
         
      </div>
       
       {/* <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">${cart?.data.totalCartPrice}</p>
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
      </div> */}
    </div> 
   
   </div>: <h1 className='text-center text-4xl font-bold'>No Fav products in your WishList</h1>

    
 
)
  
}
 