import cartWidgets from "../CartWidgets/CartWidgets"
import  "../NavBar/style.css"
import ItemList from "../ItemList/ItemList";
import { useState,useEffect,} from "react";
import { getItems } from "./data";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"



const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams()
     
    const[items,setItems]= useState([]);

    useEffect(()=>{
        getItems.then((productos)=>{
            if (categoryId){const newProd = productos.filter(prod=>prod.item === categoryId)
            setItems(newProd)}
            else{
                setItems(productos)
            } 
        })
    },[categoryId]);

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