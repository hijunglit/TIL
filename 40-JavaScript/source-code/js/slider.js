const slideItems = document.querySelectorAll(".slide-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// slideItems.forEach(function(slide, index) {
//     slide.style.left = `${index*100}%`;
// });
let counter = 0;
nextBtn.addEventListener("click", function() {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function() {
    counter--;
    carousel();
});

function carousel() {
    counter < slideItems.length -1 ? nextBtn.style.display = "inline" 
    :nextBtn.style.display = "none";
    counter > 0 ? prevBtn.style.display = "inline" 
    : prevBtn.style.display = "none";
    slideItems.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";