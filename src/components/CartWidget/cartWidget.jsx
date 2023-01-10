import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {getItemQuantity} = useCartContext()
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-link">
                <Link to={'/cart'}><i className="fa-solid fa-cart-shopping" ></i></Link>
                {getItemQuantity() > 0 && <span>{getItemQuantity()}</span>}
            </li>
        </ul>
    );
}

export default CartWidget;
