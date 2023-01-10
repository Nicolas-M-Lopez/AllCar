import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { consultarDataBase, getProducto, updateProducto, deleleteProducto } from "../../assets/firebase";
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {marca} = useParams();
    useEffect(() => {
        if(marca){
            consultarDataBase().then(products => {
                const productList = products.filter(prod => prod.stock > 0).filter(prods => prods.marca === (marca))
                const productCard = ItemList({productList})
                setProductos(productCard)
                })
        } else{
            consultarDataBase().then(products => {
                const productList = products.filter(prod => prod.stock > 0)
                const productCard = ItemList({productList})
                setProductos(productCard)
                })
            }

        }, [marca]);
    
    return (
        <>
            <div className="container text-container">
                <div className="row">{productos}</div>
            </div>
            
        </>
    );
}

export default ItemListContainer;
