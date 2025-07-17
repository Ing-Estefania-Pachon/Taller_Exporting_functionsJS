//const propmt = require("prompt-sync")();

import promptSync from "prompt-sync";
const prompt = promptSync();

// ! Ejercicio 1: Archivo Constantes
// Tareas:
//  1. Importar PI e IVA en main.js
import { PI, IVA, DIAS_SEMANA} from './constantes.js'; 

//  2. Calcular y mostrar:
// - Área de círculo con radio 5 (PI * radio²)
function areaCirculo(){
    let radio = Number(prompt("Ingrese el radio del círculo: "));
    let areaCirculo = PI * (radio) ** 2; 
    console.log("El área del círculo es: ", areaCirculo);
}

// - Precio con IVA de producto que cuesta 100
function calcularPrecioIVA(){
    let precio = Number(prompt("Ingrese el precio del producto: "));
    let precioIVA = (precio * IVA) + precio;
    console.log("El precio del producto con IVA es: ", precioIVA);
}
//  3. Importar DIAS_SEMANA y mostrar el tercer día
function llamarDia(){
    let numero = Number(prompt("Ingrese un número del 0 al 6: "));
    console.log(DIAS_SEMANA[numero]);
}

//& Mostrar
// let circulo1 = areaCirculo();
// let producto1 = calcularPrecioIVA();
// let dia1 = llamarDia();

// ! Ejercicio 2: Exportar Funciones Matemáticas
//  Tareas:
//  1. Importar las 4 funciones en main.js
import {sumar, restar, multiplicar, areaCirculo2} from './operacionesMatematicas.js'

//&  2. Usar cada función con valores de ejemplo y mostrar resultado
// let suma1 = console.log("El resultado es: ", sumar());
// let resta1 = console.log("El resultado es: ", restar());
// let multi1 = console.log("El resultado es: ", multiplicar());
// let circulo2 = areaCirculo2();

// ! Ejercicio 3: Calculadora de Impuestos
//  •Calcular:
//  •Precio total de 3 productos.
//  •Aplicar impuestos al total.
//  •Aplicar descuento al total con impuestos.

import { CalculadoraImpuestos } from './operacionesMatematicas.js'

//&  •Mostrar todos los pasos intermedios y el resultado final.
// let producto2 = new CalculadoraImpuestos();
// producto2.calcularTotal();
// producto2.aplicarImpuestos();
// producto2.aplicarIVA()

// ! Ejercicio 4: Gestión de Usuarios
// •Importa ROLES, crearUsuario y esAdmin.
import { crearUsuario } from "./usuarios.js";

//  •Crea dos usuarios:
//  •Usuario 1: Nombre "Pedro", rol ROLES.ADMIN.
//  •Usuario 2: Nombre "Carlos", rol ROLES.CLIENTE.
//  •Muestra en consola:
// const usuario1 = crearUsuario();
// const usuario2 = crearUsuario();

// ! Ejercicio 5: Sistema de Descuentos por Rol

import { CalculadoraPorRol } from "./operacionesMatematicas.js";

const usuario1 = crearUsuario();

let calculadora1 = new CalculadoraPorRol(usuario1)
calculadora1.ejecutarTodo()
