import promptSync from "prompt-sync";
const prompt = promptSync();

// ! Ejercicio 2: Exportar Funciones Matemáticas
//  1. En operacionesMatematicas.js, exportar:
//  - sumar(a, b)
export function sumar(){
    console.log("SUMAR");
    
    let num1 = Number(prompt("Ingrese el primer número: "));
    let num2 = Number(prompt("Ingrese el primer número: "));
    
    console.log("La suma entre ", num1, " y ",  num2)
    return num1 + num2
}
//  - restar(a, b)
export function restar(){
    console.log("RESTAR");
    
    let num1 = Number(prompt("Ingrese el primer número: "));
    let num2 = Number(prompt("Ingrese el primer número: "));
    
    console.log("La resta entre ", num1, " y ",  num2)
    return num1 - num2;
}
//  - multiplicar(a, b)
export function multiplicar(){
    console.log("MULTIPLICAR");
    
    let num1 = Number(prompt("Ingrese el primer número: "));
    let num2 = Number(prompt("Ingrese el primer número: "));
    
    console.log("La multiplicación entre ", num1, " y ",  num2)
    return num1 * num2;
}
//  - areaCirculo(radio) (usar PI importado)
import {PI} from './constantes.js'

export function areaCirculo2(){
    console.log("ÁREA DEL CÍRCULO");
    
    let radio = Number(prompt("Ingrese el radio del círculo: "));
    let areaCirculo = PI * (radio) ** 2; 
    
    console.log("El área del círculo es: ", areaCirculo)
}

// ! Ejercicio 3: Calculadora de Impuestos
//  2. En operaciones-matematicas.js, exportar:
//  - calcularTotal(precio, cantidad)
//  - aplicarImpuestos(total) (usar IVA)
import {IVA, DESCUENTO} from './constantes.js'

export class CalculadoraImpuestos{
    constructor(precio, cantidad){
        this.precio = precio;
        this.cantidad = cantidad;

        console.log("*************************");
        console.log("CALCULADORA DE IMPUESTOS");
        console.log("*************************");

        this.precio = Number(prompt("Ingrese el precio del producto: "));
        this.cantidad = Number(prompt("Ingrese la cantidad de ese producto que va llevar: "));
    }
    calcularTotal(){
        console.log("                          ");
        console.log("PRECIO TOTAL");
        console.log("___________________________");

    
        let precioTotal = this.precio * this.cantidad;
        console.log("   El precio de su compra es: ", precioTotal)
    }
    aplicarImpuestos(){
        console.log("                          ");
        console.log("CALCULAR IMPUESTOS");
        console.log("___________________________");
       
        let precioTotal = this.precio * this.cantidad;
        let precioImpuesto = precioTotal - (DESCUENTO * precioTotal);
        console.log("   El precio de su compra es: ", precioImpuesto)
    }
    aplicarIVA(){
        console.log("                          ");
        console.log("CALCULAR IVA");
        console.log("___________________________");

        let precioTotal = this.precio * this.cantidad;
        let precioIVA = precioTotal + (IVA * precioTotal);
        console.log("   El precio de su compra es: ", precioIVA)
    }

}
//  - aplicarDescuento(total) (usar DESCUENTO)