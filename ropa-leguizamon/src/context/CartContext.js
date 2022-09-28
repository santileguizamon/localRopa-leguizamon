import React, { useState } from 'react'
import { getDoc,query,collection } from 'firebase/firestore';

export const CartContext = React.createContext ();

export const CartProvider = ({children}) =>{
  const [productCartList,setProductCartList]= useState([]);
  

  const addProd = (item,quantity)=>{
    const newProd = {
      ...item,
      quantity
    }
    const newArray = [...productCartList];
    newArray.push(newProd);
    setProductCartList(newArray);
  }

  const removeItem=(itemId)=>{
    const newArray = productCartList.filter(product=>product.id !== itemId);
    setProductCartList(newArray)
  }

  const isInCart =(itemId)=>{
    if (addProd = true){const sameProd = productos.filter(prod=>prod.itemId === newArray)}
    else {setProductCartList(newArray)}
  }

  return(
    <CartContext.Provider value={{productCartList,addProd,removeItem,isInCart}}>
        {children}
    </CartContext.Provider>
  )
}
const getTotalPrice = () => {
  const totalPrice = productCartList.reduce((acc,item)=>acc + item.quantity,0);
  return totalPrice
}
const getTotalProducts = () => {
  const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity,0);
  return totalProducts
}

const guardarOrden =
  {buyer: {name:event.target[0].value, telefono:event.target[2].value, email:event.target[1].value},
  items: [...id,nombre,precio],
  const getTotalProducts : async()=>{
    const query = collection(db,"items");
    const response = await getDoc(query);
    const guardarOrden = response.doc.map(doc=>{
        const newOrdem = {...doc.collection(),id:doc.id}
    })
}


