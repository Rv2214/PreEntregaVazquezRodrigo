import React from 'react'
import Item from './Item';

const ItemList = ({ product }) => {
    
    
    return (
        <div>
            {
                product.map((p)=>{
                    return(
                        <Item 
                            key={p.id}
                            id={p.id}
                            title={p.title}
                            description={p.description}
                            price={p.price}
                            image={p.image}
                            category={p.category}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList