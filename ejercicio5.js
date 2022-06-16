let num1 = parseInt(window.prompt("Dime un número"))
let num2 = parseInt(window.prompt("Dime otro número"))
primerNumero(num1,num2)
? console.log("El primer número es más grande")
: console.log("El primer número no es más grande")
function primerNumero(arg1,arg2){
    return arg1>arg2
    ? true
    : false
}



