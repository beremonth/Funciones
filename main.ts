/*
Nombre archivo: main.ts
Proposito: hacer pruebas con las clases del curso sobre TypeScript

Ultima modificación: Funciones con parametros con valor por defecto en Typescript
Autor: Stephen 
Fecha: 26/01/2020
Hora: 03:29 pm

*/

// Indicar un valor de por defecto a un parametro, usamos el signo =, pero se convierte en opcional
function nombreCompleto( nombre: string, apellido?: string, capitalizar: boolean = false) : string
{    
    console.log("capitalizar: "+capitalizar);

    // caso donde el apellido Si se recibe 
    if( capitalizar )
    {
        return capitalizarPalabras(nombre)+' '+capitalizarPalabras(apellido);
    }

    // caso donde el apellido No se recibe 
    else
    {
        return nombre+ ' '+ apellido;
    }
    
}// end nombreCompleto

function capitalizarPalabras( palabra: string ): string
{
    let palabraTransformada: string; 
    palabraTransformada = palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
    
    return palabraTransformada;
} // end capitalizarPalabras

// indicamos que el argumento tendrá un valor diferte al que se inidicó en la función
let personaTransformada = nombreCompleto("juan", "dominguez", true);
let personaOriginal = nombreCompleto("juan", "dominguez");

console.log(personaTransformada);
console.log(personaOriginal);