/* DOMContentLiaded : html의 분석이 완료되는 시점에서 작동하는 함수.
style, script 태그의 로딩은 기다리지 않는다. */

// array api

/* 
    map : 호출한 배열 하나 하나에 함수를 적용한 결과값을 반환한다.
    reduce : 배열의 아이템에 함수를 순서대로 적용하며 이전 결과값에 현재 순서와 계산한다.
    최종 결과는 단일 결과값이다.

    includes method : 배열에 있는 값중 메소드에 입력한 값이 포함되어 있는지 여부에 따라
    boolean 으로 결과를 반환한다. 
*/

// window.addEventListener("DOMContentLoaded", loadCategory);
// function loadCategory() {
//     const category = document.querySelector(".category");
//     for(let i = 0; i < categoryList.length ; i++) {
//         const button = document.createElement("button");
//         category.appendChild(button);
//         button.innerHTML = `${categoryList[i]}`;
//     }
// }
const displayMenu = document.getElementById("menus");
const container = document.querySelector(".category");

// load items
window.addEventListener("DOMContentLoaded", function() {
    displayItems(menus);
    displayMenuButtons();
    
});

function displayItems(menuItems) {
    let loadMenu = menuItems.map((item) => {
        return `<div class="menu-item grid-item">
            <img src="${item.img}" alt="${item.name}" class="menu-img">
            <div class="text-info">
                <div class="info-header">
                    <p class="name">${item.name}</p>
                    <p class="price">${item.price}</p>
                </div>
                <p class="description">
                    ${item.description}
                </p>
            </div>
        </div>`;
    });
    loadMenu = loadMenu.join("");
    displayMenu.innerHTML = loadMenu;
}

function displayMenuButtons() {
    const categories = menus.reduce((values, item) => {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
    ["all"]
    );
    const categoryBtns = categories
        .map((category) => {
        return `<button type="button" data-id="${category}">${category}</button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const category = container.querySelectorAll(".category button");
    // filter item
    category.forEach((btn) => {
        btn.addEventListener("click", function(e) {
            const targetCategory = e.currentTarget.dataset.id;
            const menuCategory = menus.filter((menuItem) => {
                if(menuItem.category === targetCategory) {
                    return menuItem;
                }
            });
            if(targetCategory === "all") {
                displayItems(menus);
            } else{
                displayItems(menuCategory);
                console.log(menuCategory);
            }
        });
    });
}