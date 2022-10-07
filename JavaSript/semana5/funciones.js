//! sintaxis: la forma de escrbir.

//function sumar
//scode global
//scode local.
function suma(a,b){
    //codigo
    let n1 = 10;
    let n2 = 20;
    console.log(n1+n2)
}
let n4 = 40;
//scode.


let nombre = "pepe";

//?Reconmendacion: los nombres de la funciones
//?deben ser verbos
function restar (n1, n2){

}
//!significa que cuando tengamos que ññamar la funcion
//!estar recibe 2 argumentos que son n1 y n2 llamar 
//!la funcion hace referencia a usar, por que 
//!uan funcion cuando es creado solo se ejcuta
//!cada que la llamemos

//! para usar la funcion solo debemos escribir
//!el nombre de esta
restar (10,50) // -40
restar (20,80) // -60
restar (120,30) // 90

function saludar (nombre){
    console.log("hola me llamo" + nombre); 
}
saludar ("pepe");
saludar ("juan")

//funciones que usan return

function entrarAFiesta(edad){
    //si es mayor a 18 podra entrar si no no
    //entra.
    let resultado = false;
    if (edad >= 18) {
        //*cuando se ejcuta la funcion termina
        resultado = true;
    }
    return resultado;
}

const validacionDeEdad = entrarAFiesta(16);
console.log("validacion de edad:",validacionDeEdad);
