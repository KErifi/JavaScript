//1
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('level'));

console.log(isPalindrome('hello'));

//2
function getShortestWord(sentence) {
  const words = sentence.split(' ');
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }

  return shortest;
}

console.log(getShortestWord("Утром солнце светило ярко"));

//3
function createPhoneNumber(number) {
  const str = number.toString();

  if (str.length !== 10) {
    return "Неверный формат числа";
  }

  return `8 (${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}`;
}

console.log(createPhoneNumber(1234567890));

//4
function findMinMax(arr) {
  if (arr.length === 0) {
    return null;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { min, max };
}

console.log(findMinMax([5, 2, 9, 1, 7]));

//5
function bubbleSort(arr) {
  const sortedArr = [...arr];
  const n = sortedArr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  return sortedArr;
}

console.log(bubbleSort([5, 2, 9, 1, 7]));