const video = document.getElementById("video");
const playButton = document.getElementById("with-warrenty");
const lazyLoad = document.querySelector(".place-holder");

playButton.addEventListener("change", playAndPause);
function playAndPause() {
    if(this.checked) {
        video.pause();
    } else {
        video.play();
    }
}

function loadData() {
    lazyLoad.classList.add("hidden");
}