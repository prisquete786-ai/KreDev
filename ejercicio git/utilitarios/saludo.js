saludar = function () {
    //recuptar el valor de la caja de texto txtNombre
    let nombre = recuperarTexto("textNombre");
    //recuptar el valor de la caja de texto txtApellido
    let pellido = recuperarTexto("textApellido");
    console.log(nombre);

    let Edad = recuperarInt("textEdad");


    let Estatura = recuperarfloat("textEstatura");


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