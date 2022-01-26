let input = document.getElementById("task");
let ul = document.getElementById("list");

function addTask() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    ul.appendChild(li);
}

function addTaskWithEnter(event) {
    if(event.which === 13) {
        addTask();
    }
}
input.addEventListener('keypress', addTaskWithEnter)