import PropTypes from "prop-types";
import ItemCount from "./ItemCount";



const ItemDetail = ({item, loading, addItem}) => {
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
          <ItemCount initial={0} stock={item.stock} item={item}/>
           

        </div>
    )
}

ItemDetail.propTypes={
    item: PropTypes.object,
    loading: PropTypes.bool,
    addItem: PropTypes.func,
}

export default ItemDetail