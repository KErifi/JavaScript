// 1
const person = {
  name: "Кристина",
  age: 22,
  getInfo() {
    return `${this.name}, ${this.age} года`;
  }
};

console.log(person.getInfo());

const info = person.getInfo;
console.log(info());

// Сначала this указывает на объект user, поэтому метод правильно возвращает имя и возраст. 
// Но когда мы присваиваем этот метод другой переменной и вызываем, функция теряет связь с объектом.

// 2
// Когда мы вызываем student.greet(), функция вызывается через объект, поэтому this = student и выводится имя. 
// В student.delayedGreet() мы передаём функцию в setTimeout отдельно, без объекта, поэтому this теряется и выводится undefined.
// Чтобы исправить, можно использовать стрелочную функцию

const student = {
  name: 'Alice',

  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function() {
    setTimeout(() => this.greet(), 1000);
  }
};

student.greet();
student.delayedGreet();

// 3
function introduce(greeting, punctuation) {
  console.log(`${greeting}, меня зовут ${this.name}${punctuation}`);
}

const person1 = { name: 'Анна' };
const person2 = { name: 'Борис' };

introduce.call(person1, 'Привет', '!');

introduce.apply(person2, ['Здравствуйте', '.']);

const introduceAnna = introduce.bind(person1, 'Хай', '!!!');
introduceAnna();

// 4
// Когда мы делаем sayHello.bind(admin), создаётся новая функция, у которой this равен admin. 
// Если потом пытаться сделать bind(user), новый контекст не заменит старый. Поэтому обе функции выводят Hello, Bob.
// Если хотим использовать другой объект, нужно вызывать sayHello через call или apply.

function sayHello() {
  console.log('Hello, ' + this.name);
}

const admin = { name: 'Bob' };
const user = { name: 'John' };

sayHello.call(admin);
sayHello.call(user);