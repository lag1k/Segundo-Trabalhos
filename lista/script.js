function add() {

    input = document.getElementById("Input").value; //pegando o id taskInput no documento linkado

    if (input === "") { //função onde se a caixa de texto estiver vazia ele alerta
        return;
    }

    ul = document.getElementById("List"); // localiza a lista de tarefas
    li = document.createElement("li"); // cria um novo elemento na lista de tarefas
    li.appendChild(document.createTextNode(input)); // puxa o texto na caixa de texto para o novo elemento criado
    ul.appendChild(li);
    document.getElementById("Input").value = "";

    saveList()
}

function completo(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }

    saveList()
}

function limpar(){
    var ul = document.getElementById("List");
    ul.innerHTML = "";

    saveList()
}

function remover(){
    var ul = document.getElementById("List");
    var completedTasks = ul.querySelectorAll(".completed");
    completedTasks.forEach(function(task){
        task.remove();
    });
}

function trocar(){
    var ul = document.getElementById("List");

    if(window.getComputedStyle(ul).flexDirection === "column"){
    ul.style.flexDirection = "row";
    }else{
    ul.style.flexDirection = "column";
    }
}

function saveList() {
    var ul = document.getElementById("List");
    var tasks = [];
    ul.querySelectorAll("li").forEach(function(task) {
        tasks.push(task.textContent);
    });
    localStorage.setItem("List", JSON.stringify(tasks));
}

window.onload = function() {
    var storedTasks = localStorage.getItem("List");
    if (storedTasks) {
        var tasks = JSON.parse(storedTasks);
        var ul = document.getElementById("List");
        tasks.forEach(function(taskText) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(taskText));
            ul.appendChild(li);
        });
    }
}