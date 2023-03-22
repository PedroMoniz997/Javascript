let som = new Audio("alarme.mp3");
const horaAlarme = document.querySelector("#hour-alarme");
const timeAlarme = document.querySelector("#time-alarme");
const btnA = document.querySelector("#btn-started");
const Relogio = document.querySelector("#Relogio");
const btnP = document.querySelector("#btn-stop");
const Timer = document.querySelector("#Timer");

som.loop = 2;

let tsAtual = null;
let tsAlarme = null;
let aAtivado = false;
let aTocando = false;

btnA.addEventListener("click", () => {
    tsAtual = Date.now();
    tsAlarme = tsAtual + timeAlarme.value * 1000;
    aAtivado = true;
    const dtA = new Date(tsAlarme);
    let hora = dtA.getHours() < 10 ? "0" + dtA.getHours() : dtA.getHours();
    let min = dtA.getMinutes() < 10 ? "0" + dtA.getMinutes() : dtA.getMinutes();
    let second =
        dtA.getSeconds() < 10 ? "0" + dtA.getSeconds() : dtA.getSeconds();
    horaAlarme.innerHTML = `Hora do alarme: ${hora}:${min}:${second}`;
});

btnP.addEventListener("click", () => {
    aAtivado = false;
    aTocando = false;
    horaAlarme.innerHTML = "Hora do alarme:";
    Timer.classList.remove("alarme");
    som.pause();
    som.currentTime = 0;
    timeAlarme.value = 0;
});

const relogio = () => {
    const date = new Date();
    let horas = date.getHours();
    horas = horas < 10 ? "0" + horas : horas;
    let minutos = date.getMinutes();
    minutos = minutos < 10 ? "0" + minutos : minutos;
    let segundos = date.getSeconds();
    segundos = segundos < 10 ? "0" + segundos : segundos;
    const horaCompleta = `${horas}:${minutos}:${segundos}`;
    Relogio.innerHTML = horaCompleta;
    if (aAtivado && !aTocando) {
        if (date.getTime() >= tsAlarme) {
            aTocando = true;
            som.play();
            Timer.classList.add("alarme");
        }
    }
};

relogio();

const interval = setInterval(relogio, 1000);

console.log();

// getDate() = Dia do mês
// getDay() = Dia da semana
// getFullYears() = Ano com 4 digitos
// getHours() = Horas
// getMiliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00: UTC)
// Date.now() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00: UTC)
// getTimeZoneOffSet = Timezone da localidade
// setDate() = Define dia do mês
// setMonth() = Define um mês para a data
// setFullYears() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos
// setSeconds() = Define segundos
// setMiliseconds() = Define milisegundos
// toDateString() = Retorna somente a data
