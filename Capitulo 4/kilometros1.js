kilometros = function () {
   let cmpcaja1;
   let valor1;
   let resultado;
   let valor1entero;

   //Recuperar el valor de la primera caja de texto
   cmpcaja1 = document.getElementById("txtvalor1");
   valor1 = cmpcaja1.value;


   //Transformar valor en entero
   valor1entero = parseInt(valor1);


   resultado = valor1entero * 1.60934;
   cmpresultado = document.getElementById("lblResultado");

   cmpresultado.innerText = "Resultado " + resultado;
}

metros = function () {
   let cmpcaja1;
   let valor1;
   let cmpcaja2;
   let resultado;
   let valor2entero;
   let valor1entero;
   let cmpResultado;
   //Recuperar el valor de la primera caja de texto
   cmpcaja1 = document.getElementById("txtvalor1");
   valor1 = cmpcaja1.value;

   //Recuperar el valor de la segunda caja de texto
   cmpcaja2 = document.getElementById("txtvalor2");
   valor2 = cmpcaja2.value;

   //Transformar valor en entero
   valor1entero = parseInt(valor1);
   valor2entero = parseInt(valor2);

   resultado = valor1entero + valor2entero;
   cmpresultado = document.getElementById("lblResultado");

   cmpresultado.innerText = "Resultado "(kilometros);
}