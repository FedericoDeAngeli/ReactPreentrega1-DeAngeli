import { obtenerProducto } from "./services";
import ItemDetail from "./ItemDetail";
import { useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import CartContext from "./CartContext";





const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState([true]);
    const {id} = useParams();
    const {addItem} = useContext(CartContext);

    useEffect(()=>{
      obtenerProducto(id).then((response) =>{
        setItem(response);
      }).catch(() =>{
        setItem(null);
      }).finally(()=>{
        setLoading(false);
      })
        
    }, [id]);
    
return  <ItemDetail item={item} loading = {loading} addItem={addItem}/>



}

export default ItemDetailContainer