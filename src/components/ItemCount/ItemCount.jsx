import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1)

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    /* const agregarCarrito = () =>{
        onAdd(contador)
    } */

    return (
        <>
            <button className='btn btn-light' onClick={() => restar()}>-</button>
            {contador}
            <button className='btn btn-light' onClick={() => sumar()}>+</button>
            <button className='btn btn-success'>Agregar</button>
        </>
    );
}

export default ItemCount;
