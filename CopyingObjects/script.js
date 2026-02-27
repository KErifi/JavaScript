// 1
const student = {
    name: "Кристина",
    age: 22,
    grades: [5, 4, 5],
    address: {
        city: "Санкт-Петербург",
        street: "Веденеева"
    },
    hobbies: ["рисование", "игры"]
};

console.log("Оригинал student:", student);

const studentCopy1 = Object.assign({}, student);

const studentCopy2 = { ...student };

studentCopy1.grades.push(3);
studentCopy1.address.street = "Арбат";

studentCopy2.hobbies.push("танцы");
studentCopy2.address.city = "Москва";

console.log("studentCopy1:", studentCopy1);
console.log("studentCopy2:", studentCopy2);

console.log("Оригинал student после изменений:", student);

// При поверхностном кпировании вложенные массивы и объекты не копируются, а ссылаются на те же самые, что и в оригинале.
// Поэтому, когда меняем что-то внутри этих вложенных структур в копии, это поменяло и оригинал.

// 2
const user = {
    name: "Alice",
    age: 30,
    address: {
       city: "Wonderland",
       zip: "12345"
    },
    sayHi: () => console.log('Hello, Alice!')
};

const userCopy = JSON.parse(JSON.stringify(user));

console.log(userCopy);

userCopy.sayHi();

// Когда ты копируешь объект через JSON.stringify + JSON.parse, функции внутри теряются.
// Потому что JSON умеет хранить только данные, а не поведение. Поэтому метод в копии не работает.

// 3
function deepCopy(obj) {
    // Если obj null или не объект, просто возвращаем его
    // Это базовый случай рекурсии — нам не нужно копировать примитивы, они уже независимы
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Создаем пустой объект или массив, в зависимости от того, что пришло на вход
    // Array.isArray проверяет, массив ли obj
    const copy = Array.isArray(obj) ? [] : {};

    // Проходим по всем ключам объекта
    for (let key in obj) {
        // Проверяем, что ключ действительно принадлежит объекту, а не прототипу
        if (obj.hasOwnProperty(key)) {
            // Рекурсивно копируем каждое свойство
            // Если свойство — объект или массив, deepCopy вернёт его глубокую копию
            // Если свойство — примитив, вернётся само значение
            copy[key] = deepCopy(obj[key]);
        }
    }

    // Возвращаем полностью скопированный объект или массив
    return copy;
}

// Пример использования
const original = { a: 1, b: { c: 2 } };

// Создаем глубокую копию
const deepCopyObj = deepCopy(original);

// Меняем значение во вложенном объекте копии
deepCopyObj.b.c = 3;

// Проверяем оригинал — он остался неизменным, потому что копия была глубокой
console.log(original.b.c); // 2