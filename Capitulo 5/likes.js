let votosMinecraft = 0;
let votosRoblox = 0;

sumarLikeMinecraft = function () {
    votosMinecraft = votosMinecraft + 1
    actulizarminecraft()
    
}
sumarCorazonMinecraft = function () {
    votosMinecraft = votosMinecraft + 5
    actulizarminecraft()

}
restarLikeMinecraft = function () {
    votosMinecraft = votosMinecraft - 1
    actulizarminecraft()

}
sumarLikeRoblox = function () {
    votosRoblox = votosRoblox + 1
    actualizarRoblox()
}
sumarCorazonRoblox = function () {
    votosRoblox = votosRoblox + 5
    actualizarRoblox()
}
restarLikeRoblox = function () {
    votosRoblox = votosRoblox - 1
}



actulizarminecraft = function(){
    document.getElementById("lblminicraft").innerText = votosMinecraft
    actualizarRoblox()

}
actualizarRoblox = function(){
    document.getElementById("lblRoblox").innerText = votosRoblox
}