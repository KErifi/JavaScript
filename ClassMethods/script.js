// 1
class Counter {
  #count;

  constructor(initialValue = 0) {
    this.#count = initialValue;
  }

  increment() {
    this.#count++;
  }

  decrement() {
    this.#count--;
  }

  getValue() {
    return this.#count;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getValue());

// 2
class EmailValidator {
  static isValid(email) {
    return typeof email === 'string' && email.includes('@');
  }
}

console.log(EmailValidator.isValid('test@mail.com'));
console.log(EmailValidator.isValid('testmail.com'));
console.log(EmailValidator.isValid(''));

// 3
class Order {
  #items;

  constructor(items) {
    this.#items = items;
  }

  #calculateTotal() {
    return this.#items.reduce((sum, price) => sum + price, 0);
  }

  getTotal() {
    return this.#calculateTotal();
  }
}

const order = new Order([100, 250, 50]);

console.log(order.getTotal());