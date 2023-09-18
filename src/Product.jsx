import React, { useContext } from 'react'
import data from './data.json';
import { CartContext } from './CartContext';
function Product({ data }) {

    const { cart, setCart } = useContext(CartContext);

    const addCart = () => {
        setCart((prev) => {
            return ({ ...prev, data })
        });

    }

    return (
        <>
            <div className='box'>
                <div className='product'>
                    <div >
                        <img src={data.thumbnail} width={600} height={300} />
                    </div>
                    <div className='items' align='left'>
                        <h2>{data.title}</h2>
                        <p><small>{data.description}</small></p>
                        <p><b>Price: </b>$ {data.price}</p>
                        <p><b> Brand: </b>{data.brand}</p>
                        <p>Rating <b>{data.rating}</b></p>
                    </div>
                </div>
                <div align='right'><button onClick={addCart}>Add to Cart</button></div>
                <div className='product-images'>
                    {data.images.map((item, index) => {
                        return (
                            <img key={index} src={item} width={150} height={150} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Product