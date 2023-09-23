import {useState, useContext} from "react";
import CartContext from "./CartContext";

const ItemCount = ({initial, stock, item}) =>{
    const [count, setCount] = useState (initial)
    const {addItem} = useContext(CartContext)

    
    const Incrementar = () =>{
        count <stock && setCount(count +1)
    }
    const Decrementar = () =>{
       count >initial && setCount(count - 1)
    }
    const addToCart = () =>{
        addItem (item, count);
        
    }
    return( <div>
        <button onClick={Incrementar}>+</button>
        <button>{count}</button>
        <button onClick={Decrementar}>-</button>
        <button onClick={addToCart}>Add</button>
        
    </div>

      
    )



}

export default ItemCount