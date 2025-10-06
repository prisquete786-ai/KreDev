//Crear una funcion llamada convertirEnPesosMx
//que reciba como parámetro el valor en dolares
//y RETORNE el equivalente en Pesos Mexicanos
convertirEnpesoMx = function (dolares) {
    let PesosMexicanos;
    PesosMexicanos = dolares + 18.68;
    return PesosMexicanos;
}

convertirEnPesosColombianos = function (dolares) {
    let pesosColombianos;
    pesosColombianos = dolares * 3989.81;
    return pesosColombianos;
}

convertirEuros = function (dolares) {
    let PesosMexicanos;
    PesosMexicanos = dolares * 0.85;
    return PesosMexicanos;

}


mostrarPesosMx = function () {
    let cmpvalor;
    let valor;
    let valorfloat;
    let valorPesosMexicanos;
    let cmpResultado;
    let cmpBandera;
    let cmpMoneda;
    let resultaFormateado;
    cmpvalor = document.getElementById("textvalor");
    valor = cmpvalor.value;
    valorfloat = parseFloat(valor);
    valorPesosMexicanos = convertirEnpesoMx(valorfloat);

    resultaFormateado = valorPesosMexicanos.toFixed(4);

    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML = "Pesos Mexicanos"

    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML = resultaFormateado;



    cmpBandera = document.getElementById("imgBandera");
    cmpBandera.src = "banderaMx.png";


}


convertirEnColombianos = function () {
    let cmpvalor;
    let valor;
    let valorfloat;
    let valorPesosColobianos;
    let cmpResultado;
    let cmpBandera;
    let cmpMoneda;
    let resultaFormateado;
    cmpvalor = document.getElementById("textvalor");
    valor = cmpvalor.value;
    valorfloat = parseFloat(valor);
    valorPesosColobianos = convertirEnPesosColombianos(4)



    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML = valorPesosColobianos;
    resultaFormateado = valorPesosColobianos.toFixed(4);

    cmpMoneda = document.getElementById("lblMoneda");
    lblMoneda.innerHTML = "Pesos Colombianos"

    cmpBandera = document.getElementById("imgBandera");
    cmpBandera.src = "banderaColombia.png";


}

convertirEnEuros = function () {
    let cmpvalor;
    let valor;
    let valorfloat;
    let valorPesosEueros;
    let cmpResultado;
    let cmpBandera;
    let cmpMoneda;
    let resultaFormateado;
    cmpvalor = document.getElementById("textvalor");
    valor = cmpvalor.value;
    valorfloat = parseFloat(valor);
    valorPesosEueros = convertirEuros(valorfloat);

    resultaFormateado = valorPesosEueros.toFixed(4)


    cmpResultado = document.getElementById("lblValor");
    

     cmpResultado.innerHTML = resultaFormateado;

    cmpBandera = document.getElementById("imgBandera");
    cmpBandera.src = "unionEuropea.jpg"
}



