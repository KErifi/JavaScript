//1

//Исправление
function hasEvenNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

console.log(hasEvenNumber([1, 3, 4, 5])); // true

//2

//Исправление
function calculateAverage(numbers) {

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) { 
    sum += numbers[i];
  }

  return sum / numbers.length;
}

console.log(calculateAverage([2, 4, 6])); // 4

//3

//Исправление
function findLargestNumber(arr) {

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargestNumber([-10, -20, -30])); // -10
