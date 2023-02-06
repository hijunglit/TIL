
// ***** Select Items *****

const alert = document.querySelector(".alert");
const form = document.getElementById("form");
const grocery = document.getElementById("input");
const submitBtn = document.querySelector(".submit-button");
const container = document.querySelector(".list-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// ***** Edit option ***** 
let editElement;
let editFlag = false;
let editID = "";

// ***** Event Listeners *****
// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
const deleteBtn = document.querySelector(".delete");

// ***** Functions *****
function addItem(event) {
    event.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag) {
        const element = document.createElement("li");
        // add class
        element.classList.add("grocery-item");
        // add id 
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = 
            `
                <p>${value}</p>
                <div class="button-container">
                    <div class="edit">
                        <i class="fas fa-edit"></i>
                    </div>
                    <div class="delete">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            `;
        // add eventListener to both buttons;
        const deleteBtn = element.querySelector(".delete");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit");
        editBtn.addEventListener("click", editItem);

        // append child
        list.appendChild(element);
        //display alert
        displayAlert("add grocery!", "success");
        // show container
        container.classList.add("show-container");
        
    } else if(value && editFlag) {
        console.log("editing");
    } else {
        displayAlert("please enter value", "danger");
    }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function() {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

//clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if(items.length > 0) {
        items.forEach((item) => {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    // localStorage.removeItem("list");
}

// delete item
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement; // .grocery-list
    const id = element.dataset.id;

    list.removeChild(element);

    if(list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");

    setBackToDefault();
}
// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement; // .grocery-list
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling; // 
    console.dir(editElement);
}

// set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// ***** Local Storage *****
function addToLocalStorage(id, value) {
    // console.log("added to local storage");
}
function removeFromLocalStorage(id) {}
function editLocalStorage(id, value) {}

// ***** Setup Items *****