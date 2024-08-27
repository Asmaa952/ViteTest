 
import React  from 'react'
import { Link } from 'react-router-dom'
 
 
 
 

	  
   
export default function Category({category}) {
  
    return (
        <div   className=" max-w-2xl mx-auto">
                <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 relative">
                    <Link>
                        <img className="rounded-t-lg p-8 object-cover h-64 w-72 " src={category.image} alt="product image"/>
                    </Link >
                    <div className="rounded flex items-center justify-center px-5 pb-5 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                        <Link>
                            <h3 className="  font-semibold text-xl tracking-tight dark:text-white line-clamp-1"> {category.name}</h3>
                        </Link>
                    </div>
              </div>
            </div>
  )
}
