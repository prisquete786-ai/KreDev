jugar = function () {
    let valoraraleatorio;
   
    valoraraleatorio = lanzarDados();
    cambiarTexto("lblNumero", valoraraleatorio);
    if (valoraraleatorio > 3) {
        console.log("es myor a 3");
        console.log("ganaste");
       }else{
        console.log("es meno a 3");
        console.log("estas de mas");
    }
}

//Crear una funcion llamada lazarDados
//No resibe parametro
//Retona un numero alertario entre 1 y 6
lanzarDados = function () {
    let aleatorio;
    let numeromultiplicado;
    aleatorio = Math.random();//entre 0 y 1
    numeromultiplicado = aleatorio * 6;


    let numeroEntero = parseInt(numeromultiplicado)//entre 0 y 5

    let valorDado = numeroEntero + 1;//entre 0 y 6 
    console.log(valorDado);

    return valorDado;
}
