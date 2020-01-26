/*
Nombre archivo: main.ts
Proposito: hacer pruebas con las clases del curso sobre TypeScript

Ultima modificación: Funciones con parametros obligatorios en Typescript
Autor: Stephen 
Fecha: 26/01/2020
Hora: 02:38 pm

*/

// aquí se indican que la función espera argumentos de tipo string y retornará un string    
function nombreCompleto( nombre: string, apellido: string) : string
{
    return nombre+' '+apellido;
}// end nombreCompleto

// los errores se detectan al llamar a la función, verificando el tipo de dato sea el correcto
let persona = nombreCompleto("Juan", "manuel");

console.log(persona);