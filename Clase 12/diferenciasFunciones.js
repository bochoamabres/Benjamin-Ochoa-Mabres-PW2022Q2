function saludar(){
    console.log("hola")
}

saludar()//Permite que esto vaya antes (no importa orden)

let saludarFlecha = () => console.log("hola en flecha")

saludarFlecha()//no puede ir antes ya que es una variable (funcion flecha si o si abajo)

let sumarEnFlecha = (a,b) => {
    let c = a + b 
    return c 
}

let restar = (a,b) =>a-b
console.log(restar(10,5)) 