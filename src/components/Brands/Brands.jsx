import React  from 'react'
import { Link } from 'react-router-dom'
  
 
 
export default function Brand({Brand}) {
  return (
        <div   className="col-span-4 md:col-span-2 lg:col-span-1 max-w-2xl mx-auto">
	        <div className="bg-white  rounded-lg max-w-sm  shadow-md   hover:shadow-green-600 dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
		        <Link>
			        <img className="rounded-t-lg p-8 w-full rounded-lg hover:scale-125 transition-all  " src={Brand.image} alt="product image"/>
                </Link>
			    <div className="px-5 pb-5">
			      	<Link>
					    <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white line-clamp-1 text-center ">{Brand.name}</h3>
				    </Link>
					    
			    </div>
            </div>
        </div>
  )
}

