import { Link } from "react-router-dom";

const Marcas = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/AUDI"}>Audi</Link></li>
            <li><Link className="dropdown-item" to={"/category/BENTLEY"}>Bentley</Link></li>
            <li><Link className="dropdown-item" to={"/category/BMW"}>BMW</Link></li>
            <li><Link className="dropdown-item" to={"/category/FERRARI"}>Ferrari</Link></li>
            <li><Link className="dropdown-item" to={"/category/LEXUS"}>Lexus</Link></li>
            <li><Link className="dropdown-item" to={"/category/MCLAREN"}>McLaren</Link></li>
            <li><Link className="dropdown-item" to={"/category/MERCEDES BENZ"}>Mercedes Benz</Link></li>
            <li><Link className="dropdown-item" to={"/category/ROLLS ROYCE"}>Rolls Royce</Link></li>
          </ul>
        </li>
    );
}

export default Marcas;
