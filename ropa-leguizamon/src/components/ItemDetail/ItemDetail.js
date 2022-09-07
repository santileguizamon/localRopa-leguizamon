import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemDetail = (item) => {
  return (
    <>
        {
        ItemDetailContainer.map(item =>(
            <ItemDetail key={item.detalleProd} nombre={item.nombre} descripcion={item.description} valor={item.price} stock={item.stock}/>
        ))
        }
    </>
  )
}

export default ItemDetail