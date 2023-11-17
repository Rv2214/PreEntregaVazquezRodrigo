import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import '../media/style.css'
import siyalogo from '../media/sillagif.gif'



const navbar = () => {
    return (
        <div className='div__navbar'>

            <Flex flex="1" alignItems='center'>
                <Box>
                    <Link to={"/"}>
                        <img src={siyalogo} alt="siyalogo" className='logo__navbar'/>
                    </Link>
                </Box>

                <Spacer/>

                <Box>
                    <Link to={"/"}>
                        <Button className='iniciobutton__navbar'>
                            Inicio
                        </Button>
                    </Link>    
                </Box>

                <Spacer/>

                <Box>    
                    <Menu>    
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className='menubutton__navbar'>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <Link to={`/category/${"hogar"}`}>
                            <MenuItem>Sillas de Hogar</MenuItem>
                            </Link>
                            <Link to={`/category/${"oficina"}`}>
                            <MenuItem>Sillas de Oficina</MenuItem>
                            </Link>
                            <Link to={`/category/${"gamer"}`}>
                            <MenuItem>Sillas gamer</MenuItem>
                            </Link>
                            <Link to={`/category/${"exterior"}`}>                            
                            <MenuItem>Sillas para exterior</MenuItem>    
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>

                <Spacer />

                <Box p={4} color='white'>
                    <Link to={"/Cart"}>
                    <CartWidget />
                    </Link>                
                </Box>
            </Flex>

        </div>
    )
}

export default navbar