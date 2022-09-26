import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id,item,description,price,stock}) => {
  const {addProd} = useContext(CartContext);

  const [contador,setContador]=useState(0);

  const onAdd = (cantidad) =>{
    const [cantidad,setCantidad]=useState(setContador)
    console.log(`agregaste ${cantidad} productos al carrito`);
    setContador(cantidad)
    addProd(item,cantidad)
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