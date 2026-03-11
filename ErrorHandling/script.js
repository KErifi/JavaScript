// 1
function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
        return undefined;
    }
}

console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));

// 2
function transformJSON(jsonString) {
    try {
        const obj = JSON.parse(jsonString);
        return obj;
    } catch (error) {
        console.error("Ошибка при парсинге JSON:", error.message);
        return undefined;
    }
}

console.log(transformJSON('{"name":"Кристина","age":28}')); 
console.log(transformJSON('invalid JSON'));

// 3
function checkAccess(age) {
    try {
        if (age < 18) {
            throw new Error("Доступ запрещен");
        }
        console.log("Доступ разрешен");
    } catch (error) {
        console.error(error.message);
    }
}

checkAccess(20);
checkAccess(16);