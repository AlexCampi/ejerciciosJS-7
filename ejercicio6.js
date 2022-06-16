let num1 = parseInt(window.prompt("Dime un número"))
let num2 = parseInt(window.prompt("Dime otro número"))
do{
    window.alert(`El resultado de la división es ${division(num1,num2)}`)
    function division(arg1,arg2){
        return arg1/arg2
    }
    num1 = parseInt(window.prompt("Dime un número"))
    num2 = parseInt(window.prompt("Dime otro número"))
}while(num2!==0)