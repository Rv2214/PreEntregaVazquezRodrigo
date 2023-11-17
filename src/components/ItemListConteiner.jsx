import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import '../media/style.css'

const ItemListContainer = () => {
  const { category, id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db  = getFirestore()

    const ItemsCollection = collection(db, "Sillas")

    getDocs(ItemsCollection).then((snapshot) =>{
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(docs);
    })

  }, [])

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : id
    ? products.filter(product => product.id === id)
    : products;

  return (
    <div className='div__itemlistconteiner'>
      <ItemList product={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;