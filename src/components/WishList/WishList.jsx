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
    wishList ? <div className="pt-20 ">
    <h1 className="mb-10 text-center text-2xl font-bold">WishList Items</h1>
    <div className="mx-auto px-6 md:flex md:space-x-6 xl:px-0   ">
      <div className="rounded-lg  mt-10 lg:mt-12 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-x-8   ">
        {wishList?.data.map((data, index, product) => {
            return (
                <div>
                    <div key={index}  className="mb-6 rounded-lg bg-white p-6   bg-transparent shadow-md shadow-green-400 hover:shadow-green-600  ">
                       <div className="flex items-center space-x-4">
                            <svg onClick={() => { removeProductFromWishList(data._id) }}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <img src={data.imageCover} alt="product-image" className="w-full rounded-lg sm:w-40 mt-6" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900 line-clamp-1"> {data.title}</h2>
                            <RatingStars rating={data.ratingsAverage ?? 0}  />
                            <p className="mt-1 text-xl text-gray-700">${data.price}</p>
                            <div className="flex items-center justify-between">
					            <button  onClick={() => addProductToCart(data._id, userToken)}
						           className=" hover:bg-green-800 mt-6  border-spacing-2 border border-green-800 hover:text-white text-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
						        to cart</button>
				            </div>
                          </div>
                        </div>
                    </div>
               
                    
                 </div>
            )
        })}
         
      </div>
    </div> 
   
   </div>: <h1 className='text-center text-4xl font-bold'>No Fav products in your WishList</h1>

    
 
)
  
}
 