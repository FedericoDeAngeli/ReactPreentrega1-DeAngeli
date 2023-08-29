import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<h1>
    <Link to="/">
    <img src="../img/elsembrador.jpg" alt="LogoElSembrador" className="nav-bar brand"/>
    </Link>
</h1>
<div className="collapse navbar-collapse">
<ul className="navbar-nav">
    <li className="nav-item">
        <NavLink to="/" className="nav-link me-auto ">Home</NavLink>
    </li>
    <li className="nav-item">
        <NavLink to="/category/cereales" className="nav-link me-auto">Cereales</NavLink>
    </li>
    <li className="nav-item">
        <NavLink to="/category/especias" className="nav-link me-auto">Especias</NavLink>
    </li>
    <li className="nav-item">
        <NavLink to="/category/balanceados" className="nav-link me-auto">Alimentos balanceados</NavLink>
    </li>
</ul>
</div>
<div>
    <CartWidget/>
</div>

</div>
</nav>
    )

}

export default NavBar;