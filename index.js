function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";

        li.addEventListener("click", function () {
            this.classList.toggle("completed");
        });

        li.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            this.remove();
        });
    }
}
