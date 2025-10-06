temperatura =function(){
let cmpcaja1;
let cmpcaja2
let valor1;
let valor2;
let resultado;
let valor1entero;
let valor2entero; 
let cmpResultado;
//Recuperar el valor de la primera caja de texto
   cmpcaja1=document.getElementById("txtvalor1");
   valor1=cmpcaja1.value;

//Recuperar el valor de la segunda caja de texto
cmpcaja2=document.getElementById("txtvalor2");
valor2=cmpcaja2.value;

//Transformar valor en entero
valor1entero=parseInt(valor1);
valor2entero=parseInt(valor2);

//resta a los dos valor
resultado=valor1entero-valor2entero;
 cmpresultado=document.getElementById("lblResultado");
console.log("resultado"+resultado);
//Mostrar en pantalla.
cmpresultado.innerText="resultado"+resultado;
}