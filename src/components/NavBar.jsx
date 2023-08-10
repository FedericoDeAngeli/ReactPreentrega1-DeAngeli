import CartWidget from "./CartWidget";
const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<h1>
    <img src="../img/elsembrador.jpg" alt="" className="nav-bar brand"/>
</h1>
<div className="collapse navbar-collapse">
<ul className="navbar-nav">
    <li className="nav-item">
        <a href="" className="nav-link me-auto ">Home</a>
    </li>
    <li className="nav-item">
        <a href="" className="nav-link me-auto">Cereales</a>
    </li>
    <li className="nav-item">
        <a href="" className="nav-link me-auto">Especias</a>
    </li>
    <li className="nav-item">
        <a href="" className="nav-link me-auto">Alimentos balanceados</a>
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