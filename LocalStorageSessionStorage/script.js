// 1
const form = document.getElementById('contactForm');
const output = document.getElementById('output');

function displayContact() {
    const savedData = localStorage.getItem('contact');

    if (savedData) {
        const contact = JSON.parse(savedData);

        output.innerHTML = `
                    Имя: ${contact.name}<br>
                    Телефон: ${contact.phone}<br>
                    Email: ${contact.email}
                `;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const contact = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };

    localStorage.setItem('contact', JSON.stringify(contact));

    displayContact();
    form.reset();
});

displayContact();

// 2
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

function getExpenses() {
    return JSON.parse(localStorage.getItem('expenses')) || [];
}

function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function displayExpenses() {
    const expenses = getExpenses();
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');

        li.textContent = `${expense.description} | ${expense.amount} ₽ | ${expense.date} `;

        const button = document.createElement('button');
        button.textContent = 'Удалить';

        button.addEventListener('click', function () {
            deleteExpense(index);
        });

        li.appendChild(button);

        expenseList.appendChild(li);
    });
}

expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const expense = {
        description: document.getElementById('description').value,
        amount: document.getElementById('amount').value,
        date: document.getElementById('date').value
    };

    const expenses = getExpenses();

    expenses.push(expense);

    saveExpenses(expenses);

    displayExpenses();

    expenseForm.reset();
});

function deleteExpense(index) {
    const expenses = getExpenses();

    expenses.splice(index, 1);

    saveExpenses(expenses);

    displayExpenses();
}

displayExpenses();

// 3
const timer = document.getElementById('timer');

let seconds = Number(sessionStorage.getItem('activeTime')) || 0;

function updateTimer() {
    seconds++;

    sessionStorage.setItem('activeTime', seconds);

    timer.textContent = seconds + ' сек';
}

timer.textContent = seconds + ' сек';

setInterval(updateTimer, 1000);