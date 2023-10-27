import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>


            <Flex flex="1">
                <Box>
                    <Link to={"/"}>
                    {/* Brand */}
                    <h1>Rv Comers</h1>
                    </Link>
                </Box>

                <Spacer/>
                <Box>

                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <Link to={`/category/${"men's clothing"}`}>
                            <MenuItem>Men's Clothing</MenuItem>
                            </Link>
                            <Link to={`/category/${"women's clothing"}`}>
                            <MenuItem>Women's Clothing</MenuItem>
                            </Link>
                            <Link to={`/category/${"electronics"}`}>
                            <MenuItem>Electronics</MenuItem>
                            </Link>
                            <Link to={`/category/${"jewelery"}`}>                            
                            <MenuItem>Jewelry</MenuItem>    
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>

                <Spacer />
                <Box>

                    <Link to={"/Cart"}>
                    {/* Carrito */}
                    <CartWidget />
                    </Link>

                </Box>
            </Flex>








        </div>
    )
}

export default navbar