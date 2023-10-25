import React from 'react'
import ItemDetail from './ItemDetail'
import { useState } from 'react'
import { useEffect } from 'react'


const ItemDetailContainer = () => {

    const getProducts = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()

        return data
    }


    const [product, setProduct] = useState ([])
    console.log(product);

    useEffect(() =>{
    getProducts().then((p)=> setProduct(p))
    }, [])
    
    return (
    <>
        <ItemDetail 
        product={product} 
        />
    </>
    )
}

export default ItemDetailContainer