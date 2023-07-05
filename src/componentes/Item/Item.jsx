import "./Item.css"
import { Link } from "react-router-dom"
import React from 'react'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <article className='CardItem'>
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre} </h3>
      <p>Precio: {precio} </p>
      <p>ID: {id} </p>
      <Link to={`/item/${id}`}> Ver detalles </Link>
    </article>
  )
}

export default Item
