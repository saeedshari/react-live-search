import React, { useState } from 'react';
import './ProductForm.css';
import Card from '../UI/Card';

const ProductForm = (props)=> {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const submitHandler = (eve)=>{
        eve.preventDefault();
        props.addProduct({ title:title, amount:amount });
        setTitle("");
        setAmount("");
    }

    return (
        <div>
            <Card>
                <h2>یک محصول جدید اضافه کنید</h2>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">عنوان</label>
                        <input id="title" type="text" value={title}
                            onChange={ (eve)=> setTitle(eve.target.value) }/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">تعداد</label>
                        <input id="amount" type="number" value={amount}
                            onChange={ (eve)=> setAmount(eve.target.value) }/>
                    </div>
                    <div className="form-button">
                        <button type="submit">ثبت</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}
export default ProductForm;