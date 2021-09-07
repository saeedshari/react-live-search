import React, { useCallback, useReducer } from 'react'
import ProductForm from './ProductForm';
import ProductsList from './ProductsList';
import Search from './Search';

const productsReducer = (state, action)=> {
    switch(action.type){
        case 'SET':
            return action.products
        case 'ADD':
            return [...state, action.product]
        default:
            throw new Error("Reducer Error!")
    }
}

const Products = ()=> {
    //const [products, setProducts] = useState([])

    const [products, dispatch] = useReducer(productsReducer, [])

    const addProductHandler = (item)=>{
        fetch('https://livesearch-react-hook-default-rtdb.firebaseio.com/products.json',{
            method: "POST",
            body:JSON.stringify(item),
            headers:{ "Content-Type": "application/json" }
        })
        .then((response)=>{
            //here extacting resp from databsae
            return response.json()
        })
        .then((respData)=>{
            //here for send data to database
            /* ----------
            setProducts((prevItem)=> (
                [...prevItem,
                    {
                        id: respData.name, //name is uinqe value from Friebase
                        ...item
                    }
                ]
            ))
            ----------*/
            dispatch({ type: 'ADD', product: { id:respData.name, ...item } })

        })
        
    }

    const searchProductHandler = useCallback((items)=> { 
        dispatch({ type: 'SET', products: items })
     }, [])

    return (
        <div>
            <section>
                <ProductForm addProduct={addProductHandler}/>
            </section>
            <section>
                {/*  با ست کردن داده دوباره ساخته می شود searchProductHandler 
                useCallback راه حل این وضعیت که دوباره ساخته نشود : استفاده از 
                */}
                <Search onLoadedData={searchProductHandler}/>
                
                <ProductsList products={products} onRemoveProduct={()=> {}}/>
            </section>
        </div>
    )
}
export default Products;