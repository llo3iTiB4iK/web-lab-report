// Підключити загальний файл style.css для всіх варіантів
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'labs/lab6/style.css';
document.head.appendChild(link);

// Завдання 1
function logValueToConsole(elementId) {
    console.log(document.getElementById(elementId).value);
}

// Завдання 3
function hideOrShowPassword(event, inputId) {
    const buttonText = event.target.innerText;
    document.getElementById(inputId).type = (buttonText === "Приховати") ? "password" : "text";
    event.target.innerText = (buttonText === "Приховати") ? "Розкрити" : "Приховати";
}

// Завдання 5
window.onclick = event => {
    if (document.getElementsByClassName("taskTitle").length)
        console.log(event.target.id === "place");
}

// Завдання 7
function task7Fun() {
    const list = document.querySelector("ul#categories");
    const categories = list.querySelectorAll("li.item");
    console.log('Number of categories: ' + categories.length);
    categories.forEach(category => {
        console.log('Category: ' + category.querySelector("h2").innerText);
        console.log('Elements: ' + category.querySelectorAll("li").length);
    })
}

// Завдання 8
function task8Fun(event) {
    event.preventDefault();
    const fieldValues = {};
    for (let field of event.target.elements) {
        if (field.type !== 'submit') {
            if (field.value.length === 0) {
                window.alert('All form fields must be filled in');
                return;
            } else {
                fieldValues[field.name] = field.value.trim();
            }
        }
    }
    console.log(fieldValues);
    event.target.reset();
}

// Завдання 9
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function task9Fun() {
    const new_color = getRandomHexColor();
    document.body.style.backgroundColor = new_color;
    document.querySelector("span.color").textContent = new_color;
}

// Завдання 10
function createBoxes(amount) {
    if (amount >= 1 && amount <=100) {
        const boxes = document.querySelector('div#boxes');
        for (let i= 0; i < amount; i++) {
            let size = 30 + 10 * i;
            let newDiv = document.createElement('div');
            newDiv.style.height = `${size}px`;
            newDiv.style.width = `${size}px`;
            newDiv.style.backgroundColor = getRandomHexColor();
            boxes.appendChild(newDiv);
        }
        document.getElementById('controls').firstElementChild.value = "";
    }
}

function destroyBoxes() {
    document.querySelector('div#boxes').innerHTML = "";
}