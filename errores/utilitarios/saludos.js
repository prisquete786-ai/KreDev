saludar = function () {
    // recuperar el valor de la caja de texto txtnombre
    let nombre = recuperartexto("txtnombre");
    // recuperar el valor de la caja de texto txtApellido
    let apellido = recuperartexto("txtApellido");

    let edad = recuperarint("txtedad");
    let estatura = recuperarfloat("txtestatura");

    let mensajeBienvenida = "Bienvenida " + nombre + " " + apellido;

    mostrartexto("lblresultado", mensajeBienvenida);
    mostrarimagen("imgSaludo", "./imagenes/40jt.gif");
    mostrartextoEncaja("txtnombre", "Hola " + nombre);
}

mostrarimagen = function (idcomponente, rutaimagen) {
    let componente = document.getElementById(idcomponente);
    componente.src = rutaimagen;
}

mostrartexto = function (idcomponente, mensaje) {
    let componente = document.getElementById(idcomponente);
    componente.innerText = mensaje;
}

mostrartextoEncaja = function (idcomponente, mensaje) {
    let componente = document.getElementById(idcomponente);
    componente.value = mensaje;
}

recuperartexto = function (idcomponente) {
    let componente = document.getElementById(idcomponente);
    let valoringresado = componente.value;
    return valoringresado;
}

recuperarint = function (idcomponente) {
    let valorcaja = recuperartexto(idcomponente);
    let valorEntero = parseInt(valorcaja);
    return valorEntero;
}

recuperarfloat = function (idcomponente) {
    let valorcaja = recuperartexto(idcomponente);
    let valorFlotante = parseFloat(valorcaja);
    return valorFlotante;
}