//Inizializza le costanti relative agli elementi
const lampImg = document.getElementById("myImg");
const mainBtn = document.getElementById("myBtn");

const mainBox = document.getElementById("box");

//Aggiungi evento di cambio immagine
mainBtn.addEventListener("click", function(){
    lampImg.src = "img/yellow_lamp.png";
    mainBox.style.gap = "38px";
    mainBox.style.marginLeft = "39vw";
});