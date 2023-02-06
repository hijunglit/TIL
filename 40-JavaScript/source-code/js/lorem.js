const input = document.getElementById("paragraphs");
const submitBtn = document.querySelector(".submit");
const loremCtn = document.querySelector(".lorem-content");
const form = document.querySelector("form");

form.addEventListener("submit", loremGenerator);
function loremGenerator(e) {
    e.preventDefault();
    let inputValue = parseInt(input.value);
    let randomLorem = Math.floor(Math.random() * loremBox.length);
    if(!inputValue) {
        alert('enter a value that over 0');
    } else {
        let extLorem = loremBox.slice(0, inputValue);
        extLorem = extLorem
            .map(function(item) {
                return `<p class="result">${item}</p>`;
            })
            .join("");
            loremCtn.innerHTML = extLorem;
    }
}
// array.slice(0, n) 메소드 안의 'n'인자를 Math.floor(Math.random(inputValue); 메소드의 값으로 넣는다)