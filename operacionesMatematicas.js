import promptSync from "prompt-sync";
const prompt = promptSync();

// ! Ejercicio 2: Exportar Funciones Matemáticas
//  1. En operacionesMatematicas.js, exportar:
//  - sumar(a, b)
export function sumar(){
    console.log("                          ");
    console.log("SUMAR");
    
    let num1 = Number(prompt("Ingrese el primer número: "));
    let num2 = Number(prompt("Ingrese el primer número: "));
    
    console.log("La suma entre ", num1, " y ",  num2)
    return num1 + num2
}
//  - restar(a, b)
export function restar(){
    console.log("                          ");
    console.log("RESTAR");
    
    let num1 = Number(prompt("Ingrese el primer número: "));
    let num2 = Number(prompt("Ingrese el primer número: "));
    
    console.log("La resta entre ", num1, " y ",  num2)
    return num1 - num2;
}
//  - multiplicar(a, b)
export function multiplicar(){
    console.log("                          ");
    console.log("MULTIPLICAR");
    
    let num1 = Number(prompt("Ingrese el primer número: "));
    let num2 = Number(prompt("Ingrese el primer número: "));
    
    console.log("La multiplicación entre ", num1, " y ",  num2)
    return num1 * num2;
}
//  - areaCirculo(radio) (usar PI importado)
import {PI} from './constantes.js'

export function areaCirculo2(){
    console.log("                          ");
    console.log("ÁREA DEL CÍRCULO");
    
    let radio = Number(prompt("Ingrese el radio del círculo: "));
    let areaCirculo = PI * (radio) ** 2; 
    
    console.log("El área del círculo es: ", areaCirculo)
}

// ! Ejercicio 3: Calculadora de Impuestos
//  2. En operaciones-matematicas.js, exportar:
import {IVA, DESCUENTO} from './constantes.js'
import { DESCUENTO_ADMIN } from "./usuariosConstantes.js";

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
    //  - calcularTotal(precio, cantidad)
    calcularTotal(){
        console.log("\nPRECIO TOTAL");
        console.log("--------------------------");

    
        let precioTotal = this.precio * this.cantidad;
        console.log("   El precio de su compra es: ", precioTotal)
        return precioTotal
    }
    //  - aplicarImpuestos(total) (usar IVA)
    aplicarImpuestos(){
        console.log("\nCALCULAR IMPUESTOS");
        console.log("--------------------------");
       
        let precioTotal = this.precio * this.cantidad;
        let precioImpuesto = precioTotal - (DESCUENTO * precioTotal);
        console.log("   El precio con Impuestos es de: ", precioImpuesto)
        return precioImpuesto
    }
    //  - aplicarDescuento(total) (usar DESCUENTO)
    aplicarIVA(){
        console.log("\nCALCULAR IVA");
        console.log("--------------------------");

        let precioTotal = this.precio * this.cantidad;
        let precioIVA = precioTotal + (IVA * precioTotal);
        console.log("   El precio con IVA es de: ", precioIVA)
        return precioIVA
    }

}

// ! Ejercicio 5: Sistema de Descuentos por Rol
    //  Tareas:
    //  1.En operaciones-matematicas.js, exportar:
    //  •aplicarDescuentoPorRol(total, usuario) que:
    // *** NOTA: cree una subclase que herede lo de la calculadora 
export class CalculadoraPorRol extends CalculadoraImpuestos{
    constructor(usuario){
        super();
        this.usuario = usuario;
    }
    aplicarDescuentoPorRol(){
        console.log("\nCALCULAR DESCUENTO POR ROL");
        console.log("--------------------------");

        let descuentoRol = 0;

        if (this.usuario.rol === 'admin'){
            const total = this.calcularTotal();

            descuentoRol = total - (total * DESCUENTO_ADMIN);

            return descuentoRol
            
        }else{
            return descuentoRol
        }
    }
    ejecutarTodo() {
        console.log("*************************");
        console.log("CALCULADORA DE COMPRAS");
        console.log("*************************");

        this.precio = Number(prompt("Ingrese el precio del producto: "));
        this.cantidad = Number(prompt("Ingrese la cantidad de productos: "));

        // 1. Calcular subtotal
        const subtotal = this.calcularTotal();

        // 2. Aplicar IVA
        const totalConIVA = this.aplicarIVA(subtotal);

        // 3. Aplicar descuento por rol (reusando tu función)
        const totalFinal = this.aplicarDescuentoPorRol(totalConIVA);

        console.log("\nRESUMEN DE COMPRA")
        console.log("\nEl subtotal de la compra es: ", subtotal)
        console.log("\nEl precio con IVA es de: ", totalConIVA)
        console.log("\nEl precio con descuento es de: ", totalFinal)

    }

}
