import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import {Helmet} from 'react-helmet'
import Product from '../product/Product';


export default function Products() {


   function getProducts(){
     return axios.get("https://ecommerce.routemisr.com/api/v1/products");
       
    }
  
 let {data} = useQuery({
    queryKey: ['Products'],
    queryFn:  getProducts
  })
   




  return (
    <div className='grid grid-cols-4 gap-3'> 
      <Helmet>
          <title>products</title>
      </Helmet>
       {data?.data.data.map((product, i) => {
        return <Product product={product} key={i} />
       })}
    </div>
  )
}
