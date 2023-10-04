import React from 'react'
import Navbar from './components/navbar'
import ItemListConteiner from './components/ItemListConteiner'



const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListConteiner greeting={"Bienvenido a mi E-commerce"} />

    </div>
  )
}

export default App