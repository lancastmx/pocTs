// Primitivos en TypeScript

// 1. string: Representa una secuencia de caracteres (texto).
let nombre: string = "Angel";
let saludo: string = 'Hola';
let mensaje: string = `Bienvenido, ${nombre}!`; // Template literal

console.log('Que pedo Angel"'); // Salida: Que pedo Angel"
console.log(`Que pedo ${nombre}`); // Salida: Que pedo Angel

// 2. number: Representa valores numéricos (enteros y de punto flotante).
let age: number = 32;
let pi: number = 3.14159;
let hex: number = 0xf00d; // Número hexadecimal
let binary: number = 0b1010; // Número binario
let octal: number = 0o744; // Número octal

console.log(`Edad: ${age}`); // Salida: Edad: 32
console.log(`Pi: ${pi}`); // Salida: Pi: 3.14159

// 3. boolean: Representa valores lógicos, verdadero o falso.
let activo: boolean = true;
let isAdult: boolean = age >= 18;

console.log(`Activo: ${activo}`); // Salida: Activo: true
console.log(`¿Es adulto? ${isAdult}`); // Salida: ¿Es adulto? true

// 4. null: Representa la ausencia intencional de un valor.
let nulo: null = null;
// Nota: Por defecto, null y undefined son subtipos de todos los demás tipos.
// Sin embargo, con la bandera --strictNullChecks activada (recomendado),
// null y undefined solo son asignables a sus propios tipos y a any.

console.log(`Valor nulo: ${nulo}`); // Salida: Valor nulo: null

// 5. undefined: Representa un valor que no ha sido asignado.
let indefinido: undefined = undefined;
let variableSinValor: string; // Si no se inicializa, su valor es undefined

console.log(`Valor indefinido: ${indefinido}`); // Salida: Valor indefinido: undefined
// console.log(`Variable sin valor: ${variableSinValor}`); // Esto daría error si strictNullChecks está activado

// 6. symbol (Introducido en ES6): Representa un valor único e inmutable.
// Se utiliza a menudo como clave de propiedades de objetos para evitar colisiones de nombres.
const simboloUnico: symbol = Symbol("descripcion");
const otroSimbolo: symbol = Symbol("descripcion");

console.log(simboloUnico === otroSimbolo); // Salida: false (son únicos)

let objetoConSimbolo = {
  [simboloUnico]: "Valor asociado al símbolo"
};

console.log(objetoConSimbolo[simboloUnico]); // Salida: Valor asociado al símbolo

// 7. bigint (Introducido en ES2020): Representa números enteros de longitud arbitraria.
// Se utiliza para trabajar con números que son demasiado grandes para el tipo number.
// let numeroGrande: bigint = 9007199254740991n;
let otroNumeroGrande: bigint = BigInt(100);

//console.log(`Número grande: ${numeroGrande}`); // Salida: Número grande: 9007199254740991n
console.log(`Otro número grande: ${otroNumeroGrande}`); // Salida: Otro número grande: 100n

// Tipos especiales (no estrictamente primitivos, pero importantes):

// 8. any: Desactiva la verificación de tipos. Se debe usar con precaución.
let flexible: any = "Puedo ser un string";
flexible = 32;
flexible = true;

console.log(`Variable flexible: ${flexible}`); // Salida: true

// 9. unknown (Introducido en TypeScript 3.0): Similar a any, pero más seguro.
// Requiere una verificación de tipo antes de realizar operaciones en él.
let desconocido: unknown = "Inicialmente un string";

// console.log(desconocido.toUpperCase()); // Error: Object is of type 'unknown'.

if (typeof desconocido === 'string') {
  console.log(desconocido.toUpperCase()); // Seguro, ya se verificó el tipo
}

desconocido = 10;

// 10. void: Representa la ausencia de un valor de retorno en una función.
function saludar(): void {
  console.log("Hola!");
  // No retorna ningún valor
}

saludar(); // Salida: Hola!

// 11. never: Representa un valor que nunca ocurre.
// Se utiliza para funciones que siempre lanzan una excepción o entran en un bucle infinito.
function error(mensaje: string): never {
  throw new Error(mensaje);
  // Nunca llega al final de la función
}

// function bucleInfinito(): never {
//   while (true) {}
//   // Nunca sale del bucle
// }
console.log('Holaprerros')
console.log('Esto es un prueba para saber si se estan pintanto los cuadritos de gitHub')