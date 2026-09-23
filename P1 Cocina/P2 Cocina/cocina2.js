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
function listarProductos() {

    console.log("");
    console.log(" TODOS LOS PRODUCTOS ");

    productos.forEach(function(producto) {

        console.log(
            `${producto.id}. ${producto.nombre} - $${producto.precio}`
        );

    });
}

function buscarBaratos() {

    let baratos = productos.filter(function(producto) {

        return producto.precio < 60;

    });

    console.log("");
    console.log(" PRODUCTOS BARATOS ");

    baratos.forEach(function(producto) {

        console.log(
            `${producto.nombre} - $${producto.precio}`
        );

    });
}

function buscarCaros() {

    let caros = productos.filter(function(producto) {

        return producto.precio >= 60;

    });

    console.log("");
    console.log(" PRODUCTOS CAROS ");

    caros.forEach(function(producto) {

        console.log(
            `${producto.nombre} - $${producto.precio}`
        );

    });
}

function buscarBebidas() {

    let bebidas = productos.filter(function(producto) {

        return producto.categoria == "bebida";

    });

    console.log("");
    console.log(" BEBIDAS ");

    bebidas.forEach(function(producto) {

        console.log(
            `${producto.nombre} - $${producto.precio}`
        );

    });
}

function buscarPostres() {

    let postres = productos.filter(function(producto) {

        return producto.categoria == "postre";

    });

    console.log("");
    console.log("=== POSTRES ===");

    postres.forEach(function(producto) {

        console.log(
            `${producto.nombre} - $${producto.precio}`
        );

    });
}

async function buscarProducto() {

    listarProductos();

    let id = await rl.question("\nEscribe el ID del producto: ");

    let producto = productos.find(function(producto) {

        return producto.id == id;

    });

    if (producto) {

        console.log("");
        console.log("Producto encontrado.");
        console.log("Nombre:", producto.nombre);
        console.log("Precio: $", producto.precio);
        console.log("Categoria:", producto.categoria);

    } else {

        console.log("Producto no encontrado.");

    }
}


async function menu() {

    let opcion;

    do {

        console.log(`

          COCINA

1. Mostrar productos
2. Buscar productos baratos
3. Buscar productos caros
4. Buscar bebidas
5. Buscar postres
6. Buscar producto por ID
7. Salir

`);

        opcion = await rl.question("Elige una opción: ");


        if (opcion == "1") {

            listarProductos();

        }

        else if (opcion == "2") {

            buscarBaratos();

        }

        else if (opcion == "3") {

            buscarCaros();

        }

        else if (opcion == "4") {

            buscarBebidas();

        }

        else if (opcion == "5") {

            buscarPostres();

        }

        else if (opcion == "6") {

            await buscarProducto();

        }

        else if (opcion == "7") {

            console.log("Saliendo del modulo Cocina.");

        }

        else {

            console.log("Opción no válida.");

        }

    } while (opcion != "7");

    rl.close();
}
menu();
