// 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2

let i = 1;
let sum = 0;

while (i <= 100) {
    sum += i;
    i++;
}

console.log("Сумма чисел от 1 до 100 равна:", sum);

// 3 - цикл

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

// алгоритм с проверкой делителей до квадратного корня числа

for (let number = 2; number <= 100; number++) {
    let isPrime = true;
    let sqrtNumber = Math.sqrt(number);

    for (let i = 2; i <= sqrtNumber; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (check) {
        console.log(number);
    }
}