import propTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";

const ItemList = ({items})=>{
return(
    <div>
     
        <ul>
            {items.map((item) => (
                
                <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                    <Link to={`/item/${item.id}`}>
                        <img src={item.image} alt="{item.name}" />
                    <h3>{item.name}</h3>
                    <p>${item.precio}</p>
                    </Link>

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