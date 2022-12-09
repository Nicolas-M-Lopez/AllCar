import Marcas from "../Marcas/Marcas";
import { Link } from "react-router-dom";
const NavbarCollapse = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Home</Link>
                </li>
            <Marcas/>
            </ul>
        </div>
    );
}

export default NavbarCollapse;
