/*
Nombre archivo: main.ts
Proposito: hacer pruebas con las clases del curso sobre TypeScript

Ultima modificación: Funciones con parametros REST, osea un arreglo
Autor: Stephen 
Fecha: 27/01/2020
Hora: 06:29 pm

*/

// Indicar un parametro obligatorio y un arreglo de parametros con logitud variada, pero el arreglo se convierte en opcional
function nombreCompleto( nombre: string, ...arregloParametros: string[]) : string
{    
    return nombre + ' ' + arregloParametros.join( " " );    
}// end nombreCompleto


let Juan: string = nombreCompleto( "Juan", "Aleman", "Bautista", "Alonso" );
let Jhon: string = nombreCompleto( "Jhon", "Smith", "Sanderson", "Prince" );

console.log(Juan);
console.log(Jhon);