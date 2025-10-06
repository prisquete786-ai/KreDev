sumar = function (num1, num2, num3) {
    let resultado;
    resultado = num1 + num2 + num3;
    return resultado

}

obtenerInfo = function (nombre, apellido, profesion) {
    return nombre + " " + apellido + " - " + profesion;
}



mostrarResultado = function (sumando1, sumando2, resultado) {
    console.log("El resultado de sumar " + sumando1 + " + " + sumando2 + " es " + resultado)

}

hackearNasaEnPelicula = function () {
    console.log("Hackeando nasa 0%")
    console.log("Hackeando nasa 20%")
    console.log("Hackeando nasa 40%")
    console.log("Hackeando nasa 60%")
    console.log("Hackeando nasa 80%")
    console.log("Hackeando nasa 90%")
    console.log("Hackeando nasa 99%")
    console.log("La nasa ha sido hackeada")
}
calcularEdad = function (anioNacimiento) {
    let anioActual=new Date().getFullYear();
    return anioActual-anioNacimiento
}


calcularIVA = function(precioSinIva){
    let resultado;
    let iva ;
    iva = (precioSinIva * 12)/100;
    resultado = precioSinIva + iva;
    return resultado;
}

repasar = function () {
  console.log("Esta función fue creada solo para hacer un ejemplo de una función que no recibe nada y no retorna nada");
}

repasarMas = function () {
  return "En este punto debemos estar super claros en crear funciones";
}

llamarAtencion =function(nombredelapersona , mensaje){
    
    alert(nombredelapersona + " " + mensaje + " !!")
    return ("Lo mimsmo de la maetra en el alert")

}