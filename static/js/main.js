let input = document.getElementById("task");
let ul = document.getElementById("list");

function addTask() {
    let inputValue = input.value.trim();
    if(inputValue.lenght > 0) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        input.value = "";
        ul.appendChild(li);
    } else {
        input.value = '';
        alert('you have to write something');
    }
}

function addTaskWithEnter(event) {
    if(event.which === 13) {
        addTask();
    }
}
input.addEventListener('keypress', addTaskWithEnter)