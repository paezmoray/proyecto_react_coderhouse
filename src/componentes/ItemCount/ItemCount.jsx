import './ItemCount.css'
import { useState, useEffect } from "react"

const ItemCount = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        console.log(`Agregado ${contador} items`);
    }

    return (
        <div className='ItemCount'>
            <div className='Controlador'>
                <button className='boton' onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button className='boton' onClick={incrementar}> + </button>
            </div>
            <div>
                <button className='boton' onClick={agregarAlCarrito}> Agregar al Carrito </button>
            </div>
        </div>
    )
}

export default ItemCount