import { BrowserRouter as Router,Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import data from './data.json'
import Product from './Product'
import Cart from './Cart'
import { CartProvider } from './CartContext'
function App() {

  return (
    <>
      <CartProvider>
        <h1 className='heading'><i>OneStop Shopping...</i></h1>
        <Cart/>
        {data.map((item, index) => {
          return (
            <Product key={index} data={item} className='cards'/>
          )
        })}
      </CartProvider>
    </>
  )
}

export default App
