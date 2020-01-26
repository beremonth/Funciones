/*
Nombre archivo: main.ts
Proposito: hacer pruebas con las clases del curso sobre TypeScript

Ultima modificación: Primera introduccion a las funciones en Typescript
Autor: Stephen 
Fecha: 26/01/2020
Hora: 08:48 am

*/

let heroe: string = "flash";

// TypeScript especifica el tipo de dato devuelto por la función
function imprimeHeroe(): string
{
    return heroe;
} // end imprimeHeroe

console.log( imprimeHeroe() );

// Se puede especificar el tipo de dato que se guardará en la variable activaBatisenal
let activaBatisenal = function(): string
{
    return "Batisenal activada"
} // end function anomina

console.log( activaBatisenal );