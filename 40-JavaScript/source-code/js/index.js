const background = document.body;
const colorValue = document.querySelector(".color-info > .color-value");
const clickMe = document.querySelector(".click");

const colorArray = [
    "#DF4076", 
    "#3356C7", 
    "#5DAADE", 
    "#D70634", 
    "#3D790E", 
    "#FA447F",
    "#8FA9F0",
    "#8B6D9B",
    "#B7CD1F",
    "#601964",
    "#71AB45",
    "#E9DDA7",
    "#9C344F",
    "#90AA18",
    "#768A4E",
    "#D5FC43",
    "#03592B",
    "#A786EE",
    "#02DF69",
    "#0D96B0",
];

function randomColor() {
    background.style.backgroundColor = `${colorArray[Math.floor(Math.random() * (colorArray.length-1))]}`;
    colorValue.innerHTML = background.style.backgroundColor;
}

clickMe.addEventListener("click", randomColor);