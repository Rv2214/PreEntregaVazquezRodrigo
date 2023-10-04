import React from 'react';
import { Badge } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 


const CartWidget = () => {
    return (
        <div>
            CartWidget
            <Badge colorScheme='green'>8</Badge>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    )
}

export default CartWidget