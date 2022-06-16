let num = parseInt(window.prompt("Dime un número"))
factorial(num)
function factorial(arg1){
    let multiplicacion = 1
    for (let i = 1; i <=arg1; i++){
        multiplicacion*=i
    }
    window.alert(`El factorial de ${arg1} es ${multiplicacion}`)
}