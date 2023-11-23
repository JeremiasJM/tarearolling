/* Hola */


function listarProductos(){
    console.log("Productos en el carrito:");
    for(let i = 0; i < carritoCompras.length; i++) {
        console.log(i, "-", carritoCompras[i]);
    }
}
    listarProductos();