import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingStars from '../RatingStars/RatingStars';
import LodingScreen from '../LodingScreen/LodingScreen';
import ProductImageSlider from '../ProductImageSlider/ProductImageSlider';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { addProductToCart } from '../../CartServices';
import { AuthContext } from '../../Context/AuthContext';
import { AddProductToWishList } from '../../AddProductToWishList';
  

export default function ProductDetails() {
    let {id} = useParams()
    console.log(id);

    const [ productDetails, setProductDetails] = useState(null)
    const [ relatedProducts, setrelatedProducts] = useState([])
    const [isLoding, setisLoding] = useState(true)

    let {userToken} = useContext(AuthContext)

useEffect(() => {
    getProductDetails()
},[id])

async function getProductDetails() {
    setisLoding(true)
    let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products/" + id)
    setProductDetails(data.data);
    getRelatedProducts(data.data?.category._id)
    
    setisLoding(false)
}

async function getRelatedProducts(categoryId) {
    let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products",{
        params: {
           "category" : categoryId
        }
    })
    setrelatedProducts(data.data);
}

 
  return <>
{
    isLoding ? <LodingScreen/> 
    :
<div className=" bg-transparent">
    <main className=" py-10">
        <div className="container  px-16 mx-auto">
            <div className="md:flex md:items-center">
                <div className="w-full  md:w-6/12 lg:w-3/12">
                    <ProductImageSlider  images={productDetails?.images}/>
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0  md:w-6/12 lg:w-9/12">
                    <h3 className="text-gray-700 uppercase text-lg"> {productDetails?.title}</h3>
                    <span className="text-gray-500 mt-3">${productDetails?.price}</span>
                    <hr className="my-3"/>
                     
                    <div className="mt-3">
                        <label className="text-gray-700 text-sm" for="count">Rating:</label>
                          <RatingStars rating={productDetails?.ratingsAverage ?? 0}/>
                           
                    </div> 
                    <div className="mt-3 me-5">
                        <label className="text-gray-700 text-sm" for="count">Description:</label>
                         <h3>{productDetails?.description}</h3>
                    </div> 
                    <div className="mt-3">
                        <label className="text-gray-700 text-sm" for="count">Category:</label>
                         <h3>{productDetails?.category.name}</h3>
                    </div> 
                    <div className="mt-3">
                        <label className="text-gray-700 text-sm" for="count">SubCategory:</label>
                         <h3>{productDetails?.subcategory[0].name}</h3>
                    </div> 
                    <div className="mt-3">
                        <label className="text-gray-700 text-sm" for="count">Brand:</label>
                         <h3>{productDetails?.brand.name}</h3>
                    </div> 
                    <div className="flex items-center mt-6 flex-wrap  gap-y-1">
                        <button onClick={() => addProductToCart(productDetails._id, userToken)} className="px-4  flex justify-center items-center   hover:bg-green-800 text-green-800  hover:text-white border-spacing-2 border border-green-800 text-sm font-medium rounded   focus:outline-none   focus:bg-green-800 focus:text-white"><div   className=" text-gray-600   rounded-md p-2  focus:outline-none">
                            <svg className="h-5 w-5 text-green-800 hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>Add to Cart</button>
                        
                    </div>
                    <button onClick={() =>  AddProductToWishList(productDetails._id, userToken)} className="mt-4 px-4 py-2   hover:bg-red-800 text-red-800 hover:text-white border-spacing-2 border border-red-800    bg-white text-sm font-medium rounded  focus:outline-none   focus:bg-red-800  focus:text-white">
                        <div className='flex justify-center items-center  '>
                            <i className='fa-regular fa-heart text-md ms-1'></i>
                            <div className='mx-1 text-md'> Add to WishList</div>
                        </div>
                    </button>
                </div>
            </div>
            <RelatedProducts  products={relatedProducts}/>
        </div>
    </main>

     
</div>
}
  </>
}
