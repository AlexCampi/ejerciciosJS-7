let num = parseInt(window.prompt("Dime un número"))
esPar(num)
function esPar(arg1){
    return arg1%2===0
    ? window.alert("El número introducido es par")
    : window.alert("El número introducido es impar")
}