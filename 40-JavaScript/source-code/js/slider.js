/***** SELECT ITEMS ****/
const imgList = document.querySelector(".img-list");
const remoteBtn = document.querySelectorAll(".btn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next"); 
const slideItems = document.querySelectorAll(".item");
const maxSlide = slideItems.length;
let slideWidth = imgList.clientWidth;
let currSlide = 1;
let offset = slideWidth;

/***** EVENT LISTENER ****/
window.addEventListener("DOMContentLoaded", function() {
    displayItems(sliderImages);
});

remoteBtn.forEach((btn) => {
    btn.addEventListener("click", function() {
        if(btn.classList.contains("prev")) {

        } else if (btn.classList.contains("next")) {
            currSlide++;
            if(currSlide < maxSlide) {
                console.log(btn);
                slideItems.style.left = `-${offset}`;
            } else {

            }
        }
    });
});


/***** FUNCTIONS ****/
function displayItems(sliderItem) {
    let loadImage = sliderItem.map((item) => {
        return `
        <li class = "item"><img src="${item}" alt="slider image"></li>
        `;
    })
    loadImage.join('');
    imgList.innerHTML = loadImage;
}