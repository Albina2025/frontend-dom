const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const clearBtn = document.getElementById("clearBtn")
const taskList = document.getElementById("taskList")

addBtn.addEventListener("click", () => {
    if (input.value.trim() !=="") {
        const li = document.createElement("li");
        li.textContent = input.value;
        taskList.appendChild(li);
        input.value = "";
    }
});

clearBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
})