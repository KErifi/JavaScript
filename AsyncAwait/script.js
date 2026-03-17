// 1
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  await delay(2000);
  console.log("Задержка завершена");
}

run();

// 2
async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

fetchUserData().then(user => {
  console.log(user);
});