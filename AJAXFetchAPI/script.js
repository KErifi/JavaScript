// 1
const form = document.getElementById('postForm');
const result = document.getElementById('result');
const postMessage = document.getElementById('postMessage');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const newPost = {
        userId: document.getElementById('userId').value,
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw new Error('Ошибка при создании поста');
        }

        const data = await response.json();

        result.innerHTML = `
          <h3>Ответ сервера:</h3>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        `;

        postMessage.textContent = '';

    } catch (error) {
        postMessage.textContent = error.message;
    }
});

// 2 и 3
const button = document.getElementById('loadPosts');
const postsContainer = document.getElementById('postsContainer');
const message = document.getElementById('message');

button.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

        if (!response.ok) {
            throw new Error('Ошибка при загрузке постов');
        }

        const posts = await response.json();

        postsContainer.innerHTML = '';
        message.textContent = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.id = `post-${post.id}`;

            const title = document.createElement('h3');
            title.textContent = post.title;

            const body = document.createElement('p');
            body.textContent = post.body;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';

            deleteButton.addEventListener('click', async () => {
                try {
                    const deleteResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
                        method: 'DELETE'
                    });

                    if (!deleteResponse.ok) {
                        throw new Error('Ошибка при удалении поста');
                    }

                    postElement.remove();

                } catch (error) {
                    message.textContent = error.message;
                }
            });

            postElement.appendChild(title);
            postElement.appendChild(body);
            postElement.appendChild(deleteButton);

            postsContainer.appendChild(postElement);
        });

    } catch (error) {
        message.textContent = error.message;
    }
});

// 4
const updateForm = document.getElementById('updateUserForm');
const userResult = document.getElementById('userResult');
const userMessage = document.getElementById('userMessage');

updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userId = document.getElementById('editUserId').value;

    const updatedUser = {
        id: userId,
        name: document.getElementById('editName').value,
        email: document.getElementById('editEmail').value
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        });

        if (!response.ok) {
            throw new Error('Ошибка при обновлении пользователя');
        }

        const data = await response.json();

        userResult.innerHTML = `
          <h3>Обновленные данные:</h3>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        `;

        userMessage.textContent = '';

    } catch (error) {
        userMessage.textContent = error.message;
    }
});

// PUT полностью заменяет ресурс на сервере - сервер считает, что ты отправляешь новую версию объекта, и все поля должны быть указаны,
// иначе они могут пропасть. PATCH меняет только указанные поля, оставляя остальные без изменений.
