let rusultadoutilidad;
calcularutilidad =function (ingresos,gastos) {
    
    rusultadoutilidad=ingresos-gastos;
}
ejecutarutilidad = function () {
    //recuperar ingresos como entero
    let cmpingresos;
    let ingresos;
    let ingresosentero;
    let cmpegresos;
    let egresos;
    let egresosentero;
    let cmputilidad;
    cmpingresos=document.getElementById("textingresos")
     ingresos=cmpingresos.value;
    ingresosentero=parseInt(ingresos);

    //recupera gastos
    cmpegresos=document.getElementById("textdescuento")
    egresos=cmpegresos.value;
    egresosentero=parseInt(egresos);
    //invoca a calcularutilidad
    calcularutilidad(ingresosentero,egresosentero);
    //mostrar en pantalla
    console.log("la utilidad es "+rusultadoutilidad);
    cmputilidad=document.getElementById("lbltotal")
    cmputilidad.innerText=rusultadoutilidad;

}