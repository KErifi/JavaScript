const example1 = 2 * 2 + 2;

console.log(example1);

const degToRad = deg => deg * Math.PI / 180;

const example2 = Math.round(
  Math.sin(degToRad(54)) * Math.cos(degToRad(16)) ** 2
);

console.log(example2);

const example3 = Math.round(
  (
    (16 * Math.sqrt(13.2 * 71.90)) / (2.4 / 7 ** 4) + 3 * Math.sqrt(49)
  ) * 2 ** 7
);

console.log(example3);

let a = 12;

let b = 7;

let c = 0;

let d = 555;

function check(num) {
  if (num % 2 === 0) {
    console.log(num + " - чётное число");
  } else {
    console.log(num + " - нечётное число");
  }
}

check(a);
check(b);
check(c);
check(d);

let name = "Kristina";

if (!name) {
  console.log("Hello, Guest!");
} else {
  console.log(`Hello, ${name}!`);
}
