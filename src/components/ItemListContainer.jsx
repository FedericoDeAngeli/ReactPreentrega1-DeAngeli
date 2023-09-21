import styles from "./ItemListContainer.module.css";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { obtenerProductos } from "./services";



const ItemListContainer = () => {
const [items, setItems] = useState([])
const [loading, setLoading] = useState([true])
const {categoryId} = useParams()


useEffect(() =>{
   obtenerProductos(categoryId).then((response)=>{
    setItems(response);
    setLoading(false);
   });
  
}, [categoryId])

return(
<ItemList items={items} loading={loading}/>

)
}

export default ItemListContainer