// 1
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 1,
                name: 'Кристина',
                role: 'Дизайнер'
            };
            resolve(user);
        }, 2000);
    });
}

getUserData()
    .then(user => {
        console.log('Полученные данные пользователя:', user);
        return `Пользователь ${user.name} с ролью ${user.role}`;
    })
    .then(message => {
        console.log('Сообщение:', message);
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);
    });

// 2
function getBookData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ title: 'Война и мир', year: 1869 });
        }, 3000);
    });
}

function getAuthorData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Лев Толстой', nationality: 'Русский' });
        }, 5000);
    });
}

Promise.all([getBookData(), getAuthorData()])
    .then(results => {
        const [book, author] = results;
        console.log('Информация о книге:', book);
        console.log('Информация об авторе:', author);
        console.log('Объединённые данные:', { ...book, ...author });
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);
    });

// 3
function getRandomData1() {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Данные 1 (время ожидания ${delay} мс)`);
        }, delay);
    });
}

function getRandomData2() {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Данные 2 (время ожидания ${delay} мс)`);
        }, delay);
    });
}

Promise.race([getRandomData1(), getRandomData2()])
    .then(result => {
        console.log('Первый завершившийся промис:', result);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });