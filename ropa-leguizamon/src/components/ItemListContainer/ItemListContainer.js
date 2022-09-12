import cartWidgets from "../CartWidgets/CartWidgets"
import  "../NavBar/style.css"
import ItemList from "../ItemList/ItemList";
import { useState,useEffect,} from "react";
import { getItems } from "./data";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemListContainer = ({greeting}) => {
    const[items,setItems]= useState([]);

    useEffect(()=>{
        getItems.then((productos)=>{setItems(productos)
        })
    },[]);

   return(
   <>
   <h1>{greeting}</h1>
    {
        items.length > 0?(<ItemList items={items}/>):(<div>Cargando.....</div>)
        
    }
    
    </>
    )
};

export default ItemListContainer;