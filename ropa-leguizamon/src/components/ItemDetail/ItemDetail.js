import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const ItemDetail = ({id,item,description,price,stock}) => {
  const {addProd} = useContext(CartContext);

  const [quantity,setQuantity] = useState(0);

  const onAdd = (quantity) =>{
    console.log(`agregaste ${quantity} productos al carrito`);
    setQuantity(quantity)
    addProd(item,cantidad)
  }
  

  return quantity > 0 ?
    
    <Link to={'/Cart'}>Terminar compra</Link>
      :
    <ItemCount stock={10} initial={1} onAdd={onAdd} />
    
}
export default ItemDetail