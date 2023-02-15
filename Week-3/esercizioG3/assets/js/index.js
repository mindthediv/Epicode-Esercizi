const btnAdd = document.getElementById("aggiungi");
const taskList = document.getElementById("lista");
const btnClear = document.getElementById("cancella");

btnAdd.addEventListener("click", function (event) {
    const newTask = document.getElementById("taskInput");
    if (!newTask.value) {
        alert("Inserisci un nome per il task");
        return;
    } else {
        const taskItem = document.createElement("li");
        taskItem.textContent = newTask.value;
        taskItem.setAttribute('onclick', "style.text-decoration = 'line-through'")
        taskList.appendChild(taskItem);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Elimina";
        taskItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        
        });
    }
    newTask.value = '';
});

btnClear.addEventListener('click', () => taskList.innerHTML = '');