
import './App.css'
import Brand from './components/Brand/Brand'
import Cart from './components/Cart/Cart'
import Categories from './components/Categories/Categories'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Login from './components/Login/Login'
import Notfound from './components/Notfound/Notfound'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import CounterContextProvider from './Context/CounterContext'
import  AuthContextProvider from './Context/AuthContext'
import ProtectedRoute from './components/ProdectedRoute/ProtectedRoute'
import ProtectedAuthRoute from './components/ProtectedAuthRoute/ProtectedAuthRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify'
import ShippingAddress from './components/ShippingAddress/ShippingAddress'
import Orders from './components/Orders/Orders'
import { Offline } from "react-detect-offline"
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools } from '@tanstack/react-query-devtools'
import WishList from './components/WishList/WishList'
import Forget from './components/Forget/Forget'
import ResetCode from './components/ResetCode/ResetCode'
import NewPassword from './components/NewPassword/NewPassword'
 


function App() {

   const queryClient = new QueryClient()
  
 const router = createBrowserRouter([
  {path:'', element:<Layout/>, children:[
    {index: true, element:<ProtectedRoute> <Home/> </ProtectedRoute> },
    {path: 'login', element:<ProtectedAuthRoute><Login/></ProtectedAuthRoute>  },
    {path: 'register', element: <ProtectedAuthRoute><Register/></ProtectedAuthRoute> },
    {path: 'forget', element: <ProtectedAuthRoute><Forget/></ProtectedAuthRoute> },
    {path: 'resetcode', element: <ProtectedAuthRoute><ResetCode/></ProtectedAuthRoute> },
    {path: 'newpassword', element: <ProtectedAuthRoute> <NewPassword/></ProtectedAuthRoute> },
    {path: 'cart', element: <ProtectedRoute><Cart/></ProtectedRoute> },
    {path: 'products', element: <ProtectedRoute> <Products/></ProtectedRoute> },
    {path: 'categories', element:<ProtectedRoute> <Categories/></ProtectedRoute>  },
    {path: 'wishList', element:<ProtectedRoute> <WishList/></ProtectedRoute>  },
    {path: 'brand', element:<ProtectedRoute> <Brand/></ProtectedRoute>  },
    {path: 'shippingAddress/:cartId', element:<ProtectedRoute> <ShippingAddress/></ProtectedRoute>  },
    {path: 'allorders', element:<ProtectedRoute> <Orders/></ProtectedRoute>  },
    {path: 'ProductDetails/:id', element:<ProtectedRoute> <ProductDetails/></ProtectedRoute>  },
    {path: '*', element: <Notfound/>}
  ]}
 ])


  return  <>
  <QueryClientProvider client={queryClient}> 
    <AuthContextProvider>
      <CounterContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />  
        <Offline> 
          <div className='fixed bottom-4 start-4 p-4 rounded-md bg-red-700 text-white'>
            Only shown offline (surprise!) 
          </div>
        </Offline>
      </CounterContextProvider>
    </AuthContextProvider>
    <ReactQueryDevtools/>
  </QueryClientProvider> 
        
    </>
  
}

export default App
