import propTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";

const ItemList = ({items})=>{
return(
    <div>
     
        <ul>
            {items.map((item) => (
                
                <li key={item.id}>
                    <Link to={`/item/${item.id}`}>
                    <h3>{item.name}</h3>
                    <p>${item.precio}</p>
                    </Link>

                </li>
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