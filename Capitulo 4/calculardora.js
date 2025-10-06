sumar = function () {
   let cmpcaja1;
   let valor1;
   let cmpcaja2;
   let valor2;
   let valor1entero;
   let valor2entero;
   let resultado;
   let cmpresultado;
   //Recuperar el valor de la primera caja de texto
   cmpcaja1 = document.getElementById("txtvalor1");
   valor1 = cmpcaja1.value;

   //Recuperar el valor de la segunda caja de texto
   cmpcaja2 = document.getElementById("txtvalor2");
   valor2 = cmpcaja2.value;

   //Transformar valor en entero
   valor1entero = parseInt(valor1);
   valor2entero = parseInt(valor2);
   //Mostrar en pantalla.
   resultado = valor1entero + valor2entero;
   cmpresultado = document.getElementById("lblResultado");


   cmpresultado.innerText = "Resultado " + resultado;
}


resta = function () {
   let cmpcaja1;
   let valor1;
   let cmpcaja2;
   let valor2;
   let valor1entero;
   let valor2entero;
   let resultado;
   let cmpresultado;
   //Recuperar el valor de la primera caja de texto
   cmpcaja1 = document.getElementById("txtvalor1");
   valor1 = cmpcaja1.Value;

   //Recuperar el valor de la segunda caja de texto
   cmpcaja2 = document.getElementById("txtvalor2");
   valor2entero = cmpcaja2.Value;

   //4Transformar el valor1 en entero
   valor1entero = parseInt(valor1);
   valor2entero = parseInt(valor2);


   //resta a los dos valor
   resultado = valor1entero - valor2entero;
   cmpresultado = document.getElementById = ("lblresultado");
   //5Mostrar en pantalla.

   cmpcaja1.innertText = "Resultado " + resultado
}


multiplicar = function () {
   let cmpcaja1;
   let valor1;
   let cmpcaja2;
   let resultado;
   let valor2entero;
   let valor1entero;
   let cmpResultado;

   //recuperar el valor de la primera caja de texto
   cmpcaja1 = document.getElementById("txtvalor1");
   valor1 = cmpcaja1.value;

   //recurar el valor de la segunda caja de texto
   cmpcaja1 = document.getElementById("txtvalor2");
   cmpcaja1 = cmpcaja2.Value;

   //Transformacion valor1 en entero
   valor2entero = parseInt(valor1);
   //Transformacion valor1 en entero
   valor2entero = parseInt(valor2);
   //multiplicar los dos valores
   resultado = valor1entero * valor2entero

   //Mostrar en patalla
   cmpresultadompresultado = document.getElementById("lblresultado");
   cmpResultado.innerText = "resultado";

   cmpcaja1.innerText = "resultado" + resultado
}


Dividir = function () {
   let cmpcaja1;
   let valor1;
   let cmpcaja2;
   let Resultado;
   let valor2entero;
   let valor1entero;
   let cmpResultado;
   //recupra el valor de la primera caja de texto
   cmpcaja1 = document.getElementById("txtvalor1");
   valor1 = cmpcaja1.value;
   //recuperar el valor de la segunda caja de texto 
   cmpcaja1 = document.getElementById("txtvalor2");
   cmpcaja1 = cmpcaja2.Value;

   //Transformacion valor1 en entero
   valor2entero = parseInt(valor1);

   //Transformacion valor1 en entero
   valor2entero = parseInt(valor2);

   //dividir los dos valores
   resultado = valor1entero / valor2entero

   //motrar en pamtalla
   cmpresultadompresultado = document.getElementById("lblresultado");
   cmpResultado.innerText = "resultado";

   cmpcaja1.innerText = "resultado" + resultado
}

limpiar = function () {
   //recupra el valor de la primera caja de texto
   document.getElementById("txtvalor1").value = "0";

   //recuperar el valor de la segunda caja de texto 
   document.getElementById("txtvalor2").value = "0";

   document.getElementById("lblResultado").value = "";

}