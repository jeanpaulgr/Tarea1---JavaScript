
/*1. Escribir una función a la que se pasa como parámetro un número entero y 
devuelve como resultado un texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.*/
function getEntero(numero){
    
    var result = numero % 2

    if(result === 0){
        return "El número " + numero + " es Par";
    }else if (result === 1) {
        return "El número " + numero + " es Impar";
    }else{
        return "Caracter no válido";
    }
 
}

/*2. Según este string "abcdefghijklmnñopqrstuvwxyz", hacer una función que recibe 
un parámetro (un caracter), y la función me debe devolver en qué posición en la cadena 
del string se encuentra el caracter entregado como argumento:*/
function getPosicion(texto){
    var cadena = "abcdefghijklmnñopqrstuvwxyz";

    var result = cadena.indexOf(texto);

    if(result === -1){
        return "El caracter ingresado ("+texto+") no se encuentra en la cadena";
    }else{
        return "El caracter ingresado ("+texto+") se encuentra en la posición n° " + result;
    }

}


/*3. Hacer una función a la que le paso un precio, y este me devuelva el precio con 
impuesto de 0.19%. Si yo ingreso 1000 a la función, me debería retornar con el formato 
"El precio con impuesto es de 1190"*/
function getConImpuesto(valor){
    var result = (valor * 1.19);
        return "El precio con impuesto es de " + result;
   }

/*4. Hacer un closure con contexto de "una persona tira un dado". Es decir, 
yo le entrego un nombre, por ejemplo: 
var dadoJulio = nuevoDado('julio')

Y que la respuesta de dadoJulio() sea:

dadoJulio() -> "Julio tiró un dado y salió 6"
dadoJulio() -> "Julio tiró un dado y salió 3"
dadoJulio() -> "Julio tiró un dado y salió 5"

Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6).*/
function nuevoDado(nombre){
    return function (){
        var aleatorio = Math.round(Math.random() * (6 - 1) + 1);
        return nombre + " tiró un dado y salió " + aleatorio ; 
    }
}


//Ejecución Tarea 
var result;
// Punto 1
var numero = prompt("Ejercio 1: Introduce un número entero");
result = getEntero(numero);
console.log(result);
document.write(result);
document.write("<br>");

// Punto 2
var texto = prompt("Ejercio 2: Introduce un caracter");
result = getPosicion(texto);
console.log(result);
document.write(result);
document.write("<br>");

// Punto 3
var valor = prompt("Ejercio 3: Introduce un valor");
result = getConImpuesto(valor);
console.log(result);
document.write(result);
document.write("<br>");

// Punto 4
var nombre = prompt("Ejercio 4: ¿Quien Lanza el Dado?");
var tiro = nuevoDado(nombre);

//--> Lanzammiento 1
result = tiro();
console.log(result);
document.write(result);
document.write("<br>");
//--> Lanzammiento 2
result = tiro();
console.log(result);
document.write(result);
document.write("<br>");
//--> Lanzammiento 3
result = tiro();
console.log(result);
document.write(result);
document.write("<br>");

