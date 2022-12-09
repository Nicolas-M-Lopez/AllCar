import consultarDB from "../../assets/funciones";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]); 
    const {id}= useParams();
    useEffect(() => {
        consultarDB('../database/stock.json').then(productos =>{
            const prod = productos.find(product => product.id === parseInt(id))
            setProducto(prod)
        })
    })
    return (
        <div className="card mb-3 container">
            <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
