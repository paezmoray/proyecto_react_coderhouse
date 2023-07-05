import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const funcion = idCategoria ? getProductosPorCategoria : getProductos;

        funcion(idCategoria)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.error(error))
    }, [idCategoria])

    return (
        <main>
            <h1 className='text-center m-3'> {greeting} </h1>
            <ItemList productos={productos} />
        </main>
    )
}

export default ItemListContainer