import { Link } from "react-router-dom";
const Item = ({producto}) => {
    return (
      <div className="card cardProducto">
        <img src={`../imagenes/${producto.imagen}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{producto.marca}</h5>
          <p className="card-text">{producto.modelo}</p>
          <p className="card-text">${producto.precio}</p>
          <button className="btn btn-light"><Link className="nav-link" to={`/product/${producto.id}`}>Mostrar Auto</Link></button>
        </div>
      </div>
    );
}

export default Item;
