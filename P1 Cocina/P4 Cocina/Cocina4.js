
let pedidoPrueba = {
    producto: "Hamburguesa",
    cantidad: 2,
    total: 160,
    estado: "Recibido"
};


function prepararPedido(pedido) {
    return new Promise(function(resolve, reject) {
        console.log("\n[COCINA] Recibió el pedido.");
        console.log("[COCINA] Preparando:", pedido.producto);

        setTimeout(function() {
            pedido.estado = "Preparando";
            console.log("Estado:", pedido.estado, "...");

            setTimeout(function() {
                
                let faltaIngrediente = Math.random() < 0.3; 

                if (faltaIngrediente) {
                    pedido.estado = "Cancelado";
              
                    reject("No hay suficientes ingredientes :("); 
                } else {
                    pedido.estado = "Empacando";
                    console.log("Estado:", pedido.estado, "...");

                    setTimeout(function() {
                        pedido.estado = "Listo";
            
                        resolve("Pedido listo para entregar :)"); 
                    }, 2000); 
                }
            }, 2000); 
        }, 2000); 
    });
}


function notificarCaja(mensaje, pedido) {
    return new Promise(function(resolve) {
        console.log("\n[SISTEMA] Enviando notificación a Caja...");
        
        setTimeout(function() {
            console.log("\n--- CAJA ---");
            console.log("Mensaje recibido:", mensaje);

            if (pedido.estado === "Listo") {
                pedido.estado = "Entregado";
                console.log("Actualización: Pedido entregado al cliente con éxito.");
            } else {
                console.log("Actualización: El pedido tuvo que ser cancelado.");
            }
            resolve();
        }, 1000);
    });
}


async function procesarPedidoIndividual() {
    console.log("Iniciando simulación del pedido...");
    
    try {
      
        let mensajeCocina = await prepararPedido(pedidoPrueba);
        
       
        await notificarCaja(mensajeCocina, pedidoPrueba);

    } catch (error) {
        
        await notificarCaja("Alerta: " + error, pedidoPrueba);
    }
    
    console.log("\nSimulación terminada.");
}


procesarPedidoIndividual();