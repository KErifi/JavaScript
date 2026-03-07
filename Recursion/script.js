// 1
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

// 2
function findMax(arr, index = 0) {
  if (index === arr.length - 1) {
    return arr[index];
  }

  const maxOfRest = findMax(arr, index + 1);

  return arr[index] > maxOfRest ? arr[index] : maxOfRest;
}

const num = [3, 7, 2, 9, 5];
console.log(findMax(num));

// 4
function createFibonacciCalculator() {
  const cache = {};

  function fibonacci(n) {
    if (n in cache) {
      return cache[n];
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    const result = fibonacci(n - 1) + fibonacci(n - 2);

    cache[n] = result;

    return result;
  }

  return fibonacci;
}

const fibonacci = createFibonacciCalculator();

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(50));