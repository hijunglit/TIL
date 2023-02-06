const counterBtn = document.querySelectorAll(".btn");
const  counterCondition = document.getElementById("number");
let counter = 0;

// addEventListener("click", counterFunc);

function counterFunc() {
    counterBtn.forEach(btn => {
        btn.addEventListener("click", function() {
            if(btn.classList.contains("decrease")) {
                counter--;
            } else if(btn.classList.contains("increase")) {
                counter++;
            } else if (btn.classList.contains("reset")) {
                counter = 0;
            }
            counterCondition.textContent = counter;
            if(counter>0) {
                counterCondition.style.color = "green";
            } else if (counter<0) {
                counterCondition.style.color = "red";
            } else if (counter === 0) {
                counterCondition.style.color = "black";
            }
        });
    });
}
counterFunc();