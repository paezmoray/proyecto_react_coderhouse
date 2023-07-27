import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>
      <Link to="/cart">
        <img style={{ width: "2.5rem" }} src="./img/carrito.png" alt="Carrito de compras" />
        {
          cantidadTotal > 0 && <strong style={{ color: "white" }}> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget