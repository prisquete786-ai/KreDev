calcularAreaRectangulo = function (base, altura) {
   return base * altura

}
calcularAreaCuadrado = function (lado) {
 return lado*lado
}

calcularPerimetroRectangulo = function (base, altura) {
   let resultado;
   resultado=base*2+altura*2;
   return resultado;
}

calcularPerimetroCuadrado = function (lado) {
   let resultado;
   resultado=lado+lado+lado+lado;
   return resultado;

}
calcularPromedio =function(valor1,valor2,valor3,valor4){
   let resultado;
   resultado=(valor1+valor2+valor3+valor4)/4;
   return resultado;

}
probar = function(){
   var areaRectangulo = calcularAreaRectangulo(10,5);
   console.log("area Rectangulo: "+areaRectangulo);
   var areaCuadrado = calcularAreaCuadrado(8);
   console.log("area Cuadrado: "+areaCuadrado);
   var perimetroRectangulo = calcularPerimetroRectangulo(10,5);
   console.log("perimetro Rectangulo: "+perimetroRectangulo);
   var perimetroCuadrado = calcularPerimetroCuadrado(8);
   console.log("perimetro Cuadrado: "+perimetroCuadrado);
   var promedio=calcularPromedio(10,20,15,15);
   console.log("promedio:"+promedio);
   
}

