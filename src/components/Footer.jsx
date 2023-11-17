import { Flex, Box, Spacer } from '@chakra-ui/react'
import React from 'react'
import wplogo from '../media/wplogo.png'

const Footer = () => {
    return (
        <Flex flex="1" alignItems='center' className='conteiner__footer'>
            <Box className='div__footer'>
                Rv Comers ®
                
            </Box>

            <Spacer/> 

            <Box>
                <a href="https://wa.me/5491158838259?text=I'm%20interested%20in%20your%20car%20for%20sale">
                    <img src={wplogo} alt='rvwplogo' className='wplogo__footer'></img>
                </a>
            </Box>
            
        </Flex>
    )
}

export default Footer