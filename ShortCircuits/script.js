// 1
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// 2
function outer() {
    let a = 1;

    function middle() {
        let b = 2;

        function inner() {
            let c = 3;
            console.log(a, b, c);
        }

        inner();
    }

    middle();
}

outer();

// 3
function createFibonacciCalculator() {
    const cache = { 0: 0, 1: 1 };

    return function (n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }

        for (let i = 2; i <= n; i++) {
            if (cache[i] === undefined) {
                cache[i] = cache[i - 1] + cache[i - 2];
            }
        }

        return cache[n];
    };
}

const fibonacci = createFibonacciCalculator();

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(50));