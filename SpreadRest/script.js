//1
function average(...numbers) {
  if (numbers.length === 0) return 0;
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log(average(10,20,30))

//2
function formatUser({ name, age, country }) {
  return `Имя: ${name}, Возраст: ${age}, Страна: ${country}`;
}

const user = {name: "Кристина", age: 22, country: "Россия"};

console.log(formatUser(user));

//3
const human = {
  name: "Иван",
  age: 30,
  address: {
    city: "Москва",
    country: "Россия"
  },
  hobbies: ["спорт", "музыка", "путешествия"]
};

const {name, address: { city }, hobbies: [firstHobby]} = human;

console.log(name);
console.log(city);
console.log(firstHobby);

//4
const numbers = [2, 3, 4];

const newNumbers = [0, 1, ...numbers, 5, 6];

console.log(newNumbers);

//5
function removeProperty(obj, propertyToRemove) {
  const { [propertyToRemove]: removed, ...rest } = obj;
  return rest;
}

const product = {id: 101, title: "Ноутбук", price: 75000, inStock: true};

const updatedProduct = removeProperty(product, "price");

console.log(updatedProduct);