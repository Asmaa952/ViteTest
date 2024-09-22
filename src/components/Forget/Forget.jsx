import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
 

export default function Forget() {
  const [isLoding, setIsLoding] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate() 
 
   


 const initialValues={
    "email":"",
     
};

 const validationSchema = Yup.object({
  email: Yup.string().required("email is requried").email("Enter vaild email"),
   
  
})


async function onSubmit(){

   try {
    setErrorMsg("")
    setIsLoding(true)
    let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", values ) 
     
    if(data.statusMsg == 'success'){
       navigate('/resetcode')
    }

   } catch (err) {
    setIsLoding(false)
    setErrorMsg(err.response.data.message);
   }
 
   
}

   let {handleSubmit, values, handleChange, errors, touched, handleBlur} = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    



   
  return<>
     
   <div className='min-h-screen flex items-center justify-center'>
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
           <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Forget Password</h1>
         <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
       
          <div className="flex items-start flex-col justify-start">
            <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
            <input onBlur={handleBlur} onChange={handleChange}   value={values.email} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.email && errors.email &&<p className='text-red-500'>{errors.email}</p>}
          </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-gray-500" disabled={isLoding}>Forget {isLoding && <i className='fas fa-spinner fa-spin'></i>}</button>
            {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
         </form>
        </div>

    </div>
  </> 
    
  
}
