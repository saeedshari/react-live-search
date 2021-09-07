import React from 'react'
import './ProductsList.css'

const ProductsList = (props)=> {
    
    return (
        <section className="product-list">
            <h2>لیست محصولات عبارتند از:</h2>
                <ul>
                    {
                        props.products.map((item)=> {

                            return <li key={item.id} onClick={()=>props.onRemoveProduct(item.id)}>
                                    <span>{item.title}</span>
                                    <span>{item.amount}x</span>
                                </li>
                        })
                    }
                </ul>
        </section>
    )
}

export default ProductsList;
