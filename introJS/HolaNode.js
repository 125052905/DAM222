
console.log("Hola Node.js");

let edad1 = 20;
let edad2 = 18;

console.log("Edad Promedio: ");
console.log((edad1 + edad2)/2);

/*Medir tiempo de un proceso*/

console.time("MiProceso");
for(let i =0; i< 10000000; i++){}
console.timeEnd("MiProceso");