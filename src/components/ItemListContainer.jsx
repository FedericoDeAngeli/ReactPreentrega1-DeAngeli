import styles from "./ItemListContainer.module.css";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { obtenerProductos } from "./services";


const ItemListContainer = () => {
const [items, setItems] = useState([])
const {categoryId} = useParams()

useEffect(() =>{
    obtenerProductos(categoryId)
    .then((response) => {
        setItems(response)
    })
}, [categoryId])

return(
<ItemList items={items}/>

)
}

export default ItemListContainer