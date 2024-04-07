import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import ProductDeatils from './components/ProductDeatils'
import Searchitem from './components/Searchitem'
import Cart from './components/Cart'
import { Items } from './components/Data'
import { useState } from 'react'


function App() {
  
  const [data,setData] = useState([...Items])
  const [cart ,setCart] = useState([])

  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />  
    <Routes>
      <Route path='/' element={<Product cart={cart} setCart={setCart} Items={data} />} />
      <Route path='/product/:id' element={<ProductDeatils cart={cart} setCart={setCart} />} />
      <Route path='/search/:term' element={<Searchitem cart={cart} setCart={setCart} />} />
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
    </Router>
      
    </>
  )
}

export default App
