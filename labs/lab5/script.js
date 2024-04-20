const array = [];
function generate_array() {
    const arr_length = document.getElementById("arr_length").value;
    if (arr_length <= 0) {
        window.alert("Введіть дійсний розмір масиву!");
        return;
    }
    array.splice(0);
    for (let i = 0; i < arr_length; i++) {
        array.push(Math.floor(Math.random() * 50));
    }
    pasteArrayToElem(array, "input_array");
    const results = find_max_min(array);
    if (results) {
        pasteArrayToElem(array[results[0]], "max_even_element");
        pasteArrayToElem(array[results[1]], "min_even_pos_element");
        swapElements(array, results[0], results[1]);
        pasteArrayToElem(array, "swapped_array");
    }
    insertionSort(array);
    pasteArrayToElem(array, "sorted_array");
}
function pasteArrayToElem(array, id) {
    document.getElementById(id).innerText = array.toString();
}
const swapElements = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};
function find_max_min(array) {
    let max_even_element_index, min_even_pos_element_index;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            if (!max_even_element_index || array[max_even_element_index] < array[i])
                max_even_element_index = i;
        }
        if ((i + 1) % 2 === 0) {
            if (!min_even_pos_element_index || array[min_even_pos_element_index] > array[i])
                min_even_pos_element_index = i
        }
    }
    if (max_even_element_index === undefined) {
        window.alert("Масив не має парних елементів, згенеруйте заново!");
        return false;
    }
    if (!min_even_pos_element_index) {
        window.alert("Масив недостатньо великий, щоб знайти елементи на парних позиціях. Згенеруйте заново!");
        return false;
    }
    return [max_even_element_index, min_even_pos_element_index];
}
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j= i; j > 0 && array[j-1] > array[j]; j--)
            swapElements(array, j-1, j);
    }
}

function validateForm() {
    const form = document.forms[0];
    if (!Number.isInteger(parseInt(form.elements.int_num.value, 10))) {
        window.alert('Введено некоректне значення у поле цілого числа!');
        return;
    }
    if (isNaN(parseFloat(form.elements.float_num.value))) {
        window.alert('Введено некоректне значення у поле дійсного числа!');
        return;
    }
    const date_regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!date_regex.test(form.elements.date.value)) {
        window.alert('Введено некоректне значення у поле дати!');
        return;
    }
    if (form.elements.password.value !== form.elements.password_confirm.value) {
        window.alert('Значення у полях пароля та його підтвердження мають співпадати!');
        return;
    }
    for (let input of form.elements) {
        const label = input.closest('label');
        if (label && label.innerText.startsWith("*")) {
            if (input.value.length === 0) {
                window.alert('Всі поля з * повинні бути непорожніми!');
                return;
            }
        }
    }
}