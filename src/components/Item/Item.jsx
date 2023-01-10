import { Link } from "react-router-dom";
const Item = ({producto}) => {
    return (
      <div className="card cardProducto col-6">
        <img src={producto.imagen} className="card-img-top" alt="auto" />
        <div className="card-body">
          <h5 className="card-title">{producto.marca}</h5>
          <p className="card-text">{producto.modelo}</p>
          <p className="card-text">${producto.precio} USD</p>
          <Link className="nav-link" to={`/product/${producto.id}`}><button className="btn btn-light">Mostrar Auto</button></Link>
        </div>
      </div>
    );
}

export default Item;
