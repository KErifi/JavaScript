// 1
// Класс Person
class Person1 {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}

class Student extends Person1 {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`);
  }
}

const student = new Student("Кристина", 2);
student.introduce(); 

console.log(Student.prototype);

// 2
class Person2 {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}

class Employee extends Person2 {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  work() {
    console.log(`Я работаю на позиции ${this.position}`);
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}, и я работаю на позиции ${this.position}`);
  }
}

const employee = new Employee("Кристина", "дизайнер");
employee.introduce();
employee.work();

console.log(Employee.prototype);

// 3
const Vehicle = {
  move() {
    console.log("Транспортное средство движется");
  }
};

const Car = Object.create(Vehicle);

Car.drive = function() {
  console.log("Машина едет");
};

Vehicle.move();
Car.move();
Car.drive();

console.log(Object.getPrototypeOf(Car) === Vehicle);