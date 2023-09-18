import React, { useContext } from 'react'
import { useState } from 'react';
import { CartContext } from './CartContext';

function Cart() {

    const { cart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    const remove = () => {
        setQuantity(quantity - 1);
    }

    const add = () => {
        setQuantity(quantity + 1);
    }

    if (Object.keys(cart).length) {
        return (
            <>
                <div className='bill' >
                    <h3>Billing Desk</h3>
                    <div className='cart'align='left'>
                        <p>Product Name  </p>
                        <p><b>{cart.data.title}</b></p>
                    </div>
                    <div className='cart' align='left'>
                        <p>price per unit </p>
                        <p><b>${cart.data.price}</b></p>
                    </div>
                    <div className='cart'>
                        <p>Quantity </p>
                        <div>
                            <button onClick={remove}>-</button>
                            <b>{quantity}</b>
                            <button onClick={add}>+</button>
                        </div>
                    </div>
                    <div className='cart'>
                        <p>Total </p>
                        <p><b>{quantity * cart.data.price}</b></p>
                    </div>
                    <div className='cart'>
                        <p>Shipping</p>
                        <p><b>FREE</b></p>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <div><h4><i>Enjoy Shopping...Our products are waiting for you</i></h4></div>
        )
    }

}

export default Cart