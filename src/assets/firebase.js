import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, collection, doc, updateDoc, deleteDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "all-car-react.firebaseapp.com",
  projectId: "all-car-react",
  storageBucket: "all-car-react.appspot.com",
  messagingSenderId: "800965107882",
  appId: "1:800965107882:web:1262fb20db453d700a30d3"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore()
const crearDatabase = async () => {
    const promise = await fetch('./database/stock.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(database, "vehiculos"), {
            marca : prod.marca,
            modelo : prod.modelo,
            precio : prod.precio,
            stock : prod.stock,
            imagen : prod.imagen
        })
    })
}

const consultarDataBase = async() => {
    const productos = await getDocs(collection(database, "vehiculos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id : prod.id}
    })
    return items
}

const getProducto = async (id) =>{
    const producto = await getDoc(doc(database, "vehiculos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

const updateProducto = async (id, info) =>{
    const estado = await updateDoc(doc(database, "vehiculos", id), info)
    return estado
}

const deleleteProducto = async (id) =>{
    const estado = await deleteDoc(doc(database, "vehiculos", id))
    return estado
}

const createOrdenCompra = async(client, precioTotal, fecha) =>{
    const ordenCompra = await addDoc(collection(database, "ordenCompra"), {
        nombre: client.nombre,
        apellido: client.apellido,
        email: client.email,
        dni: client.dni,
        telefono: client.telefono,
        direccion: client.direccion,
        fecha: fecha,
        precioTotal: precioTotal
    })
    return ordenCompra
}

const getOrdenCompra = async (id) =>{
    const ordenCompra = await getDoc(doc(database, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}

export {crearDatabase, consultarDataBase, getProducto, updateProducto, deleleteProducto, createOrdenCompra, getOrdenCompra}