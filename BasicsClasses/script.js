// 1
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getInfo() {
    console.log(`"${this.title}" — ${this.author}, ${this.pages} стр.`);
  }
}

const book1 = new Book("Мастер и Маргарита", "Михаил Булгаков", 480);
book1.getInfo();

// 2
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}, Email: ${this.email}`);
  }
}

const user1 = new User("Анна", "anna@example.com");
const user2 = new User("Иван", "ivan@example.com");
const user3 = new User("Мария", "maria@example.com");

user1.displayInfo();
user2.displayInfo();
user3.displayInfo();

// 3
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }

  set width(value) {
    if (value <= 0) {
      console.error('Ширина должна быть положительным числом.');
    } else {
      this._width = value;
    }
  }

  get width() {
    return this._width;
  }

  set height(value) {
    if (value <= 0) {
      console.error('Высота должна быть положительным числом.');
    } else {
      this._height = value;
    }
  }

  get height() {
    return this._height;
  }
}

const myRect = new Rectangle(5, 10);

console.log(myRect.area);
console.log(myRect.perimeter);

myRect.height = -4;
console.log(myRect.height);