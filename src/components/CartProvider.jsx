import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children}) =>{
const [cart, setCart] = useState([]);

const isInCart = (id) =>{
    const itemInCart= cart.find((item) => item.id === id);
    return !!itemInCart
}

const addItem = (product, quantity) => {
    const itemInCart = isInCart(product.id)

    if (itemInCart) {
        const newCart = cart.map((item) =>{
            if (item.id === product.id){ 
                return{
                    ...item,
                    quantity: item.quantity + quantity,
                }
            } return item;
        })
        setCart(newCart);
    }else {
        setCart([...cart, {...product, quantity}]);

    }
}

const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
}

const clearCart = () => {
    setCart([]);
}


return(
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart}}>{children}</CartContext.Provider>
)
}

export default CartProvider;