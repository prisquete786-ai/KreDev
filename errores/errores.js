sumar = function (valor1, valor2) {
    let resultado = parseInt(valor1) + parseInt(valor2);
    return resultado;
}
promediar = function (valor1, valor2) {
    let total = valor1 + valor2;
    let promedio = total / 2;
    return promedio;
}
probar = function () {
    let cmpValor1 = document.getElementById("txtVal1");
    valor1 = cmpValor1.value;
    let cmpValor2 = document.getElementById("txtVal2");
    valor2 = cmpValor2.value;
    let suma = sumar(valor1, valor2);
    let cmpSuma = document.getElementById("lblSuma");
    cmpSuma.innerText = suma;

}

mostrarpromedio = function () {
    let cmpValor1 = document.getElementById("txtVal1");
    valor1 = cmpValor1.value;
    let cmpValor2 = document.getElementById("txtVal2");
    valor2 = cmpValor2.value;
    let resultado;
    resultado = promediar(parseInt(valor1), parseInt(valor2));
    let cmpPromedio = document.getElementById("lblPromedio");
    cmpPromedio.innerText = resultado.toFixed(4);

}