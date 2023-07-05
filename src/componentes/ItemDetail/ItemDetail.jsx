import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse possimus, reprehenderit excepturi dignissimos eaque optio facere quam, ducimus debitis laborum deserunt dolore! Reprehenderit quibusdam minus magnam corrupti. Nemo, neque.</p>
        <img src={img} alt={nombre} />
        <ItemCount inicial={1} stock={10} />
    </div>
  )
}

export default ItemDetail