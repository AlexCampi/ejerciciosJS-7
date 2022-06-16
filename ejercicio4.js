let num1 = parseInt(window.prompt("Dime un número"))
let num2 = parseInt(window.prompt("Dime otro número"))
let resultado = suma(num1,num2)
console.log(`El resultado de la suma es ${resultado}`)
function suma(arg1, arg2){
    return arg1+arg2
}