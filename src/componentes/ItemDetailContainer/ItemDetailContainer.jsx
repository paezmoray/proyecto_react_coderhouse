import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "inventario", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data }
                setProductos(nuevoProducto);
            })
            .catch(error => console.log(error))
    }, [idItem])


    return (
        <div>
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer