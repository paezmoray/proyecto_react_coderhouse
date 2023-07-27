const misProductos = [
    {id:"1", nombre: "Remera mujer", precio: 5000, stock: 10, img: "../img/remeram.jpeg", idCat: "mujer"},
    {id:"2", nombre: "Short mujer", precio: 7000, stock: 5, img: "../img/shortm.jpeg", idCat: "mujer"},
    {id:"3", nombre: "Remera hombre", precio: 6000, stock: 10, img: "../img/remerah.jpeg", idCat: "hombre"},
    {id:"4", nombre: "Short hombre", precio: 8000, stock: 11, img: "../img/shorth.jpeg", idCat: "hombre"},
    {id:"5", nombre: "Remera Niña", precio: 2500, stock: 15, img: "../img/remerana.jpeg", idCat: "nenes"},
    {id:"6", nombre: "Remera Niño", precio: 2500, stock: 15, img: "../img/remerano.jpeg", idCat: "nenes"}
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