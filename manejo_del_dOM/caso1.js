var parrafos = document.getElementsByTagName("p");
var numerop = parrafos.length;
var parrf = document.createElement("p");
var contenido = document.createTextNode("Nuevo parrafo");
function tamano(){
    alert(numerop);
    document.getElementById("num").innerHTML=numerop;
    parrf.appendChild(contenido);
    document.body.appendChild(parrf)
} 
document.getElementById("text").onclick=tamano;

