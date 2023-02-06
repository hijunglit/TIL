// 플러스버튼 querySelectorAll()

// 플러스 버튼 이벤트 리스너 and forEach();

// classList.remove 

// 폴드 querySelectorAll

// click 한 요소의 hide 클래스를 추가하고 제거하면 됨
// const plusBtn = document.querySelectorAll(".spread");
const qnaItem = document.querySelectorAll(".grid-item");
const minusBtn = document.querySelectorAll(".fold");
const answer = document.querySelectorAll(".answer");

qnaItem.forEach((question) => {
    const btn = question.querySelector(".spreadIcon");
    btn.addEventListener("click", () => {
        qnaItem.forEach((item) => {
            if(item !== question) {
                item.classList.remove("show")
            }
        });
        question.classList.toggle("show");
    })
});