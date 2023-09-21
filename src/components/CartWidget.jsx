import { useContext } from "react";
import CartContext from "./CartContext";
import ItemCount from "./ItemCount";
import { getCartQuantity } from "./utils";
import { Link } from "react-router-dom";

const CartWidget = () => {
const {cart} = useContext(CartContext);

const quantity = getCartQuantity(cart);
    return(
        <Link to="/checkout">
    <button className="btn btn-success position-relative">
        
        <i className="bi bi-cart4">
       
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {!!quantity && quantity} 
    </span>
    </i>
        </button>
        </Link>
        
)

}

export default CartWidget;