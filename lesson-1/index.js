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

// Dom

const lights = document.querySelectorAll('.light');
let index = 0;

document.getElementById('starBtn').addEventListener('click', () => {
    setInterval(() => {
        lights.forEach(light => light.classList.remove('active'));
        lights[index].classList.add('active');
        index = (index + 1) % 3;
    }, 1000);
});