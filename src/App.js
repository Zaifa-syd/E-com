import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Component/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Category from './Pages/Category'
import Products from './Pages/Products'
import FilterProduct from './Pages/FilterProduct'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/products' element={<Products/>}/>
        {/* myfragrance then calling name also shuld b same */}
        <Route path='/Fragrances-product/:myfragrance' element={<FilterProduct/>}/>


      </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
