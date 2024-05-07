// Завдання 1
let counter = 0;

function createProduct(obj, callback) {
    obj.id = counter;
    ++counter;
    callback(obj);
}

function logProduct(product) {
    console.log(product);
}

function logTotalPrice(product) {
    console.log(product.price * product.quantity);
}

function generateProduct() {
    const name = window.prompt("Введіть назву товару:");
    const price = window.prompt("Введіть ціну за одиницю:");
    const quantity = window.prompt("Введіть кількість одиниць товару:");
    const productObj = { name, price, quantity };
    const printAllInfo = window.confirm("Натисніть 'Так' щоб вивести всю інформацію про товар або 'Ні' щоб вивести лише загальну ціну за товар")
    createProduct(productObj, printAllInfo ? logProduct : logTotalPrice);
}

// Завдання 3
const medicines = {
    "Агалгін": new Date("2022-05-01"),
    "Ношпа": new Date("2025-07-02"),
    "Альфахолін": new Date("2024-12-21"),
    "Аспірин": new Date("2022-08-15"),
    "Аспаркам": new Date("2024-04-18")
};

const getObjectKeys = object => Object.keys(object);

const filterAndSortByExpireDate = object => {
    const today = new Date();
    const medications = getObjectKeys(object);
    const filtered = medications.filter(medication => object[medication] >= today);
    filtered.sort((a, b) => medicines[a] - medicines[b]);
    console.log(filtered);
};

// Завдання 5
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

function modifyFruitsArray(arr) {
    return arr.map((obj, index) => {
        obj.price = 0.8 * obj.price;
        obj.id = index;
        return obj;
    })
}

// Завдання 7
class Client {
    #login;
    #email;
    getLogin() { return this.#login; }
    setLogin(new_login) { this.#login = new_login; }
    getEmail() { return this.#email; }
    setEmail(new_email) { this.#email = new_email; }
}

function createClient() {
    const client = new Client();
    client.setLogin(window.prompt("Введіть логін:"));
    client.setEmail(window.prompt("Введіть email"));
    console.log(`Логін: ${client.getLogin()}\nemail: ${client.getEmail()}`);
}

// Завдання 9
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }
];

function countTags(posts) {
    const tagCounts = {};
    for (let post of posts) {
        for (let tag of post.tags) {
            if (tag in tagCounts) {
                tagCounts[tag] += 1;
            } else {
                tagCounts[tag] = 1;
            }
        }
    }
    return tagCounts;
}

// Завдання 10
function checkBrackets(str) {
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.length === 0) { return false; }
            if (stack.pop() !== openBrackets[closeBrackets.indexOf(char)]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}