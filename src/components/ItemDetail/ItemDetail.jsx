import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { toast } from 'react-toastify';
const ItemDetail = ({producto}) => {
    const {addItem} = useCartContext()
    const onAdd = (contador) =>{
       addItem(producto, contador)
       toast.info(`Vehiculo agregado`) 
    }
    
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={producto.imagen} alt="auto" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <h5 className="card-title">Marca: {producto.marca}</h5>
                <p className="card-text">Modelo: {producto.modelo}</p>
                <p className="card-text">Precio: {producto.precio} USD</p>
                <p className="card-text">Stock: {producto.stock}</p>
                <ItemCount defaultStock={1} stock={producto.stock} onAdd={onAdd}/> 
                <Link to={'/cart'}><button className="btn btn-light cartView">Ver Carrito</button></Link>
            </div>
        </div>
    );
}

export default ItemDetail;
