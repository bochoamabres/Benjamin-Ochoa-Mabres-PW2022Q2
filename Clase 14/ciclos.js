//While - do while - for
//while va a repetirse la cantidad de veces que se cumpla una condicion
let numero = 0
let x = 11
while ( x < 10){
    console.log(numero)
    numero ++
    x++
    console.log(numero)
}

do{
    console.log("hola")
}while(x < 10);

// For (Vriable contadora ; Condicion ; Variacion)
    /* for ( let i = 0; i > 10; i++ ){
    console.log(i)
 } */

let nombre = "Esteban"
let frutas = ["manzana", "anana", "pera"]
for( let i = 0; i < nombre.length;i++){
    console.log(frutas[i])
}

let mail = "asd@asd.com"

for(let i = 0; i<mail.lenght; i++){
    if(mail[i]==="@"){
        return console.log("hay un arroba");
    }
}

let estudiantes = [
    {nombre:"valentin",apellido:"Beltramo",},{nombre:"valentina",apellido:"pardiñas",}, {nombre:"stefania",apellido:"ranucci",}
]
//JSON javasscript objecrt Notation

for (let i = 0 ; i < estudiantes.lenght;i++){
    console.log(estudiantes[i])
    console.log(estudiantes.nombre[i])
}

let frutas2 = ["manzana", "anana", "pera"]
console.log("---------------")
/* for(let fruta in fruta2){
    console.log(fruta)
} */

frutas2.forEach(feuta => console.log(fruta)) //mucho mas corto que linea 23

let notas = [1,2,3]
notas.forEach(nota=> console.log(nota+1))


/*
1) Mostrar los multiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 - 16 - 24,etc.
2)Confeccionar4 un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 terminos) Ejemplo: Si ingreso 3 debera aparecer en pantalla los valores 3, 6, 9 hasta el 36.
3)Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.
4)Validar si un string es un email.
A TENER EN CUENTA:
a) debe tener un @
b)no puede tener mas de un @
c)debe haber un punto luego del arroba
d)no debe haber caracteres especiales no validos (ñ,etc)

*/

