import cart from '../../cart.ico';
import {getQuantity,getTotalProducts} from "../../context/CartContext"
import {ItemDetail} from "../ItemDetail"


    const CartWidgets = () =>{
        return(
       <CartWidgets>
            <img width={'3rem'} src={cart} alt= 'logo'  />{getTotalProducts > 0 ? quantity:0}
        </CartWidgets>
    )}    
 
        
export default CartWidgets;