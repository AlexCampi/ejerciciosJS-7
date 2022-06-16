let year = parseInt(window.prompt("Dime un año"))
bisiesto(year)
function bisiesto(arg1){
    if(arg1%4===0 || (arg1%100===0 && arg1%400===0)){
        window.alert(`El año ${arg1} es bisiesto`)
    } else{
        window.alert(`El año ${arg1} no es bisiesto`)
    }
}