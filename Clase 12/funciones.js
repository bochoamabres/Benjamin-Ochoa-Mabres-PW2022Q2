function saludar(){
    console.log("Hola")
}//declaracion de una funcion

saludar()//invocacion de una funcion

function sumar(num1,num2){
    console.log(num1+num2)
}

sumar(1,2)

function restar(num1,num2){
    return num1 - num2
}
restar(10,5)

function mostrarPorConsola(string, dato){
    console.log(string + dato)
}

mostrarPorConsola("el resultado es:", restar(10,5))

mostrarPorConsola("el resultado es:", restar(18,5)) //callback

function multiplicar (a,b){
}

let sumarFlecha = (a,b) => a + b + 100;

mostrarPorConsola(sumarFlecha(1,2))

