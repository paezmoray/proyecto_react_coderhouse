import"../ItemCount/ItemCount.css";
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {
  const [agregarCantidad, setAgregarCantidad] = useState (0);
  
  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p> <h4>Descripcion: </h4> {descripcion}  </p>
        <img src={img} alt={nombre} />
        {
          agregarCantidad > 0 ? (<Link to="/cart" className='boton'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
    </div>
  )
}

export default ItemDetail