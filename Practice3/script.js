const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

async function loadTasks() {
    if (tasks.length === 0) {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const data = await response.json();

        tasks = data.map(task => ({
            id: task.id,
            title: task.title,
            completed: task.completed
        }));

        saveTasks();
    }

    renderTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (currentFilter === "completed") return task.completed;
        if (currentFilter === "active") return !task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const div = document.createElement("div");
        div.className = `task ${task.completed ? "completed" : ""}`;

        div.innerHTML = `
            <div class="task-left">
                <input type="checkbox" ${task.completed ? "checked" : ""}>
                <span>${task.title}</span>
            </div>
            <div class="task-buttons">
                <button class="remind-btn">⏰</button>
                <button class="delete-btn">Удалить</button>
            </div>
        `;

        const checkbox = div.querySelector("input");
        const deleteBtn = div.querySelector(".delete-btn");
        const remindBtn = div.querySelector(".remind-btn");

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        remindBtn.addEventListener("click", () => {
            setTimeout(() => {
                alert(`⏰ Напоминание: ${task.title}`);
            }, 5000);
        });

        taskList.appendChild(div);
    });
}

addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text === "") return;

    tasks.unshift({
        id: Date.now(),
        title: text,
        completed: false
    });

    taskInput.value = "";
    saveTasks();
    renderTasks();
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

loadTasks();