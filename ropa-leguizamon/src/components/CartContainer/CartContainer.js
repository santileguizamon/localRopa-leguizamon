import React,{useContext, useState} from 'React'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount';

export const CartContainer = () => {
    const {productCartList,removeItem} = useContext(CartContext);
    const {prods, setProds} = useState(ItemDetailContainer);
    const noItems = () => {
    const [noHay, setNoHay] = useState(true);
    const total = () => {
        {item} + {quantity} == total 
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
                <p>{total}</p>
                </>
            ))}
        </div>
    </div>
  )
}}


export default CartContainer