
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
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);
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
        // set local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    } else if(value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
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
    removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement; // .grocery-list
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling; // 
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

// set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// ***** Local Storage *****

// add to local storage
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if(item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();

    items = items.map(function(item) {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

// ***** Setup Items *****

function setupItems() {
    let items = getLocalStorage();

    if(items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value) {
    const element = document.createElement("li");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
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
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit");
    editBtn.addEventListener("click", editItem);

    list.appendChild(element);
}