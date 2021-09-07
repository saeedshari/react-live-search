import React ,{ useContext } from 'react';
import './App.css';
import Products from '../Components/Products/Products';
import Auth from '../Components/UI/Auth';
import { AuthContext } from '../context/auth-context';

const App = ()=> {

    const authContext = useContext(AuthContext)

    let content = <Auth/>

    if(authContext.isLogin){
        content = <Products/>
    }

    return content
}

export default App;
