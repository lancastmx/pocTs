// Primitivos en TypeScript
var _a;
// 1. string: Representa una secuencia de caracteres (texto).
var nombre = "Angel";
var saludo = 'Hola';
var mensaje = "Bienvenido, ".concat(nombre, "!"); // Template literal
console.log('Que pedo Angel"'); // Salida: Que pedo Angel"
console.log("Que pedo ".concat(nombre)); // Salida: Que pedo Angel
// 2. number: Representa valores numéricos (enteros y de punto flotante).
var age = 32;
var pi = 3.14159;
var hex = 0xf00d; // Número hexadecimal
var binary = 10; // Número binario
var octal = 484; // Número octal
console.log("Edad: ".concat(age)); // Salida: Edad: 32
console.log("Pi: ".concat(pi)); // Salida: Pi: 3.14159
// 3. boolean: Representa valores lógicos, verdadero o falso.
var activo = true;
var isAdult = age >= 18;
console.log("Activo: ".concat(activo)); // Salida: Activo: true
console.log("\u00BFEs adulto? ".concat(isAdult)); // Salida: ¿Es adulto? true
// 4. null: Representa la ausencia intencional de un valor.
var nulo = null;
// Nota: Por defecto, null y undefined son subtipos de todos los demás tipos.
// Sin embargo, con la bandera --strictNullChecks activada (recomendado),
// null y undefined solo son asignables a sus propios tipos y a any.
console.log("Valor nulo: ".concat(nulo)); // Salida: Valor nulo: null
// 5. undefined: Representa un valor que no ha sido asignado.
var indefinido = undefined;
var variableSinValor; // Si no se inicializa, su valor es undefined
console.log("Valor indefinido: ".concat(indefinido)); // Salida: Valor indefinido: undefined
// console.log(`Variable sin valor: ${variableSinValor}`); // Esto daría error si strictNullChecks está activado
// 6. symbol (Introducido en ES6): Representa un valor único e inmutable.
// Se utiliza a menudo como clave de propiedades de objetos para evitar colisiones de nombres.
var simboloUnico = Symbol("descripcion");
var otroSimbolo = Symbol("descripcion");
console.log(simboloUnico === otroSimbolo); // Salida: false (son únicos)
var objetoConSimbolo = (_a = {},
    _a[simboloUnico] = "Valor asociado al símbolo",
    _a);
console.log(objetoConSimbolo[simboloUnico]); // Salida: Valor asociado al símbolo
// 7. bigint (Introducido en ES2020): Representa números enteros de longitud arbitraria.
// Se utiliza para trabajar con números que son demasiado grandes para el tipo number.
// let numeroGrande: bigint = 9007199254740991n;
var otroNumeroGrande = BigInt(100);
//console.log(`Número grande: ${numeroGrande}`); // Salida: Número grande: 9007199254740991n
console.log("Otro n\u00FAmero grande: ".concat(otroNumeroGrande)); // Salida: Otro número grande: 100n
// Tipos especiales (no estrictamente primitivos, pero importantes):
// 8. any: Desactiva la verificación de tipos. Se debe usar con precaución.
var flexible = "Puedo ser un string";
flexible = 32;
flexible = true;
console.log("Variable flexible: ".concat(flexible)); // Salida: true
// 9. unknown (Introducido en TypeScript 3.0): Similar a any, pero más seguro.
// Requiere una verificación de tipo antes de realizar operaciones en él.
var desconocido = "Inicialmente un string";
// console.log(desconocido.toUpperCase()); // Error: Object is of type 'unknown'.
if (typeof desconocido === 'string') {
    console.log(desconocido.toUpperCase()); // Seguro, ya se verificó el tipo
}
desconocido = 10;
// 10. void: Representa la ausencia de un valor de retorno en una función.
function saludar() {
    console.log("Hola!");
    // No retorna ningún valor
}
saludar(); // Salida: Hola!
// 11. never: Representa un valor que nunca ocurre.
// Se utiliza para funciones que siempre lanzan una excepción o entran en un bucle infinito.
function error(mensaje) {
    throw new Error(mensaje);
    // Nunca llega al final de la función
}
// function bucleInfinito(): never {
//   while (true) {}
//   // Nunca sale del bucle
// }
console.log('Holaprerros');
console.log('Esto es un prueba para saber si se estan pintanto los cuadritos de gitHub');
console.log('Hol 22/04/2025: No toque este curso');
// Clase 4 de 26 • Tipos especiales: any, unknown, never, void de TypeScript
function throwError(message) {
    throw new Error(message);
}
throwError("Esto es un error"); // Lanza un error y nunca retorna
