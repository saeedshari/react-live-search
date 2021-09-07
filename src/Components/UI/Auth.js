import React, { useContext } from 'react'
import Card from './Card'
import { AuthContext } from '../../context/auth-context'
const Auth = ()=> {

    const authContext = useContext(AuthContext)

    const loginHandler = ()=>{
        authContext.login()
    }

    return (
        <Card>
            <p>لطفا وارد حساب کاربری خود شوید</p>
            <button onClick={loginHandler}>ورود</button>
        </Card>
    )
}

export default Auth
