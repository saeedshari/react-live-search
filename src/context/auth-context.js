import React, { useState } from "react";

export const AuthContext = React.createContext({
    isLogin:false,
    login:()=>{}
})

const AuthContextProvider = (props)=>{

    const [loggedin, setLoggedin] = useState(false)

    const loginHandler = ()=>{
        setLoggedin(true)
    }
    

    return(
        <AuthContext.Provider
            value={{
                isLogin:loggedin,
                login:loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;