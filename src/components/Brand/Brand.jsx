import React, { useEffect, useState } from 'react'
import LodingScreen from '../LodingScreen/LodingScreen';
import axios from 'axios';
import Brands from '../Brands/Brands'
import {Helmet} from 'react-helmet'



 export default function Brand() {

  const [Brand, setBrand] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() =>{
    getBrands()
  },[])


  async function getBrands(){
    setisLoading(true)
    let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/brands").finally(() => {
      setisLoading(false)
    })
    setBrand(data.data);
    }
    
if(isLoading){
  return  <LodingScreen/>
}
   
   return <>
    <div> 
      <Helmet>
        <title>Brands</title>
      </Helmet>
    </div>

    <div className='grid grid-cols-3 gap-3 mt-4'> 
      {Brand.map((Brand, index) => {
          return <>  
            <Brands Brand={Brand}  key={index}/>
          </>
      })}
    </div>
   
   
   </>
      
   
 }
 