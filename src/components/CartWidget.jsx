const CartWidget = () => {
return(

    <button className="btn btn-success position-relative">
        <i className="bi bi-cart4"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    2 
    </span>
        </button>
)
}

export default CartWidget;