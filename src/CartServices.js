import axios from "axios";
import { Bounce, toast } from "react-toastify";
 

export async function addProductToCart(productId, userToken) {
    let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{
        productId : productId
    },{
        headers: {
            token: userToken
        }
    })
     const response = data.numOfCartItems 
     console.log(response);
    toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
          
} 
 