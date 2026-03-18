// 1
const outerDiv = document.querySelector('.outer');
const middleDiv = document.querySelector('.middle');
const innerDiv = document.querySelector('.inner');

outerDiv.addEventListener('click', () => {
  console.log('Outer div clicked');
});

middleDiv.addEventListener('click', () => {
  console.log('Middle div clicked');
});

innerDiv.addEventListener('click', () => {
  console.log('Inner div clicked');
});

// 2
/*
const outerDiv = document.querySelector('.outer');
const middleDiv = document.querySelector('.middle');
const innerDiv = document.querySelector('.inner');

outerDiv.addEventListener('click', () => {
  console.log('Outer div clicked');
});

middleDiv.addEventListener('click', (event) => {
  console.log('Middle div clicked');
  event.stopPropagation();  // остановка всплытия
});

innerDiv.addEventListener('click', () => {
  console.log('Inner div clicked');
});
*/

// 3
const form = document.getElementById('myForm');

form.addEventListener('input', (event) => {
  if (event.target.tagName === 'INPUT') {
    if (event.target.value.length > 20) {
      console.log(`${event.target.name}: больше 20 символов`);
    } else {
      console.log(`${event.target.name}: корректно`);
    }
  }
});