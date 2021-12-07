setInterval(postaviSat, 1000);

const kazaljkaSat = document.querySelector('[data-kazaljka-sat]');
const kazaljkaMin = document.querySelector('[data-kazaljka-min]');
const kazaljkaSec = document.querySelector('[data-kazaljka-sec]');
const popodnevniSat1 = document.getElementById("one13");
const popodnevniSat2 = document.getElementById("two14");
const popodnevniSat3 = document.getElementById("three15");
const popodnevniSat4 = document.getElementById("four16");
const popodnevniSat5 = document.getElementById("five17");
const popodnevniSat6 = document.getElementById("six18");
const popodnevniSat7 = document.getElementById("seven19");
const popodnevniSat8 = document.getElementById("eight20");
const popodnevniSat9 = document.getElementById("nine21");
const popodnevniSat10 = document.getElementById("ten22");
const popodnevniSat11 = document.getElementById("eleven23");
const popodnevniSat12 = document.getElementById("twelve24");

function postaviSat() {
    const trenutniDatum = new Date();
    const trenutniSec = trenutniDatum.getSeconds() / 60;
    const trenutniMin = (trenutniSec + trenutniDatum.getMinutes()) / 60;
    const trenutniSat = (trenutniMin + trenutniDatum.getHours()) / 12;  
    rotacijaKazaljke(kazaljkaSat, trenutniSat);
    rotacijaKazaljke(kazaljkaMin, trenutniMin);
    rotacijaKazaljke(kazaljkaSec, trenutniSec);

//  Promjena Brojeva na satu na popodnevne sate
    if (trenutniDatum.getHours() >= 10) {
        popodnevniSat1.innerText = "13"
        popodnevniSat2.innerText = "14"
        popodnevniSat3.innerText = "15"
    }                                       
    if (trenutniDatum.getHours() >= 12) {
        popodnevniSat4.innerText = "16"
        popodnevniSat5.innerText = "17"
        popodnevniSat6.innerText = "18"
        popodnevniSat7.innerText = "19"
        popodnevniSat8.innerText = "20"
        popodnevniSat9.innerText = "21"
        popodnevniSat10.innerText = "22"
        popodnevniSat11.innerText = "23"
    }
    if (trenutniDatum.getHours() >= 14) {
        popodnevniSat1.innerText = "Tomorrow"
        popodnevniSat1.className = "broj broj1 brojTomorrow"
    }

    if (trenutniDatum.getHours() >= 15) {
        popodnevniSat2.innerText = "Tomorrow"
        popodnevniSat2.className = "broj broj2 brojTomorrow"
    }

    if (trenutniDatum.getHours() >= 16) {
        popodnevniSat3.innerText = "Tomorrow"
        popodnevniSat3.className = "broj broj3 brojTomorrow"
    }

    if (trenutniDatum.getHours() >= 17) {
        popodnevniSat4.innerText = "Tomorrow"
        popodnevniSat4.className = "broj broj4 brojTomorrow"
    }

    if (trenutniDatum.getHours() >= 18) {
        popodnevniSat5.innerText = "Tomorrow"
        popodnevniSat5.className = "broj broj5 brojTomorrow"
    }

    if ((trenutniDatum.getHours() >= 18) || (trenutniDatum.getHours() <= 6)) {
        popodnevniSat12.innerText = "00"
    }

    if (trenutniDatum.getHours() >= 19) {
        popodnevniSat6.innerText = "Tomorrow"
        popodnevniSat6.className = "broj broj6 brojTomorrow"
    }

    if (trenutniDatum.getHours() >= 20) {
        popodnevniSat7.innerText = "Tomorrow"
        popodnevniSat7.className = "broj broj7 brojTomorrow"
    }

    if (trenutniDatum.getHours() >= 21) {
        popodnevniSat8.innerText = "Tomorrow"
        popodnevniSat8.className = "broj broj8 brojTomorrow"
    }

    if (trenutniDatum.getHours() >= 22) {
        popodnevniSat9.innerText = "Tomorrow"
        popodnevniSat9.className = "broj broj9 brojTomorrow"
    }

    if (trenutniDatum.getHours() >= 23) {
        popodnevniSat10.innerText = "Tomorrow"
        popodnevniSat10.className = "broj broj10 brojTomorrow"
    }

    if ((trenutniDatum.getHours() === 0) && (trenutniDatum.getMinutes() === 0) && (trenutniDatum.getSeconds() === 0)) {
        postaviSat();
    }

//  Promjena boje pozadine u zavisnosti od vremena
    if (trenutniDatum.getHours() < 4) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))')}
    if (trenutniDatum.getHours() == 5) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 0, 0), rgb(55, 0, 55))')}
    if (trenutniDatum.getHours() == 6) {promjenaBojePozadine('linear-gradient(to right, rgb(55, 0, 55), rgb(155, 0, 55))')}
    if (trenutniDatum.getHours() == 7) {promjenaBojePozadine('linear-gradient(to right, rgb(155, 0, 55), rgb(255, 255, 0))')}
    if (trenutniDatum.getHours() == 8) {promjenaBojePozadine('linear-gradient(to right, rgb(255, 255, 0), rgb(0, 255, 255))')}
    if (trenutniDatum.getHours() == 9) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 255, 255), rgb(0, 125, 255))')}
    if (trenutniDatum.getHours() == 10) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 255, 255), rgb(0, 125, 255))')}
    if (trenutniDatum.getHours() == 11) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 255, 255), rgb(0, 125, 255))')}
    if (trenutniDatum.getHours() == 12) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 125, 255), rgb(0, 55, 255))')}
    if (trenutniDatum.getHours() == 13) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 125, 255), rgb(0, 55, 255))')}
    if (trenutniDatum.getHours() == 14) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 125, 255), rgb(0, 55, 255))')}
    if (trenutniDatum.getHours() == 15) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 125, 255), rgb(0, 55, 255))')}
    if (trenutniDatum.getHours() == 16) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 55, 255), rgb(0, 0, 205))')}
    if (trenutniDatum.getHours() == 17) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 55, 255), rgb(0, 0, 205))')}
    if (trenutniDatum.getHours() == 18) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 0, 205), rgb(55, 0, 155))')}
    if (trenutniDatum.getHours() == 19) {promjenaBojePozadine('linear-gradient(to right, rgb(55, 0, 155), rgb(105, 0, 105))')}
    if (trenutniDatum.getHours() == 20) {promjenaBojePozadine('linear-gradient(to right, rgb(105, 0, 105), rgb(55, 0, 55))')}
    if (trenutniDatum.getHours() == 21) {promjenaBojePozadine('linear-gradient(to right, rgb(55, 0, 55), rgb(0, 0, 0))')}
    if (trenutniDatum.getHours() == 22) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))')}
    if (trenutniDatum.getHours() == 23) {promjenaBojePozadine('linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))')}
}

function rotacijaKazaljke(element, rotacioniUgao) {
    element.style.setProperty('--rotacijaKazaljke', rotacioniUgao * 360)
}

function promjenaBojePozadine(color) {
    document.body.style.background = color;
}

postaviSat();