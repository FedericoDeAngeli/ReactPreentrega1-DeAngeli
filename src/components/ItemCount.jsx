import {useState} from "react";

const ItemCount = () =>{
    const [count, setCount] = useState (0)
    const [cart, setCart] = useState (0)
    
    const Incrementar = () =>{
        count <10 && setCount(count +1)
    }
    const Decrementar = () =>{
       count >0 && setCount(count - 1)
    }
    const addToCart = (event) =>{
        setCart(event.target.value)
        console.log(event.target.value)
        console.log(cart)
        
    }
    return(

        <div className="btn-group w-50">
            <button className="btn btn-outline-primary" onClick={Incrementar}>+</button>
            <h2 className="btn btn-outline-dark">{count}</h2>
            <button className="btn btn-outline-danger" onClick={Decrementar}>-</button>
            <button className="btn btn-outline-sucess" onClick={addToCart} value={count}>Add to cart</button>
        </div>
    )



}

export default ItemCount