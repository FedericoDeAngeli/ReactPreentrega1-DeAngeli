import PropTypes from "prop-types";
import ItemCount from "./ItemCount";


const ItemDetail = ({item, loading, addItem, addToCart}) => {
if(!item){
    {loading && <h2>Cargando...</h2>}
    
    return null;
}

    return(


        <div>
            
            <img src={item.imgId}  alt="{item.title}" />
            <h1>{item.title}</h1>
            <h2>Precio: ${item.price}</h2>
            <h3>Stock: {item.stock}</h3>
            <ItemCount/>
            <button onClick={()=> addItem(item, 1)}>Agregar al carrito</button>

        </div>
    )
}

ItemDetail.propTypes={
    item: PropTypes.object,
    loading: PropTypes.bool,
    addItem: PropTypes.func,
}

export default ItemDetail