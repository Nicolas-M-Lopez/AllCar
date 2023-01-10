import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
const Cart = () => {
const {cart, emptyCart, totalPrice, removeItem} = useCartContext()

    return (
        <>
            {cart.length === 0 ?
                <> 
                <h1 className="position-absolute top-50 start-50 translate-middle">El carrito se encuentra vacio =c</h1>
                <Link to={'/'}><button className="btn btn-light">Volver al home</button></Link> 
                </>
                :
                <div className="container cartContainer">
                    {
                        cart.map(prod => 
                            <div className="card mb-3" key={prod.id}>
                                <div className="row g-0">
                                    <div className="col-4">
                                        <img src={prod.imagen} alt="vehiculo" className="img-fluid rounded-start"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="cardBody">
                                            <h4 className="card-title">{`${prod.modelo} ${prod.marca}`}</h4>
                                            <p className="card-text">Cantidad: {prod.cant}</p>
                                            <p className="card-text">Valor de la unidad: {prod.precio}</p>
                                            <p className="card-text">Valor Total: {prod.precio * prod.cant} </p>
                                        </div>
                                        <button className="btn btn-outline-danger" onClick={() => removeItem(prod.id)}>Eliminar Vehiculo</button>
                                    </div>
                                </div>
                            </div>    
                            )
                    }
                    <div>
                        <p>Precio Total: ${totalPrice()} USD</p>
                        <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                        <Link to={'/checkout'}><button className="btn btn-success">Finalizar Compra</button></Link>
                        <Link to={'/'}><button className="btn btn-light">Continuar Comprando</button></Link> 
                    </div> 
                </div>
                 
            } 
        </>
    );
}

export default Cart;
