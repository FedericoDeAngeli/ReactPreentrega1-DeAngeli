import { obtenerProducto } from "./services";
import ItemDetail from "./ItemDetail";
import { useState, useEffect} from "react";
import {useParams} from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        obtenerProducto(id).then((response)=>{
setItem(response);
        }).catch((error) =>{
            console.log(error)
           
              setItem(null);
        })
    }, [id]);
    
return <ItemDetail item={item}/>



}

export default ItemDetailContainer