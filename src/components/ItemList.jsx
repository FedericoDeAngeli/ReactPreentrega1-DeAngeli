import propTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";


const ItemList = ({items, loading})=>{
return(
    <div className="p-3 mb-2 bg-warning">
     {loading && <h2>Cargando...</h2>}
        <ul className="row">
            {items.map((item) => (
                
                <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                    <div className= "card box-shadow rounded">
                    <Link to={`/item/${item.id}`}>
                        <img src={item.imgId} className="card-img-top img-thumbnail" alt="{item.title}" />
                    <h3 className="card-title text-dark">{item.title}</h3>
                    <p className="card-text text-dark">Precio: ${item.price}</p>  
                    <p className="card-text text-dark">Stock: {item.stock}</p>                  
                    </Link>
                 
                    </div>
                    </div>
            ))
            }
        </ul>

        


    </div>
)

}

ItemList.propTypes = {
    items: propTypes.array.isRequired
}

export default ItemList