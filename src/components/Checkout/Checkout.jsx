import React from "react";
import { useNavigate } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra,  getProducto, updateProducto } from "../../assets/firebase";
import { useCartContext } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const Checkout = () => {
    const initialValues={email: "", confirmacionEmail: "", nombre: "", apellido: "", dni: "", telefono: "", direccion: ""}
    const [formValues, setFormValues]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const {totalPrice, cart, emptyCart} = useCartContext()
    const datosForm = React.useRef()
    let navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            consultarForm();
        }
      }, [formErrors]);

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        e.target.reset()
    };

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }


    const validate = (values)=>{
        const errors ={};      
        
        if (values.confirmacionEmail !== values.email){
            errors.confirmacionEmail = "Los emails no coinciden";
            toast.error(`${errors.confirmacionEmail}`);
        }
        return errors
    }

    const consultarForm = (e) => {
        const dataform = new FormData(datosForm.current)
        const client = Object.fromEntries(dataform)
        const aux = [...cart]
        aux.forEach(prodCart => {
            getProducto(prodCart.id).then(prodDatabase => {
                if(prodDatabase.stock >= prodCart.cant) {
                    prodDatabase.stock -= prodCart.cant
                    updateProducto(prodCart.id, prodDatabase)                    
                } else {
                    toast.error(`El producto ${prodDatabase.nombreAMostrar} no hay mas stock`)                   
                    emptyCart()
                    navigate("/")                      
                }
            })            
        })

        delete client["confirmacionEmail"];

        createOrdenCompra(client,totalPrice(), new Date().toISOString().slice(0,10)).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por su compra, su orden es ${item.id}`)
                emptyCart()              
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no pudo ser generada con exito")
                console.error(error)
            })                 
        })
    }

    return (
        <div className="container">
            <form className="row g-3" onSubmit={handleSubmit} ref={datosForm}>
                <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" required pattern="[A-Za-z].{4,}"  value={formValues.nombre} onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" name="apellido" required pattern="[A-Za-z].{4,}"  value={formValues.apellido} onChange={handleChange}/>
                </div>
                <div className="col-6">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="id" className="form-control" name="dni" required pattern="[0-9]{8}" placeholder="Numero de documento sin guiones y sin puntos" value={formValues.dni} onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label">Numero de telefono</label>
                    <input type="tel" className="form-control" name="telefono" required pattern="[0-9]{10}" placeholder="Numero de telefono de 10 digitos" value={formValues.telefono} onChange={handleChange}/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formValues.email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="confirmarEmail" className="form-label">Confirmar Email</label>
                    <input type="email" className="form-control" name="confirmacionEmail" value={formValues.confirmacionEmail} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                </div>
                <div className="col-12">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" required pattern=".{8,}" value={formValues.direccion} onChange={handleChange}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success">Finalizar compra</button>
                </div>
            </form>
        </div>
    );
}

export default Checkout;

