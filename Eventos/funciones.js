function muestra(){
    alert("gracias");
}
function resaltar(elemento) {
    switch(elemento.style.borderColor){
        case 'silver':
        case 'silver silver silver silver':
        case '#C0C0C0':
            elemento.style.borderColor='red';
        break;
        case 'red':
        case 'red red red red':
        case '#FFFFFF':
            elemento.style.borderColor = 'green';
    }
}
Función externa
function muest(){alert("Gracias otra vez")}
Asignar la función externa al elemento
document.getElementById("boton").onclick= muest;

