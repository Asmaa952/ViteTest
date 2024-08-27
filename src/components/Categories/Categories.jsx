import axios from 'axios'
import React, { useEffect, useState }  from 'react'
import {Helmet} from 'react-helmet'
import LodingScreen from '../LodingScreen/LodingScreen';
import Category from '../Category/Category'

export default function Home() {
  const [categories, setCategories ] = useState([])
  const [isLoading, setisLoading] = useState(true)

useEffect(() =>{
  getCategories()
},[])

async function getCategories(){
  setisLoading(true)
  let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/categories").finally(() => {
    setisLoading(false)
  })
  setCategories(data.data);
}

if(isLoading){
  return  <LodingScreen/>
}
   
  return <> 
  <div> 
      <Helmet>
        <title> Categories</title>
      </Helmet>
  </div>

  <div className='grid grid-cols-3 gap-3'>
      {categories.map((category, i) => {
        return <>  
          <Category  category={category}  key={i}/>
          </>
      })}
    </div>
     
  </>
}
