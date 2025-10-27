saludar = function () {
//recuptar el valor de la caja de texto txtNombre
let nombre=recuperarTexto("textNombre");
//recuptar el valor de la caja de texto txtApellido
let pellido=recuperarTexto("textApellido")
console.log(nombre);
}

recuperarTexto = function (idComponente) {
    let Componente;
    let valorIgresado;
    Componente = document.getElementById(idComponente);
    valorIgresado = Componente.value;
    return valorIgresado;
}