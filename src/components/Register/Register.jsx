import axios from 'axios';
import { useFormik } from 'formik';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Register() {

  const [isLoding, setIsLoding] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const navigate = useNavigate()   

  const  initialValues ={
    "name":"",
    "email":"",
    "password":"",
    "rePassword":"",
    "phone":""
};

  const validationSchema = Yup.object({
  name: Yup.string().required("name is requried").min(3,"name length must be more than 3").max(20,"name length must be less than 20"),
  email: Yup.string().required("email is requried").email("Enter vaild email"),
  password: Yup.string().required("password is requried").matches(/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/,"6 is minimum character limit,20 is maximum character limit,  "),
  rePassword:  Yup.string().required("rePassword is requried").oneOf([Yup.ref("password")],"password and rePassword must be matched"),
  phone: Yup.string().required("phone is requried")
})

async function onSubmit(){
  setErrorMsg("")
  setSuccessMsg("")
  setIsLoding(true)
   await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values).then(( {data}) => {
    setIsLoding(false)
    console.log(data);
    setSuccessMsg(data.message)
    setTimeout(() => {
      navigate("/login")
    },500)
     
  }).catch((err) => {
    setIsLoding(false)
    console.log(err.response.data.message);
    setErrorMsg(err.response.data.message) 
  })  
  
}

  let {handleSubmit, values, handleChange, errors, touched, handleBlur} = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })

    // function validateData(values){
    //     let errors ={};
    //     if(values.name==""){
    //         errors.name ="name is requried"
    //     }else if(values.name.length < 3){
    //         errors.name ="name length must be more than 3"
    //     }else if(values.name.length > 20){
    //          errors.name ="name length must be less than 20"
    //     }


    //     if(values.email==""){
    //         errors.email ="email is requried"
    //         // email لل  validation  اعملى 
    //     }

    //     if(values.phone==""){
    //         errors.phone ="phone is requried"
    //         // phone لل  validation  اعملى 
    //     }

    //     if(values.password==""){
    //         errors.password ="password is requried"
    //     }else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password) != true){
    //         errors.password = "Minimum eight and maximum 10 characters, at least one  letter, one lowercase letter, one number and one special character"
    //     }  

    //     if(values.repassword==""){
    //         errors.repassword ="repassword is requried"
    //     }else if(values.repassword != values.password){
    //         errors.repassword ="password and repassword must be matched"
    //     }
    //     console.log(errors)
    //     return errors;
    // }

  return<>
     
   <div className='min-h-screen flex items-center justify-center mt-8'>
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
           <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Welcome to My FreshCart</h1>
         <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
       

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="username" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Name:</label>
            <input onBlur={handleBlur} onChange={handleChange}  value={values.name} type="text" id="username" name="name" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.name && errors.name &&<p className='text-red-500'>{errors.name}</p>}
          </div>

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
            <input onBlur={handleBlur} onChange={handleChange}   value={values.email} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.email && errors.email &&<p className='text-red-500'>{errors.email}</p>}
          </div>

            <div className="flex items-start flex-col justify-start">
              <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
              <input onBlur={handleBlur} onChange={handleChange}   value={values.password}  type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
              {touched.password && errors.password &&<p className='text-red-500'>{errors.password}</p>}
            </div>
 
            <div className="flex items-start flex-col justify-start">
              <label htmlFor="repassword" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Confirm Password:</label>
              <input onBlur={handleBlur} onChange={handleChange}   value={values.rePassword} type="password" id="rePassword" name="rePassword" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
              {touched.rePassword && errors.rePassword &&<p className='text-red-500'>{errors.rePassword}</p>}
            </div>

              

             <div className="flex items-start flex-col justify-start">
              <label htmlFor="phone" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Phone Number:</label>
               <input onBlur={handleBlur} onChange={handleChange}   value={values.phone} type="tel" id="phone" name="phone" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
               {touched.phone && errors.phone &&<p className='text-red-500'>{errors.phone}</p>}
            </div>

             <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-slate-400" disabled={isLoding}>Register {isLoding && <i className='fas fa-spinner fa-spin'></i>}</button>
             {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
             {successMsg && <p className='text-green-500 text-center'>{successMsg}</p>}
         </form>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
            <Link  to={"/login"} className="text-blue-500 hover:text-blue-600">Login</Link>
          </div>
    
        </div>

    </div>
  </> 
    
  
}
