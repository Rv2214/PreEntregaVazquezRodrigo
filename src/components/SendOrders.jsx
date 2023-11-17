import { useState, useContext } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { CartContext } from './ShoppingCartContext'; 
import Swal from 'sweetalert2';
import React from 'react';

import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Heading,
    Divider,
    Flex,  
    Box,
} from '@chakra-ui/react'


const SendOrders = ({ cart, calculateTotalPrice, calculateGrandTotal }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState(null);

    const { setCount, getTotalQuantity, clearCart } = useContext(CartContext);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();
      // Verificar si el carrito está vacío
        if (cart.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Carrito Vacío',
            text: 'No puedes enviar una orden con el carrito vacío.',
        });
        return; // Salir de la función si el carrito está vacío
        }
        const order = {
            comprador: {
                nombre,
                apellido,
                email,
                },
            items: cart.map((item) => ({
                producto: item.product.title,
                cantidad: item.quantity,
                precioUnidad: item.product.price,
            precioTotal: calculateTotalPrice(item),
            })),
            totalCalculado: calculateGrandTotal(),
            };
            //ORDEN POR CONSOLA
        console.log('Orden a Firebase:', order);

        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id);
            setCount(0);
            getTotalQuantity(0);
            clearCart();
            setNombre('');
            setApellido('');
            setEmail('');
            Swal.fire({
                icon: 'success',
                title: '¡Gracias por su compra!',
                text: 'Su orden ha sido procesada con éxito.',
                html: `Su numero de orden es: ${id}`
            })
        })
        .catch((error) => {
            console.error('Error al enviar la orden:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al enviar la orden',
                text: 'Hubo un problema al procesar su orden. Por favor, inténtelo de nuevo.',
            });
        });
    };

    const ordersCollection = collection(db, 'MiOrden');

    return (
        <div>
            <Heading>Formulario de compra</Heading>
            <form action='' onSubmit={handleSubmit}>
                <Divider />
                <FormControl isRequired>
                    <FormLabel>Nombre:</FormLabel>
                    <Input type='text' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Apellido:</FormLabel>
                    <Input type='text' placeholder='Apellido' onChange={(e) => setApellido(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email:</FormLabel>    
                    <Input type='email' placeholder='Email@ejemplo.com' onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                
                <FormControl>
                    <FormLabel>
                        <Flex>
                            <Box p='2'>
                                <Button type='submit'>Enviar orden</Button>
                            </Box>
                        </Flex>
                    </FormLabel>
                </FormControl>
            </form>
            <FormLabel>
                Numero de orden: {orderId}
            </FormLabel>
        </div>
    );
};

export default SendOrders;
