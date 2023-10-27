import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CounterComponent from './CounterComponent';

const ItemDetail = ({ product }) => {

    const { id } = useParams()
    
    const filteredProduct= product.filter((product) => product.id == id)  
    
    return (
        <>
            {
                filteredProduct.map((p)=>{
                    return(
                        <Card key={p.id} category={p.category} maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                <img src={p.image} alt="" />
                                <Heading size='md'>{p.title}</Heading>
                                <Text>
                                    {p.description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${p.price}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    
                                        <CounterComponent />
                                
                                    <Button variant='ghost' colorScheme='blue'>
                                        
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    )
                })
            }  

        </>
    )
}

export default ItemDetail