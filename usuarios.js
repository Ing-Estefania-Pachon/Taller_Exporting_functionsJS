import promptSync from "prompt-sync";
const prompt = promptSync();

// ! Ejercicio 4: Gestión de Usuarios
// Crea un archivo usuarios.js:
//  Debes implementar una función llamada crearUsuario que:
//  1.Reciba dos parámetros:
//  •nombre (string): Nombre del usuario.
//  •rol (string): Rol del usuario (debe ser "admin" o "cliente").
//  2.Retorne un objeto con:
//  •nombre: El nombre recibido.
//  •rol: El rol recibido.
//  •fechaRegistro: Fecha actual en formato local ("16/7/2025")

import { ROLES } from "./usuariosConstantes.js";

export function crearUsuario(){
    console.log("*************************");
    console.log("   CREACIÓN DE USUARIO");
    console.log("*************************");
    
    let nombre = prompt("Ingrese su nombre de usuario: ");

    while (true){
        let rol = prompt("Ingrese su rol (Debes escribir admin o cliente): ").toLocaleLowerCase();

        if (rol === ROLES.ADMIN || rol === ROLES.CLIENTE){
            const fechaHoy = new Date().toLocaleDateString('es-CO');
            
            const usuario = {
                nombre: nombre,
                rol: rol,
                fechaRegistro: fechaHoy
            };

            console.log("Usuario creado:", usuario);
            return usuario; 
        }else{
            console.log("El rol es invalido. Intentalo de nuevo ")
        }

    }

}


