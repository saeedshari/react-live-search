import React, { useState, useEffect, useRef } from 'react'
import './Search.css'
import Card from '../UI/Card'

const Search = (props)=> {
    const { onLoadedData } = props;

    const inputRef = useRef()

    const [searchItem, setSearchItem] = useState("");

    useEffect(()=>{

        const timer = setTimeout(()=>{
            if(searchItem === inputRef.current.value){
                const query = searchItem.length === 0 ? "" : `?orderBy="title"&equalTo="${searchItem}"`;

                fetch('https://livesearch-react-hook-default-rtdb.firebaseio.com/products.json' + query)
                .then((response)=> {
                    return response.json()
                })
                .then((respData)=>{
                    const data = []

                    for(let item in respData){
                        data.push({
                            id:item,
                            title:respData[item].title,
                            amount:respData[item].amount
                        })
                    }
                    
                    onLoadedData(data) // باعث متوقف نشدن ارسال درخواست ها می شود راه حل چیست؟
                                        // دارد پس مشکل همان جاستProducts.js چون ارتباط مستقیم با
                })
            }
        
        }, 1500)
        return ()=>{
            clearTimeout(timer)
        }
    }, [searchItem, onLoadedData, inputRef]) // تغییراش دست مااست پس باعث مشکل فوق نمیشود searchItem 

    return (
        <div>
            <Card>
                <div className="search-input">
                    <label htmlFor="search">جستجو</label>
                    <input type="text" value={searchItem} id="search"
                        ref={inputRef}
                        onChange={(eve)=> setSearchItem(eve.target.value)}/>
                </div>
            </Card>
        </div>
    )
}

export default Search
