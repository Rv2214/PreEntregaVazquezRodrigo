import React from 'react'
import Navbar from './components/navbar'
import ItemListConteiner from './components/ItemListConteiner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import ShoppingCartContext from './components/ShoppingCartContext'
import Footer from './components/Footer'



const App = () => {
  return (
    <BrowserRouter>

      <ShoppingCartContext>

        <Navbar />

      
        <Routes>
          <Route exact path='/' element={ <ItemListConteiner />} />
          <Route exact path='/Cart' element={ <Cart />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/category/:category' element={ <ItemListConteiner />} />
        </Routes>
      
      </ShoppingCartContext> 
      
      
      <Footer />

    </BrowserRouter>
  )
}

export default App