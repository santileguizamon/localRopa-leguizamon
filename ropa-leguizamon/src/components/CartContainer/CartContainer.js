import React,{useContext} from 'React'
import { CartContext } from '../../context/CartContext'

export const CartContainer = () => {
    const {productCartList,removeItem} = useContext(CartContext)
  return (
    <div>
        CartContainer
        <div>
            {productCartList.map(item=>(
                <>
                <p>{item.item} - {item.quantity}</p>
                <button onClick={()=>removeItem(item.id)}>eliminar</button>
                </>
            
            ))}
        </div>
    </div>
  )
}

export default CartContainer