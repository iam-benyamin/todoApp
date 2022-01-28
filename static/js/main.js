let input = document.getElementById("task");
let ul = document.getElementById("list");

function deleteItem(event) {
    event.target.parentElement.remove();
}

function addTask() {
    let inputValue = input.value.trim();
    input.value = "";
    if(inputValue.length > 0) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(inputValue));
        let deleteIcone = document.createElement('i');
        deleteIcone.classList.add("fas", "fa-trash", "delete-icone");
        li.appendChild(deleteIcone);
        ul.appendChild(li);
        deleteIcone.addEventListener("click", deleteItem);
    } else {
        alert('you have to write something');
    }
}

function addTaskWithEnter(event) {
    if(event.which === 13) {
        addTask();
    }
}

input.addEventListener('keypress', addTaskWithEnter)

