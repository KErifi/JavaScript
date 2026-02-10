//1
const numbers = [2, 3];

const squares = numbers.map(num => num ** 2);

console.log(squares);

//2
const arr = [1, 2, 2, 3, 4, 5, 5, 5, 6];

const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(uniqueArr);

//3
const num = [1, 2, 3];

const sum = num.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);

//4
const count = [1, 2, 3, 4, 5];

const reversed = [];

count.forEach(item => {
  reversed.unshift(item);
});

console.log(reversed);

//5 Строки
let strLet = "Привет";

const strConst = "Мир";

console.log(strLet);   // "Привет"

console.log(strConst); // "Мир"

// Изменяем значения
strLet = "Пока";       // Работает, потому что let позволяет переопределять

console.log(strLet);   // "Пока"

strConst = "Вселенная"; // Ошибка! Нельзя переопределять const

// let позволяет переопределять значение переменной. const создаёт константу, её нельзя присвоить заново.

// Массивы
let arrLet = [1, 2, 3];

const arrConst = [4, 5, 6];

// Изменяем содержимое массивов
arrLet.push(4);        // Добавляем элемент

arrConst.push(7);      // Добавляем элемент

console.log(arrLet);   // [1, 2, 3, 4]

console.log(arrConst); // [4, 5, 6, 7]

arrLet.pop();          // Удаляем элемент

arrConst.pop();        // Удаляем элемент

console.log(arrLet);   // [1, 2, 3]

console.log(arrConst); // [4, 5, 6]

// Пытаемся переопределить массивы
arrLet = [10, 20];     // Работает, let позволяет

arrConst = [40, 50];   // Ошибка! const нельзя переопределять

/* Содержимое массивов можно изменять (добавлять/удалять элементы) и для let, и для const. 
Переопределить саму переменную можно только если она объявлена через let. const запрещает присваивание нового массива
let — гибкая переменная, её можно менять и содержимое, и саму переменную.
const — константа, её нельзя переопределять, но если это объект или массив, его внутренние элементы можно менять. 
Это работает потому, что const защищает ссылку на объект, а не сам объект.
*/