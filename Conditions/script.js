const number = Number(prompt("Введите число"));

if (number > 0) {
    console.log('Положительное число');
} else if (number < 0) {
    console.log('Отрицательное число');
} else {
    console.log('Число равно нулю');
}

const height = Number(prompt("Введите рост в метрах (например, 1.75)"));

const weight = Number(prompt("Введите вес в килограммах"));

let bmi = weight / (height ** 2);

console.log("Ваш ИМТ", bmi);

if (bmi < 18.5) {
    console.log("Недостаточная масса тела");
} else if (bmi < 25) {
    console.log("Нормальная масса тела");
} else if (bmi < 30) {
    console.log("Избыточная масса тела");
} else {
    console.log("Ожирение");
}

const month = Number(prompt("Введите число от 1 до 12"));

let monthName;

switch (month) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        console.log('Ошибка: введите число от 1 до 12');
}

console.log(monthName);

const dayNumber = Number(prompt("Введите номер дня недели от 1 до 7"));

switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Будний день");
        break;
    case 6:
    case 7:
        console.log("Выходной день");
        break;
    default:
        console.log("Ошибка: введите число от 1 до 7");
}