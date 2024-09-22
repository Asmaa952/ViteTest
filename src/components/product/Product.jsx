import React, { useContext } from 'react'
import RatingStars from '../RatingStars/RatingStars'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { addProductToCart } from '../../CartServices'
import { AddProductToWishList } from '../../AddProductToWishList'
 
export default function Product({product}) {

	let {userToken}  = useContext(AuthContext)

	  
  return (
    <div   className=" max-w-2xl mx-auto col-span-4 md:col-span-2 lg:col-span-1 ">
	        <div className="bg-white rounded-lg bg-transparent shadow-md shadow-green-400 hover:shadow-green-600 max-w-sm dark:bg-gray-800 dark:border-gray-700">
		        <Link to={"/ProductDetails/" +  product._id}>
			        <img className="rounded-t-lg p-8" src={product.imageCover} alt="product image"/>
                </Link >
			      <div className="px-5 pb-5">
			      	<Link to={"/ProductDetails"}>
					      <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white line-clamp-1">{product.title}</h3>
						  <span className="text-3xl font-bold text-gray-900 dark:text-white pt-4">${product.price}</span>
				    </Link>
					   <p className='line-clamp-1'>{product.description}</p>
				      <RatingStars rating={product.ratingsAverage}  />
					   
				      <div className="items-center justify-between">
					       
					      <button onClick={() => addProductToCart(product._id, userToken)}
						      className=" hover:bg-green-800 text-green-800  bg-white hover:text-white border-spacing-2 border border-green-800 flex justify-center px-4 items-center    focus:bg-green-800 focus:text-white font-medium rounded-lg text-sm   text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><div   className=" text-gray-600   rounded-md p-2  focus:outline-none">
							  <svg className="h-5 w-5 hover:text-white text-green-800" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
						  </div>Add
						    to cart</button>

							<button onClick={() =>  AddProductToWishList(product._id, userToken)} className="mt-4 px-4 py-2 hover:bg-red-800 text-red-800 hover:text-white border-spacing-2 border border-red-800 text-sm font-medium rounded  bg-white focus:outline-none focus:bg-red-800  focus:text-white">
                                <div className='flex justify-center items-center'>
                                   <i className='fa-regular fa-heart text-md ms-1'></i>
                                   <div className='mx-1 text-md'> Add to WishList</div>
                                </div>
                            </button>
							 
				      </div>
			      </div>
          </div>
        </div>
          
      
    
  )
}

