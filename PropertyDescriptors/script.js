// 1
const user = {};

Object.defineProperty(user, 'name', {
  value: 'Кристина',
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(user, 'age', {
  value: 22,
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(user, 'city', {
  value: 'Санкт-Петербург',
  writable: false,
  enumerable: true,
  configurable: false
});

console.log('До изменения:', user);

user.name = 'Анна';
user.age = 30;
user.city = 'Moscow';

console.log('После попытки изменения:', user);

// 2
const person = {
  name: 'Кристина',
  age: 22
};

Object.defineProperty(person, 'password', {
  value: '123456',
  enumerable: false,
  writable: true,
  configurable: true
});

console.log('Объект целиком:', person);

for (let key in person) {
  console.log(key, person[key]);
}