import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProducto } from "../../assets/firebase";
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]); 
    const {id}= useParams();
    useEffect(() => {
        getProducto(id).then(prod => setProducto(prod))
    },[])
    return (
        <div className="card mb-3 container">
            <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
