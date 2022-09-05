import cartWidgets from "../CartWidgets/CartWidgets"
import style from "../NavBar/style.css"
import itemCount from "../Items/ItemCount";
import data from "./data";
import ItemList from "../ItemList/ItemList";
import { useState,useEffect } from "react";


const ItemListContainer = ({greeting}) => {
    const[items,setItems]= useState([]);

    const getData = new Promise((resolve,reject)=>{
         setTimeout(()=>{resolve(data)},2000)
    })

    useEffect(()=>{
        getData.then((result)=>{setItems(result)
        })
    },[]);

   return <><h1>{greeting}</h1>
    {
        items.length > 0?(<ItemList itemList={items}/>):(<div>Cargando.....</div>)
        
    }
    <itemCount stock={10} initial={1} onAdd={onAdd} /></>
};

export default ItemListContainer;