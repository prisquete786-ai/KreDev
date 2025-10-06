freir =function(alimento){
    let alimentofrito;
    console.log("me llega "+alimento);
    console.log("el kfc en la casa");
    console.log("ltsto!!!!");
    alimentofrito=alimento+ "frito";
    return alimentofrito

}

probarfreir =function(){
    let comisdalista;
    comisdalista=freir("pollito");
    console.log(comisdalista);
}

probarfreircomida =function(){
    let cmpcomida;
    let comida
    let resultadocomida;
    cmpcomida=document.getElementById("comida");
    comida=cmpcomida.value; 
    resultadocomida=freir(comida);
    console.log("he resivido "+resultadocomida);
}