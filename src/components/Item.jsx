import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Item = ({ id, title, description, price, image, category }) => {

    return (
            <Card maxW='sm' className='div__item'>
                <CardBody>
                    <Image src={image} alt="imgsillas" />
                    <Stack mt='6' spacing='3'>
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
    )
}

export default Item