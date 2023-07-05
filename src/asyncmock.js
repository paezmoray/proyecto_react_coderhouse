const misProductos = [
    {id:"1", nombre: "Remera mujer", precio: 5000, img: "../img/remeram.jpeg", idCat: "MUJER"},
    {id:"2", nombre: "Short mujer", precio: 7000, img: "../img/shortm.jpeg", idCat: "MUJER"},
    {id:"3", nombre: "Remera hombre", precio: 6000, img: "../img/remerah.jpeg", idCat: "HOMBRE"},
    {id:"4", nombre: "Short hombre", precio: 8000, img: "../img/shorth.jpeg", idCat: "HOMBRE"},
    {id:"5", nombre: "Remera Niña", precio: 2500, img: "../img/remerana.jpeg", idCat: "NENES"},
    {id:"6", nombre: "Remera Niño", precio: 2500, img: "../img/remerano.jpeg", idCat: "NENES"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(misProductos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout(() =>{
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}