import React ,{ useContext } from 'react';
import './App.css';
import Products from '../Components/Products/Products';
import Auth from '../Components/UI/Auth';
import { AuthContext } from '../context/auth-context';
import useDarkMode from '../hooks/dark-mode';

const App = ()=> {

    const authContext = useContext(AuthContext)

    const [theme, toggleTheme] = useDarkMode()

    let content = <Auth/>

    if(authContext.isLogin){
        content = (
            <div className="app" 
            style={{
                background: theme === "dark" ? "#282828" : "#ffffff",
                color: theme === "dark" ? "#ffffff" : "#000",
                textAlign: "center",
                transition: "0.3s all",
            }}>
                <button onClick={toggleTheme}>تغییر تم</button>
                <Products/>
            </div>
        )
    }

    return content
}

export default App;
