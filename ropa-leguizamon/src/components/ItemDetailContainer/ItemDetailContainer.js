import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import {data} from "../ItemListContainer/data"
import { getItem } from "../ItemListContainer/data";
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const {prodId} = useParams ();

    const [item,setItem] = useState ([]);

    const getItem = (id) =>{
      return new Promise((resolve, reject) => {
        const producto = data.find(prod=>prod.id === parseInt(prodId));
        resolve(data[0])
      })
    }

useEffect(()=>{
  const getProducto = async()=>{
    const producto = await getItem (prodId)
    setItem(producto)
  }
    getProducto();
},[prodId]);
    
  return (
    <ItemDetail {...item}/>
  )

}


export default ItemDetailContainer