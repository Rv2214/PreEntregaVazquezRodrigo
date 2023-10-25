import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ title, description, price, image, id, category }) => {

    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <img src={image} alt="" />
                        <Heading size='md'>{title}</Heading>
                        <Text>
                            {description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${price}  
                        </Text>
                        <Text>
                            {category}
                        </Text>
                        
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <Link to={`/product/${id}`} >
                                Ver detalle
                            </Link>
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item