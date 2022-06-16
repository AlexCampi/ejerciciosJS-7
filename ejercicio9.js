let num = parseInt(window.prompt("Dime un número"))
if(num>=0){
    longitud(num)
} else{
    window.alert("El número no puede ser negativo")
}
function longitud(arg1){
        arg1 = arg1.toString()
        window.alert(arg1.length)
}