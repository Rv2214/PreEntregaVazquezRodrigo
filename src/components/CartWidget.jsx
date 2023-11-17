import React from 'react';
import { Badge } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { useContext } from 'react';
import { CartContext } from './ShoppingCartContext';
import '../media/style.css'


const CartWidget = () => {

    
    const { getTotalQuantity } = useContext(CartContext);

    return (
        <div className='div__cartwidget'>
            
            Carrito
            <FontAwesomeIcon icon={faCartShopping} />
            <Badge colorScheme='green'>{getTotalQuantity()}</Badge>
        </div>
    )
}

export default CartWidget