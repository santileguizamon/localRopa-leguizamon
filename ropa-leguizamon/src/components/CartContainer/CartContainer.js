import React,{useContext, useState, createContext} from 'React'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount';
import {db} from "../../../utils/firebase";
import {collection,addDoc} from "firebase/firestore";
import { CartProvider } from '../../context/CartContext';

export const CartContainer = () => {
    const {productCartList,removeItem,getTotalPrice,clear} = useContext(CartContext);
    const {prods, setProds} = useState(ItemDetailContainer);
    const noItems = () => {
    const [noHay, setNoHay] = useState(true);
    const [idOrder,setIdOrder] = useState("")
   
    const sendOrden = (event)=>{
        event.preventDefault();
        const orden = {buyer: {name:event.target[0].value, telefono:event.target[2].value, email:event.target[1].value},
         items:productCartList, 
         total: getTotalPrice()};
        const queryRef = collection(db,"ordenes");
        addDoc(queryRef,orden).then(response=>{console.log("response",response)
        setIdOrder(response.id)
    })
    }
  return (
    <div>
        CartContainer
        <div>
            {productCartList.map(item=>(
                <>
                <p>{item.item} - {item.quantity}</p>
                <button onClick={()=>removeItem(item.id)}>eliminar</button> 
                {noHay? <h2>No hay productos seleccionados</h2> : productCartList}
                <button onClick={()=>setProds(ItemDetailContainer)}>Segui comprando!</button>
                <p>Precio Total:{getTotalPrice()}</p>
                <button onClick={emptyCart}>Vaciar carrito</button>
                <form onSubmit={sendOrden}>
                    <label>Nombre:</label>
                    <imput type="text"/>
                    <label>Email:</label>
                    <imput type="email"/>
                    <label>Telefono:</label>
                    <imput type="text"/>
                    <button type= 'submit'>Enviar orden</button>
                </form>
                {idOrder &&<p>Su numero de orden es:{idOrder}</p>}
                </>
            ))}
        </div>
    </div>
  )
}}


export default CartContainer