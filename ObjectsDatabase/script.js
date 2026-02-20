//1
const person = {
  name: "Кристина",
  age: 22,
  isStudent: false,
  hobbies: ["рисование", "игры", "чтение"],
  address: {   
    city: "Санкт-Петербург",
    country: "Россия"
  },
  greet: function() {
    return `Привет, меня зовут ${this.name}`;
  }
};

console.log(person);

console.log(person.name);
console.log(person.age);

console.log(person["isStudent"]);
console.log(person["hobbies"]);

for (let key in person) {
  console.log(key, ":", person[key]);
}

console.log(person.greet());

//2
person.job = "Дизайнер";

person['age'] = 29;

delete person.isStudent;

onsole.log(person);


console.log(person.name);
console.log(person.age);
console.log(person.job);

console.log(person["hobbies"]);
console.log(person["address"]);

for (let key in person) {
  console.log(key, ":", person[key]);
}

console.log(person.greet());