saludar = function () {
    //recuptar el valor de la caja de texto txtNombre
    let nombre = recuperarTexto("textNombre");
    //recuptar el valor de la caja de texto txtApellido
    let apellido = recuperarTexto("textApellido");


    let Edad = recuperarInt("textEdad");


    let Estatura = recuperarfloat("textEstatura");


    let mensajeBienvenido = "Bienvenido" + nombre + " " + apellido;


    mostrarTrexto("lblResutado", mensajeBienvenido);


    mostrarImagen("imagenesSaludo", "./imagenes/40jt.gif");


    mostrarTrextoEnCaja("textNombre", "");
}

