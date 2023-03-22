const date = new Date();
const Relogio = document.querySelector("#Relogio");

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
