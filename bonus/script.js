//Inizializza le costanti relative agli elementi
const lampImg = document.getElementById("myImg");
const mainBtn = document.getElementById("myBtn");
const mainBox = document.getElementById("box");

let isLightOn = false;

mainBtn.addEventListener("click", toggleLight);



//Aggiungi evento di cambio immagine

function toggleLight() {
    if (isLightOn === false) {
        lampImg.src = "img/yellow_lamp.png";
        mainBox.style.gap = "64px";
        mainBox.style.marginLeft = "39vw";
        mainBtn.innerText = "Spegni";
    }else if (isLightOn=== true) {
        lampImg.src = "img/white_lamp.png";
        mainBox.style.marginLeft = "41vw";
        mainBox.style.gap = "28px";
        mainBtn.innerText = "Accendi";     
    };
    if (isLightOn === true) {
        isLightOn = false; 
    }else if (isLightOn === false){
        isLightOn = true;
    }
}



