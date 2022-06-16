let euros = parseFloat(window.prompt("¿Cuántos euros quieres cambiar?"))
let moneda = (window.prompt("¿A qué moneda quieres hacer el cambio? L- Libras D- Dólares Y- Yenes")).toUpperCase()
cambio(euros,moneda)
function cambio(arg1,arg2){
    if(arg2==="L"){
        window.alert(`${arg1*0.86} libras son ${arg1}€`)
    } else if(arg2==="D"){
        window.alert(`${arg1*1.28611}$ son ${arg1}€`)
    } else if(arg2==="Y"){
        window.alert(`${arg1*129.852} yenes son ${arg1}€`)
    }
}