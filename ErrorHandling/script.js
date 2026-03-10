// 1
function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}

console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));

// 2
function transfromJSON(jsonString) {
    try {
        const obj = JSON.parse(jsonString);
        return obj;
    } catch (error) {
        console.error("Ошибка при парсинге JSON:", error.message);
    }
}

console.log(transfromJSON('{"name":"Кристина","age":22}'));
console.log(transfromJSON('invalid JSON'));

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