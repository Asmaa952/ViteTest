import axios from 'axios'
import React, { useEffect, useState }  from 'react'
import Product from '../product/Product'
import {Helmet} from 'react-helmet'
import LodingScreen from '../LodingScreen/LodingScreen';
 

export default function Home() {
  const [products, setproducts] = useState([])
  const [isLoading, setisLoading] = useState(true)

useEffect(() =>{
  getProducts()
},[])

async function getProducts(){
  setisLoading(true)
  let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products").finally(() => {
    setisLoading(false)
  })
  setproducts(data.data);
}

if(isLoading){
  return  <LodingScreen/>
}
   
  return <> 
  <div> 
    <Helmet>
      <title>Home</title>
    </Helmet>
  </div>

    <div className='grid grid-cols-4 gap-3'>
      {products.map((product, index) => {
        return <>  
          <Product product={product}  key={index}/>
          </>
      })}
    </div>
  </>
   

  
  
}
