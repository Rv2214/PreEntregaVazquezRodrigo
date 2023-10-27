import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    getProducts();
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez, equivalente a componentDidMount en clases

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <Center p="1rem">
      <ItemList product={filteredProducts} />
    </Center>
  );
};

export default ItemListContainer;




{/*import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getProducts().then((p) => {
      setProducts(p);
      if (category) {
        const filtered = p.filter((product) => product.category === category);
        setFilteredProducts(filtered);
      }
    });
  }, []);

  return (
    <>
      <Center p="1rem">
        <ItemList product={category ? filteredProducts : products} />
      </Center>
    </>
  );
};*/}
{/**/}



  /*const productos = [

    { id: "1", name: "Producto A", description: "Descripcion del producto A", stock: 10 , price: 1500},

    { id: "2", name: "Producto B", description: "Descripcion del producto B", stock: 20 , price: 2500},

    { id: "3", name: "Producto C", description: "Descripcion del producto C", stock: 30 , price: 3500},

    { id: "4", name: "Producto D", description: "Descripcion del producto D", stock: 40 , price: 4500},
]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    }else {
      reject("No se encontraron productos")
    }
  })

  mostrarProductos 
    .then((resultado)=> {
      console.log(resultado);
    }).catch((error)=> {
      console.log(error);
    })



}*/