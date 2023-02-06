// DomContentLoaded : 
// Node : 여러가지 DOM 타입들이 상속하는 인터페이스이며 그 다양한 타입들을 비슷하게 처리할 수 있게 한다.

const userProfileImg = document.querySelector(".profile_img");
const userName = document.querySelector(".user_name");
const position = document.querySelector(".position");
const aboutReview = document.querySelector(".about_review");
let pagers = document.querySelectorAll(".pager");
const randomButton = document.querySelector(".random_reviews");

let img =  document.createElement("img");
userProfileImg.appendChild(img);

const users = [
    {
        profileImg : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        name : "Susan Smith",
        position : "web developer",
        reviewContent : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        profileImg : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        name : "Anna Johnson",
        position : "web designer",
        reviewContent : "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        profileImg : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        name : "Peter Jones",
        position : "intern",
        reviewContent : "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        profileImg : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        name : "Bill Anderson",
        position : "the boss",
        reviewContent : "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

document.addEventListener("DOMContentLoaded", renderReview);

remoteReviews();

randomButton.addEventListener("click", showRandom);
// showRandom();

function renderReview() {
    let i = 0;
    img.src = `${users[i].profileImg}`;
    img.classList.add("user_img");
    userName.textContent = `${users[i].name}`;
    position.textContent = `${users[i].position}`;
    aboutReview.textContent = `${users[i].reviewContent}`;
}

function remoteReviews() {
    let max = users.length-1;
    let i = 0;
        pagers.forEach(btn => {
            btn.addEventListener("click", function() {
                if(
                    btn.classList.contains("prev") && i > 0
                ) {
                    i--;
                    img.src = `${users[i].profileImg}`;
                    userName.textContent = `${users[i].name}`;
                    position.textContent = `${users[i].position}`;
                    aboutReview.textContent = `${users[i].reviewContent}`;
                } else if(
                    btn.classList.contains("next") && i < max
                    ) {
                    i++;
                    img.src = `${users[i].profileImg}`;
                    userName.textContent = `${users[i].name}`;
                    position.textContent = `${users[i].position}`;
                    aboutReview.textContent = `${users[i].reviewContent}`;
                } else if(
                    btn.classList.contains("prev") && (i === 0)
                ) {
                    i = max;
                    img.src = `${users[i].profileImg}`;
                    userName.textContent = `${users[i].name}`;
                    position.textContent = `${users[i].position}`;
                    aboutReview.textContent = `${users[i].reviewContent}`;
                } else if (
                    btn.classList.contains("next") && (i === max)
                ) {
                    i = 0;
                    img.src = `${users[i].profileImg}`;
                    userName.textContent = `${users[i].name}`;
                    position.textContent = `${users[i].position}`;
                    aboutReview.textContent = `${users[i].reviewContent}`;
                }
            });
        });
    }

function showRandom() {
        let ramdonNumber = Math.floor(Math.random()*users.length);
        img.src = `${users[ramdonNumber].profileImg}`;
        userName.textContent = `${users[ramdonNumber].name}`;
        position.textContent = `${users[ramdonNumber].position}`;
        aboutReview.textContent = `${users[ramdonNumber].reviewContent}`;
}

// Dark mode

const darkModeSwitch = document.querySelector(".dark_mode_switch input");
const title = document.querySelector(".title>h1");
const reviewsContent = document.querySelector(".reviews_content");
const moon = document.querySelector(".dark_mode_switch > p.moon");
const sun = document.querySelector(".dark_mode_switch p.sun");

darkModeSwitch.addEventListener("change", function() {
    if(this.checked) {
        document.body.classList.add("dark_mode");
        title.classList.add("dark_mode");
        reviewsContent.classList.add("dark_mode");
        position.classList.add("dark_mode");
        moon.classList.add("hide");
        sun.classList.remove("hide");
    } else {
        document.body.classList.remove("dark_mode");
        title.classList.remove("dark_mode");
        reviewsContent.classList.remove("dark_mode");
        position.classList.remove("dark_mode");
        moon.classList.remove("hide");
        sun.classList.add("hide");
    }
});