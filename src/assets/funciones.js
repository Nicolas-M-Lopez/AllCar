const consultarDB = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos;
}
export default consultarDB;