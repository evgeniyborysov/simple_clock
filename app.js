const secondHand = document.querySelector(".second-hand");
const minutedHand = document.querySelector(".minute-hand");
const hourdHand = document.querySelector(".hour-hand");

function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = (minutes / 60) * 360 + 90;
    minutedHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegrees = (hours / 12) * 360 + 90;
    hourdHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTime, 1000);
