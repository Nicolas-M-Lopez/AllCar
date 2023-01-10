import Item from "../Item/Item";
const ItemList = ({productList}) => {
    return (
        <div className="row">
            {productList.map(product => <Item key={product.id} producto={product}/>)}  
        </div>
    );
}

export default ItemList;
