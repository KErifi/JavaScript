let name = "Кристина"; // строка (string)

let age = 22; // число (number)

let isDesigner = true; // логическое значение (boolean)

let hobbies = ["рисование", "собирание конструкторов"]; // массив (object)

let person = {                 
    profession: "Дизайнер",
    experience: 5
}; // объект (object)

let job = null; // null (object)

let undefinedVar; // undefined

console.log (typeof name);

console.log (typeof age);   

console.log (typeof isDesigner);  

console.log (typeof hobbies);   

console.log (typeof person);  

console.log (typeof job);  

console.log (typeof undefinedVar);

let a = 10;

let b = a; // b получает копию значения 10

b = 20; // изменяем b

console.log(a); // не меняется

console.log(b); // меняется на значение 20

let numbers1 = [1, 2, 3];

let numbers2 = numbers1; // numbers2 хранит ссылку на тот же массив

numbers2.push(4); // изменяем массив через numbers2

console.log(numbers1); // [1, 2, 3, 4] — numbers1 тоже изменился, так как numbers1 = numbers2

console.log(numbers2); // [1, 2, 3, 4]

let original = [1, 2, 3];

let copy = [...original]; // отдельный массив

copy.push(4);

console.log(original); // [1, 2, 3]

console.log(copy);     // [1, 2, 3, 4]
