import React, { useEffect, useState, useContext } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { CartContext } from './ShoppingCartContext';
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const { setCount } = useContext(CartContext);

    const getDocId = () => {
        const db = getFirestore();
        const itemDoc = doc(db, 'Sillas', `${id}`);

        getDoc(itemDoc).then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() });
                setCount(0);
            } else {
                console.log('No se encontró el producto');
            } 
        })
    }

    useEffect(() => {
        getDocId(id);
    }, [id]);

    return (
        <Flex flex="1" alignItems='center' flexDirection='row' className='conteiner__itemdetail'>
            <ItemDetail product={product} id={id}/>
        </Flex>
    );
};

export default ItemDetailContainer;



