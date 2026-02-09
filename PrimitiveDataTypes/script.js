const str = "JavaScript is fun!";

console.log(str.includes("fun"));

const value = 0;

if (!value) {
  console.log("Значение является falsy");
}

const firstName = "John";
const lastName = "Doe";
const occupation = "software developer";

console.log(`Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`);

console.log(null == undefined);   // true (==) приводит типы, то есть при нестрогом сравнении оба этих значения означают пусто
console.log(null === undefined);  // false (===) сравнивает как есть, то есть строгое сравнение. Оно просто смотрит: типы разные, значения разные

console.log(1 + '1'); // "11", так как есть строка, число преобразуется тоже в строку и происходит не сложение, а склеивание