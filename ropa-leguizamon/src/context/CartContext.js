import React, { useState } from 'react'

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