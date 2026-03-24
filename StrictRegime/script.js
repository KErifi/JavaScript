// 1
/*
"use strict";

function addNumbers(a, b) {
    result = a + b;  // ошибка: переменная не объявлена
    return result;
}

console.log(addNumbers(2, 3));
*/

"use strict";

function addNumbers(a, b) {
    let result = a + b;
    return result;
}

console.log(addNumbers(2, 3));

// 2
/*
"use strict";

function sum(a, a) { // два параметра с одинаковым именем
    return a + a;
}

console.log(sum(2, 3));
/*

"use strict";

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));

// 3
/*
function showThis() {
    console.log(this);
}

showThis();
*/

"use strict";

function showThis() {
    console.log(this);
}

showThis();

// В строгом режиме this не ссылается на глобальный объект, а становится undefined. 
// Строгий режим делает использование this безопаснее и предотвращает случайное изменение глобальных переменных.

// 4
/*
"use strict";

let obj = {};
Object.defineProperty(obj, "fixedProp", {
    value: 42,
    configurable: false
});

try {
    delete obj.fixedProp;
} catch (e) {
    console.log(e);
}
*/

"use strict";

let obj = {};

obj.toString = function() {
    return "Моя версия toString";
};

console.log(obj.toString());

console.log({}.toString());

// Не работает, потому что встроенные методы вроде toString нельзя удалить. 
// В строгом режиме попытка удалить их просто не сработает или вызовет ошибку. 
// Чтобы избежать проблем, вместо удаления нужно создавать свою версию метода на объекте.