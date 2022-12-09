import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({producto}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../imagenes/${producto.imagen}`} alt="" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <h5 className="card-title">Marca: {producto.marca}</h5>
                <p className="card-text">Modelo: {producto.modelo}</p>
                <p className="card-text">Precio: ${producto.precio} USD</p>
                <p className="card-text">Stock: {producto.stock}</p>
                <ItemCount stock={producto.stock}/> <br/>
                <button className="btn btn-light">Comprar</button>
            </div>
        </div>
    );
}

export default ItemDetail;
