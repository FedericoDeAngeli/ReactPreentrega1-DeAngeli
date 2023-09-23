
import { useContext, useState } from "react";
import CartContext from "./CartContext";
import { crearOrden } from "./services";
import { totalCart } from "./utils";
import { serverTimestamp } from "firebase/firestore";
import { itemInOrder } from "./utils";




const Checkout = () =>{
    const [orderId, setOrderId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
  
const {cart, clearCart} = useContext(CartContext);
const totalOrden = totalCart(cart);


const handleChange = (event) => {
const {name, value} = event.target;

    setFormData({
        ...formData,
        [name]: value,
    })
   
}

const handleCheckout = () =>{
    const order = {
        buyer: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
        },
    
        items: itemInOrder(cart),
        totalOrden,
        date: serverTimestamp(),
    }

    crearOrden(order).then((docRef)=>{
        setOrderId(docRef.id);
        clearCart();

    })
}


    return (
       <div>
        <h2>Checkout</h2>
       
        {orderId && <h3>Órden nro: {orderId}</h3>}
        {!orderId && (

            <>
             <h3>Datos del comprador</h3>
        <form action="">
            <div>
            <label htmlFor="name">Nombre: </label>
<input type="text" onChange={handleChange} name="name" id="name" value={formData.name}/>
           
            </div>
            <div>
            <label htmlFor="email">Email:
<input type="email"  onChange={handleChange} name="email" id="email" value={formData.email}/>
            </label>
            </div>
            <div>
            <label htmlFor="phone" >Nro de celular:
<input type="phone" onChange={handleChange} name="phone" id="phone" value={formData.phone} />
            </label>
            </div>
</form>

        <h3>Listado de productos</h3>
        <ul>
        {cart.map((item) =>(
            <li key={item.id}>
               <p>{item.title}</p>
               <p>Cantidad:{item.quantity}</p>
               <p>Precio: ${item.price}</p>
               <p>Subtotal: ${item.price*item.quantity}</p>
            </li>
        ))}
        </ul>
       <h3>Total de la compra: ${totalCart(cart)}</h3>
       <button onClick={   
        handleCheckout
       }>Finalizar compra</button>
       </>
       )}
       </div> 
    )
}

export default Checkout