import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../ItemListContainer/data";

const ItemDetailContainer = () => {
    const [item,setItem] = useState ([]);


useEffect(()=>{
    getItem().then((result)=>{console.log(result)
    })
},[]);
    
  return (
    <ItemDetail {...item}/>
  )

}


export default ItemDetailContainer