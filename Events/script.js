// 1
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', function () {
    this.textContent = "Текст изменён!";
});

// 2
const hoverBlock = document.getElementById('hoverBlock');
hoverBlock.addEventListener('mouseover', function () {
    this.style.transform = "scale(1.2)";
});
hoverBlock.addEventListener('mouseout', function () {
    this.style.transform = "scale(1)";
});

// 3
const textInput = document.getElementById('textInput');
textInput.addEventListener('keyup', function (event) {
    console.log("Отпущена клавиша:", event.key);
});

// 4
const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Форма успешно отправлена!");
});

// 5
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});