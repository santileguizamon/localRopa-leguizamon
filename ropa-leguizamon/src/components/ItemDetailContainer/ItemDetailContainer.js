import { useState,useEffect } from "react"
import data from "../ItemListContainer/data";


const ItemDetailContainer = () => {
    const [item,setItem] = useState ([]);

const getItem = new Promise((resolve, reject) => {
    setTimeout (()=>{resolve(data)})
})
useEffect(()=>{
    getData.then((result)=>{setItem(item,description,price,stock)
    })
},[]);
    
  return (
    <ItemList itemList={item}/>
  )

}


export default ItemDetailContainer