import PropTypes from "prop-types";

const ItemDetail = ({item}) => {
if(!item){
    
    return null;
}

    return(
        <div>
<h1>{item.name}</h1>
<h2>${item.precio}</h2>

        </div>
    )
}

export default ItemDetail