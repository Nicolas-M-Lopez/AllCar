import {useState} from 'react';

const ItemCount = ({defaultStock, stock, onAdd}) => {
    const [contador, setContador] = useState(defaultStock)

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    const addCart = () => onAdd(contador)
    return (
        <>
            <button className='btn btn-info btn-sm botonCont' onClick={() => restar()}><i class="fa-solid fa-minus"></i></button>
            {contador}
            <button className='btn btn-info btn-sm botonCont ' onClick={() => sumar()}><i class="fa-solid fa-plus"></i></button>
            <button className='btn btn-success addCart' onClick={addCart}>Agregar</button>
        </>
    );
}

export default ItemCount;
