import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "../ItemCount/ItemCount.css";


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> El carrito no tiene productos. </h2>
                <Link to="/" className='boton'> Ver productos </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} className='boton'>Vaciar Carrito</button>
            <Link to="/checkout" className='boton'>Finalizar Compra</Link>
        </div>
    )
}

export default Cart