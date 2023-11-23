// Trabajo en equipo
// Carrito de productos 
// Carrito de compras con Array
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella
// o una letra
// ● Eliminar producto del carrito

/* crea un arrar de compras */

let carritoCompras = ["manzana","pera","anana","frutilla"];

console.log(carritoCompras);

/* Agregar producto al carrito con funciones */

function agregarProducto(producto){
    let resultado = carritoCompras.push(producto);
    return resultado;
}
agregarProducto("uva"); 
console.log("Agregamos Uva", carritoCompras)



delete carritoCompras [0]
console.log(carritoCompras)


/* Funcion listar carrito */
function listarProductos(){
    console.log("Productos en el carrito:");
    for(let i = 0; i < carritoCompras.length; i++) {
        console.log(i, "-", carritoCompras[i]);
    }
}listarProductos();

//Buscar un producto en el carrito 

let nombreABuscar = 'uva';
let indice = carritoCompras.indexOf(nombreABuscar);


if (indice !== -1) {
  console.log('El producto encontrado es:', nombreABuscar);
} else {
  console.log('No encontrado', nombreABuscar);
}


const filtrarProductos = (palabraClave) => {
    const resultado = carritoCompras.filter(producto =>
      producto.includes(palabraClave.toLowerCase())
    );
    return resultado;
  };
  
 
  const resultadoFiltrado = filtrarProductos("man");
  console.log("El producto filtrado es:", resultadoFiltrado);


