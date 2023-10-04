import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const navbar = () => {
    return (
        <div>


            <Flex>
                <Box>
                    {/* Brand */}
                    <h1>Rv Comers</h1>
                </Box>

                <Spacer/>
                <Box>

                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Categoria A</MenuItem>
                            <MenuItem>Categoria B</MenuItem>
                            <MenuItem>Categoria C</MenuItem>

                        </MenuList>
                    </Menu>
                </Box>

                <Spacer />
                <Box>
                    {/* Carrito */}
                    <CartWidget />
                </Box>
            </Flex>








        </div>
    )
}

export default navbar