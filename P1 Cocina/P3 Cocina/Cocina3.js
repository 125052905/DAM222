const readline = require("readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = [
    {
        id: 1,
        nombre: "Hamburguesa",
        precio: 80,
        categoria: "comida"
    },

    {
        id: 2,
        nombre: "Pizza",
        precio: 120,
        categoria: "comida"
    },

    {
        id: 3,
        nombre: "Refresco",
        precio: 30,
        categoria: "bebida"
    },

    {
        id: 4,
        nombre: "Pastel",
        precio: 60,
        categoria: "postre"
    },

    {
        id: 5,
        nombre: "Agua",
        precio: 20,
        categoria: "bebida"
    },

    {
        id: 6,
        nombre: "Helado",
        precio: 45,
        categoria: "postre"
    }
];

let pedidos = [];


function listarProductos() {

    console.log("");
    console.log(" PRODUCTOS DE COCINA ");

    productos.forEach(function(producto) {

        console.log(
            producto.id + ". " +
            producto.nombre + " : $" +
            producto.precio + " = " +
            producto.categoria
        );

    });
}


function buscarBaratos() {

    console.log("");
    console.log(" PRODUCTOS BARATOS ");

    let baratos = productos.filter(function(producto) {
        return producto.precio <= 60;
    });

    baratos.forEach(function(producto) {
        console.log(producto.nombre + " - $" + producto.precio);
    });
}


function buscarCaros() {

    console.log("");
    console.log(" PRODUCTOS CAROS ");

    let caros = productos.filter(function(producto) {
        return producto.precio > 60;
    });

    caros.forEach(function(producto) {
        console.log(producto.nombre + " - $" + producto.precio);
    });
}


function buscarBebidas() {

    console.log("");
    console.log(" BEBIDAS ");

    let bebidas = productos.filter(function(producto) {
        return producto.categoria == "bebida";
    });

    bebidas.forEach(function(producto) {
        console.log(producto.nombre + " - $" + producto.precio);
    });
}


function buscarPostres() {

    console.log("");
    console.log(" POSTRES ");

    let postres = productos.filter(function(producto) {
        return producto.categoria == "postre";
    });

    postres.forEach(function(producto) {
        console.log(producto.nombre + " - $" + producto.precio);
    });
}


async function buscarProducto() {

    let id = await rl.question("\nEscribe el ID del producto: ");

    let producto = productos.find(function(producto) {
        return producto.id == id;
    });

    if (producto) {

        console.log("");
        console.log("Producto encontrado:");
        console.log("ID:", producto.id);
        console.log("Nombre:", producto.nombre);
        console.log("Precio: $", producto.precio);
        console.log("Categoría:", producto.categoria);

    } else {

        console.log("Producto no encontrado.");

    }
}


function prepararPedido(pedido) {

    return new Promise(function(resolve, reject) {

        console.log("");
        console.log("Preparando pedido:", pedido.producto);

        setTimeout(function() {

            let faltaIngrediente = Math.random() < 0.3;

            if (faltaIngrediente) {

                reject("No hay ingredientes suficientes.");

            } else {

                resolve("Pedido preparado correctamente.");

            }

        }, 4000);

    });
}


async function procesarPedido() {

    let id = await rl.question("\nEscribe el ID del producto: ");
    let cantidad = await rl.question("Escribe la cantidad: ");

    let producto = productos.find(function(producto) {
        return producto.id == id;
    });

    if (producto) {

        let pedido = {
            producto: producto.nombre,
            cantidad: Number(cantidad),
            total: producto.precio * Number(cantidad)
        };

        pedidos.push(pedido);

        console.log("");
        console.log("Pedido recibido por cocina.");

        prepararPedido(pedido)
            .then(function(mensaje) {

                console.log(mensaje);

            })
            .catch(function(error) {

                console.log("Error:", error);

            });

    } else {

        console.log("Producto no encontrado.");

    }
}


function listarPedidos() {

    console.log("");
    console.log(" PEDIDOS ");

    if (pedidos.length == 0) {

        console.log("No hay pedidos.");

    } else {

        pedidos.forEach(function(pedido) {

            console.log(
                `${pedido.producto} x${pedido.cantidad} = $${pedido.total}`
            );

        });

    }
}


async function menu() {

    let opcion;

    do {

        console.log("");
        console.log(" COCINA ");
        console.log("1. Mostrar productos");
        console.log("2. Buscar productos baratos");
        console.log("3. Buscar productos caros");
        console.log("4. Buscar bebidas");
        console.log("5. Buscar postres");
        console.log("6. Buscar producto por ID");
        console.log("7. Preparar pedido");
        console.log("8. Listar pedidos");
        console.log("9. Salir");

        opcion = await rl.question("Elige una opción: ");

        if (opcion == "1") {

            listarProductos();

        } else if (opcion == "2") {

            buscarBaratos();

        } else if (opcion == "3") {

            buscarCaros();

        } else if (opcion == "4") {

            buscarBebidas();

        } else if (opcion == "5") {

            buscarPostres();

        } else if (opcion == "6") {

            await buscarProducto();

        } else if (opcion == "7") {

            await procesarPedido();

        } else if (opcion == "8") {

            listarPedidos();

        } else if (opcion == "9") {

            console.log("Saliendo del modulo Cocina. :)");

        } else {

            console.log("Opción no válida.");

        }

    } while (opcion != "9");

    rl.close();
}

menu();