import "./Item.css";
import { Link } from "react-router-dom";
import "../ItemCount/ItemCount.css";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <article className='CardItem' style={{ width: '18rem' }}>
      <img src={img} alt={nombre} />
      <div>
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>Stock: {stock} </p>
        <p>ID: {id} </p>
        <Link to={`/item/${id}`} className='boton'> Ver detalles </Link>
      </div>
    </article>
  )
}

export default Item

