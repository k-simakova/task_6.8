const trafficLight_one = document.querySelector('#trafficLight_one');
const trafficLight_two = document.querySelector('#trafficLight_two');
const trafficLight_three = document.querySelector('#trafficLight_three');
const allCirles = document.querySelector('#wrapper');

function makeGreen() {
    trafficLight_one.style.background = ('green');
    trafficLight_two.style.background = ('black');
    trafficLight_three.style.background = ('black')

    allCirles.removeEventListener('click', makeGreen);
    allCirles.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLight_one.style.background = ('black');
    trafficLight_two.style.background = ('yellow');
    trafficLight_three.style.background = ('black');

    allCirles.removeEventListener('click', makeYellow);
    allCirles.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLight_one.style.background = ('black');
    trafficLight_two.style.background = ('black');
    trafficLight_three.style.background = ('red');

    allCirles.removeEventListener('click', makeRed);
    allCirles.addEventListener('click', makeGreen);
}
allCirles.addEventListener('click', makeGreen);