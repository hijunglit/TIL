const tabButton = document.querySelectorAll(".tab-button-container button");
const tabItem = document.querySelectorAll(".tab-item");

tabButton.forEach((btn) => {

    btn.addEventListener("click", function(item) {
        const targetButton = item.currentTarget;
        const dataId = btn.dataset.id;
        tabItem.forEach((item) => {
            item.classList.remove("active");
        });

        tabButton.forEach((item) => {
            item.classList.remove("active");
        });

        document.querySelector("#" + dataId).classList.add("active");
        targetButton.classList.add("active");
    });
});