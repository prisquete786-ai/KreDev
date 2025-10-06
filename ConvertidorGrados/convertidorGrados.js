//Crear una funcion llamada convertirCelsiusAFarenheit 
//que reciba como parámetro la temperatura en grados celsius
//y RETORNE la temperatura en grados farenheit

convertirCelsiusAFarenheit = function (gradosCelsius) {
   let temperatura;
   let temperaturafloat;
   temperatura = (gradosCelsius * 9 / 5) + 32;

   temperaturafloat = parseFloat(temperatura.toFixed(2));
   return temperaturafloat;

}

mostrarConvercion = function () {
   let cmpvalor;
   let celsius;
   let resultado;
   let comvertidor;
   cmpvalor = document.getElementById("cc");
   celsius = cmpvalor.value;
   comvertidor = convertirCelsiusAFarenheit(celsius);
   resultado = document.getElementById("lblFarenheit");
   resultado.textContent = comvertidor.toFixed(2);

   console.log("estamos en esta funcion")
}

reiniciar = function () {
   document.getElementById("cc").value = "";
   document.getElementById("pensando.jpg").scr = "ok.jpg";
}

