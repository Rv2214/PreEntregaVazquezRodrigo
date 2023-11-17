import React, { useContext } from 'react';
import { Card, CardBody, Stack, Heading, Box, Text, CardFooter, Button, CardHeader, StackDivider, Flex } from '@chakra-ui/react';
import { CartContext } from './ShoppingCartContext';
import { DeleteIcon } from '@chakra-ui/icons';
import SendOrders from './SendOrders';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotalPrice = (item) => {
    return item.quantity * item.product.price;
  };

  const calculateGrandTotal = () => {
    return cart.reduce((total, item) => total + calculateTotalPrice(item), 0);
  };

  return (
    <div>
      <Card>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
              <CardHeader>
                <Heading size='md'>
                  Producto: {item.product.title}
                  <Button 
                    colorScheme='red'
                    ml='2'
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='3'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      <p>Cantidad: </p>
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {item.quantity}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      <p>Descripcion: </p>
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {item.product.description}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      <p>Precio unitario: </p>
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      ${item.product.price}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      <p>Precio total: </p>
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      ${calculateTotalPrice(item)}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
              <hr />
            </div>
          ))
        ) : (
          <div className='div__carritovacio'>
            <Flex minWidth='max-content' alignItems='center' justifyContent='center' gap='2'>
              <Box p={6} >
                <Heading size='md'>El carrito está vacío...</Heading>
              </Box>
            </Flex>
          </div>
        )}

        {cart.length > 0 && (
          <CardFooter>
            <Heading size='lg'>Total: ${calculateGrandTotal()}</Heading>
          </CardFooter>
        )}
        <SendOrders cart={cart} calculateTotalPrice={calculateTotalPrice} calculateGrandTotal={calculateGrandTotal} />
      </Card>
      
    </div>
  );
}

export default Cart;