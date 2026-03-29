// 1 и 2
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    showInfo() {
        console.log(`Автомобиль: ${this.brand} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }

    showInfo() {
        console.log(
            `Электромобиль: ${this.brand} ${this.model}, батарея: ${this.batteryCapacity} кВт⋅ч`
        );
    }
}

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("BMW", "X5");

const tesla = new ElectricCar("Tesla", "Model 3", 75);
const nissan = new ElectricCar("Nissan", "Leaf", 40);

car1.showInfo();
car2.showInfo();
tesla.showInfo();
nissan.showInfo();

// 3
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} издает звук`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} говорит: Гав-гав`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} говорит: Мяу-мяу`);
    }
}

class Cow extends Animal {
    makeSound() {
        console.log(`${this.name} говорит: Му-у`);
    }
}

const dog = new Dog("Бобик");
const cat = new Cat("Мурка");
const cow = new Cow("Зорька");

const animals = [dog, cat, cow];

animals.forEach(animal => animal.makeSound());