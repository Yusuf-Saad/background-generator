var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var random = document.querySelector("#random");
var copy = document.querySelector("#copy");

color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = "linear-gradient(to right, red, yellow);"

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ';';
}

function getRandomNumber() {
    return Math.floor(Math.random() * (255 - 0 + 1));
}

function createRGB() {
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

random.addEventListener("click", function() {
    var value1 = createRGB();
    var value2 = createRGB();
    body.style.background = `linear-gradient(to right, ${value1}, ${value2})`;
    css.textContent = body.style.background + ';';
})

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function copyText() {
    navigator.clipboard.writeText(css.textContent);
    copy.textContent = "Copied!";
}

copy.addEventListener("click", copyText);