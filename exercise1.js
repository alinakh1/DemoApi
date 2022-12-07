window.onload = function(){
let todoButton = document.getElementById("todoButton");
todoButton.onclick = onClickTodoButton
}

function onClickTodoButton(){
    let table = document.getElementById("userTable");
    let todoInput = document.getElementById("todoInput").value;

fetch("http://jsonplaceholder.typicode.com/todos/" + todoInput)
 .then(response => response.json())
 .then(data => {

    table.innerHTML = data.title;
 });
 }

