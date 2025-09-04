//Inizializza le costanti relative agli elementi
const lampImg = document.getElementById("myImg");
const mainBtn = document.getElementById("myBtn");
const mainBox = document.getElementById("box");

let isLightOn = false;

mainBtn.addEventListener("click", toggleLight());



//Aggiungi evento di cambio immagine

function toggleLight {

}


function lightOn(){
    lampImg.src = "img/yellow_lamp.png";
    mainBox.style.gap = "38px";
    mainBox.style.marginLeft = "39vw";
    mainBtn.innerText = "Spegni";
    console.log("hai acceso la luce");
};

