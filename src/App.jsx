import React from 'react'
import Navbar from './components/navbar'
import ItemListConteiner from './components/ItemListConteiner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'





const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route exact path='/' element={ <ItemListConteiner />} />
          <Route exact path='/About' element={ <About />} /> 
          <Route exact path='/Cart' element={ <Cart />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/category/:category' element={ <ItemListConteiner />} />
          
        
      
        </Routes>
      
        
      </BrowserRouter>

      
    </div>

    
  )
}

export default App