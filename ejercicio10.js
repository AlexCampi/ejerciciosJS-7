let forma = (window.prompt("Dime que quieres calcular")).toLowerCase()
if(forma==="círculo" || forma==="circulo"){
    let radio = parseInt(window.prompt("¿Cuánto mide su radio?"))
    areaCirculo(radio)
} else if(forma==="triángulo" || forma==="triangulo"){
    let base = parseInt(window.prompt("¿Cuánto mide su base?"))
    let altura = parseInt(window.prompt("¿Cuánto mide su altura?"))
    areaTriangulo(base,altura)
} else if(forma==="cuadrado"){
    let lado = parseInt(window.prompt("¿Cuánto mide su lado?"))
    areaCuadrado(lado)
}

function areaCirculo(arg1){
    window.alert(`El área del círculo es ${parseInt((arg1**2)*3.14159)}`)
}

function areaTriangulo(arg1,arg2){
    window.alert(`El área del triángulo es ${parseInt((arg1*arg2)/2)}`)
}

function areaCuadrado(arg1){
    window.alert(`El área del cuadrado es ${parseInt(arg1*arg1)}`)
}