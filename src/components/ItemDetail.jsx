import React, { useContext } from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Badge, Spacer, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { CartContext } from './ShoppingCartContext';
import Swal from 'sweetalert2';

const ItemDetail = ({ product }) => { 
    const {id} = useParams()
    const { count, increment, decrement, addToCart } = useContext(CartContext);
    
    const handleAddToCart = () => {
    addToCart(product.id, count); 
    Swal.fire(`Vas a agregar ${count} productos a tu carrito`);
    };

    if (!product) {
        return null; 
    }

    return (
        <>
                        <Card key={id} category={product.category} maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                <img src={product.image} alt="" />
                                <Heading size='md'>{product.title}</Heading>
                                <Text>
                                    {product.description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${product.price}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='1.5'>
                                    
                                        
                                        
                                    <Button variant='ghost' colorScheme='blue'>
                                        
                                    </Button>
                                </ButtonGroup>
                                <Box>
                                    <Button variant='outline' colorScheme='teal' onClick={decrement} m={.5}>
                                        <MinusIcon boxSize={2.5} />
                                    </Button>
                                    <Badge ml='2x1' fontSize='1.5rem' colorScheme='green' variant='outline' m={.5}>
                                        {count}
                                    </Badge>
                                    <Button variant='outline' colorScheme='teal' onClick={increment} m={.5}>
                                        <AddIcon boxSize={2.5} />
                                    </Button>
                                </Box>
                                <Spacer />
                                <Box m={1}>
                                    <Button onClick={handleAddToCart}>
                                        Agregar
                                    </Button>
                                </Box>
                            </CardFooter>
                        </Card>
        </>
    )
}

export default ItemDetail