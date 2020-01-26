"use strict";
/*
Nombre archivo: main.ts
Proposito: hacer pruebas con las clases del curso sobre TypeScript

Ultima modificación: Funciones con parametros opcionales en Typescript
Autor: Stephen
Fecha: 26/01/2020
Hora: 02:43 pm

*/
// el signo ?, indica que parametro es opcional
function nombreCompleto(nombre, apellido) {
    // caso donde el apellido Si se recibe 
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    // caso donde el apellido No se recibe 
    else {
        return nombre;
    }
} // end nombreCompleto
var persona = nombreCompleto("Juan");
console.log(persona);
