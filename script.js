//Inizializza le costanti relative agli elementi
const lampImg = document.getElementById("myImg");
const mainBtn = document.getElementById("myBtn");
//Aggiungi evento di cambio immagine
mainBtn.addEventListener("click", function(){
    lampImg.src = "img/yellow_lamp.png";
});