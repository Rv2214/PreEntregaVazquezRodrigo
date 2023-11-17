import React, { createContext, useState} from 'react';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

export const CartContext = createContext(null);

const ShoppingCartContext = ({ children }) => {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);


    const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const clearCart = () => {
        setCart([]); 
    }


    const getProductDataById = async (productId) => {
        try {
        const productData = await getProductById(productId);
        return productData;
        } catch (error) {
            console.error('Error al obtener la información del producto:', error);
        return null;
        }
    };

    const increment = () => {
    setCount(count + 1);
    };

    const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
        }
    };

// AÑADIR AL CARRITO
    const addToCart = async (productId, quantity) => {
    const productData = await getProductDataById(productId);
    if (!productData) {
        return(
            'sin stock'
        )
    }
    const existingItemIndex = cart.findIndex((item) => item.product.id === productId);
    if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += quantity;
        setCart(updatedCart);
    } else {
        setCart([...cart, { product: { id: productId, ...productData }, quantity }]);
    }
    setCount(0); 
    };


    //REMOVER POR ID
    const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
    };


    //  datos del producto desde Firebase
    const getProductById = async (productId) => {
    const db = getFirestore();
    const itemDoc = doc(db, 'Sillas', `${productId}`);
    try {
        const snapshot = await getDoc(itemDoc);
        if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
        } else {
        console.log('No se encontró el producto');
        return null;
        }
    } catch (error) {
        console.error('Error al obtener el producto desde Firebase:', error);
        return null;
    }
    };

    return (
    <CartContext.Provider value={{ count, setCount, increment, decrement, cart, addToCart, removeFromCart, getTotalQuantity, clearCart}}>
        {children}
    </CartContext.Provider>
    );
};

export default ShoppingCartContext;
