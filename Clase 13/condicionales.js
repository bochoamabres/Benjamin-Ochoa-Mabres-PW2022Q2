let edad = parseFloat(prompt("ingrese su edad: "))
console.log(typeof(edad))

function condicional(edad){
    if(edad > 18){
        alert("puede ingresar")
    }else{
        alert("No puede ingresar")
    }
}
condicional(edad)

if(true){
    console.log("Hola")
}

edad > 18 ? console.log("puede ingresar") : console.log("No puede ingresar")

function IMC(pesa,altura){
    let indiceMasaCorporal = peso / (altura**2)
    if(indiceMasaCorporal < 18.5){
        console.log("Su IMC es Peso inferior al normal")
    } else if(indiceMasaCorporal < 25){//elif 
    console.log("Su IMC es Normal")
}else if(indiceMasaCorporal< 30){
    console.log("Su IMC es superior añl normal")
}else{
    console.log("su IMC es Obesidad")
}
}
IMC (75,1.78)
//Arriba asumimos que el peso y altura son correctas

//switch case no se usa mucho
function queHagoDias(dia){
    switch(dia){
        case "Monday":
            console.log("Party (Lunes)")
            break;
        case "Tuesday":
            console.log("Party (Martes)")
            break;
        case "Saturday":
            console.log("Party(Sabado)")
            break;
        default:
            console.log("Error en el ingreso")
            break;
    }
}
/*
1) Dados 3 numeros por parametros, determinar cual es el mayor.
2) Dado un numero, determinar si es par o impar.
3) Dada una serie de 6 numeros, mostrar los que son pares y los que son impares (deben estar en dos arrays distintos)
4) dado un numero determinar si es primo o no
5) Dado un numero aleatorio, pedirle al usuario un numero, y decirle si es mayor o menor o adivino el numero
let numeroRandom = parseiNT ((Matg.random)*10)
Plus:
1) Dado una palabra calcular la cantidad de letras
*/
