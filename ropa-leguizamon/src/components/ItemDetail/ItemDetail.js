import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,item,description,price,stock}) => {
  const onAdd = (cantidad) =>{
    console.log(`agregaste ${cantidad} productos al carrito`)
}
  return (
    <>
         <div>
        <h2>{item}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
    </div>
<ItemCount stock={10} initial={1} onAdd={onAdd} />
    </>
  )
}
export default ItemDetail