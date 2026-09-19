let productos = [
    {
        id: 1,
        nombre: "Hamburguesa",
        precio: 80
    },
    {
        id: 2,
        nombre: "Pizza",
        precio: 120
    },
    {
        id: 3,
        nombre: "Refresco",
        precio: 30
    }
];

function agregarProducto(nombre, precio){

    let nuevoProcucto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio
    };
    productos.push(nuevoProducto);
    console.log("Producto agregago");
}

function editarProducto(id, nombre, precio){
    let producto = productos.find(function(producto)){
        return producto.id==id;
    });
    if(producto){
        producto.nombre = nombre;
        producto.precio = precio;
        console.log("Producto editado");
    }else{
    console.log("Producto no encontrado");
    }
}







