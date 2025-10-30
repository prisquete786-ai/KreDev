
mostrarImagenes = function (idComponente, rutaImagen) {
    let Componente;
    Componente = document.getElementById(idComponente);
    Componente.src = rutaImagen;

}


mostrarTrexto = function (idComponente, mesaje) {
    let Componente;
    Componente = document.getElementById(idComponente);
    Componente.innerText = mesaje;
}

mostrarTrextoEnCaja = function (idComponente, mesaje) {
    let Componente;
    Componente = document.getElementById(idComponente);
    Componente.value = mesaje;
}
recuperarTexto = function (idComponente) {
    let Componente;
    let valorIgresado;
    Componente = document.getElementById(idComponente);
    valorIgresado = Componente.value;
    return valorIgresado;
}

recuperarInt = function (idComponente) {
    let valorcaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorcaja);
    return valorEntero;

}


recuperarfloat = function (idComponente) {
    let valorcaja = recuperarTexto(idComponente);
    let valorflotante = parseFloat(valorcaja);
    return valorflotante;

}