import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../ItemListContainer/data"
import { getItem } from "../ItemListContainer/data";
import { useParams } from "react-router-dom"
import { getItem } from "../ItemListContainer/data";
import { collection } from "firebase/firestore";
import { db } from "../../../utils/firebase";

const ItemDetailContainer = () => {
  const { prodId } = useParams();

  const [item, setItem] = useState([]);

  const getItem = (id) => {
    return new Promise((resolve, reject) => {
      const buscador = db.find(el => el.id == parseInt(id))
    })

  }
  useEffect(() => {
    const queryRef = query(collection(db, "items"), where("nombre", "==", []))
    const response = await getDocs(queryRef);
    const productos = response.docs.map(doc => {
      const newProd = { ...doc.data(), id: doc.id }
    });
        return newProd
   ,
    
    getProducto()
  
    [prodId]

  return (
    <ItemDetail {...item} />
  )
  )}

getData();





export default ItemDetailContainer