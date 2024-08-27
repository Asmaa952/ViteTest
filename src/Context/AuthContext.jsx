import { createContext,  useState } from "react";





export const AuthContext = createContext(0);

 

export default function CounterContextProvider({children}){

    const [userToken, setUserToken] = useState(localStorage.getItem("token") ?? "")
     

    return <>


    <AuthContext.Provider value={{userToken, setUserToken}}>
        {children}
    </AuthContext.Provider>

    
    </>
    
    
}