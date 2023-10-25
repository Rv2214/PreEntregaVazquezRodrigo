import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>


            <Flex>
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
                            <Link to={`/category/${"Men's Clothing"}`}>
                            <MenuItem>Men's Clothing</MenuItem>
                            </Link>
                            <Link to={`/category/${"Women's Clothing"}`}>
                            <MenuItem>Women's Clothing</MenuItem>
                            </Link>
                            <Link to={`/category/${"Electronics"}`}>
                            <MenuItem>Electronics</MenuItem>
                            </Link>
                            <Link to={`/category/${"Jewelry"}`}>                            
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