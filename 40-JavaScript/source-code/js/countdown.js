let countDownDate = new Date('February 9, 2023 11:30:00').getTime();

let x = setInterval(function() {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    let hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    let minutes = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,'0');
    let seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    document.querySelector(".day").innerHTML = `<h3>${days}</h3><span>days</span>`;
    document.querySelector(".hour").innerHTML = `<h3>${hours}</h3><span>hours</span>`;
    document.querySelector(".min").innerHTML = `<h3>${minutes}</h3><span>minutes</span>`;
    document.querySelector(".sec").innerHTML = `<h3>${seconds}</h3><span>seconds</span>`;

    if(distance < 0) {
        clearInterval(x);
        let i = document.querySelectorAll(".countdown-container div");
        i.forEach((e) => {
            e.remove();
        })
        document.querySelector(".countdown-container").innerHTML = `<h3>expired</h3>`;
    }
},1000);