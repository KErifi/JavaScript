// 1
document.getElementById("title").textContent = "Новый текст";

// 2
const box = document.querySelector(".box");
box.style.background = "black";
box.style.color = "white";

// 3
const p = document.createElement("p");
p.textContent = "Новый параграф";
document.body.appendChild(p);

// 4
document.getElementById("removeMe").remove();

// 5
const link = document.getElementById("link");
link.href = "https://i.pinimg.com/1200x/7c/7e/8c/7c7e8c4485518257057ad7092b760579.jpg";
console.log(link.href);

// 6
const newDiv = document.createElement("div");
newDiv.textContent = "Новый элемент";
newDiv.classList.add("box");
document.body.appendChild(newDiv);

// 7
const toggleEl = document.getElementById("toggle");
toggleEl.classList.toggle("active");
console.log(toggleEl.classList.contains("active"));