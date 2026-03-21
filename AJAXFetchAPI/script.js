// 1
const form = document.getElementById('postForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const newPost = {
        userId: document.getElementById('userId').value,
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });

    const data = await response.json();

    result.innerHTML = `
        <h3>Ответ сервера:</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `;
});

// 2 и 3
const button = document.getElementById('loadPosts');
const postsContainer = document.getElementById('postsContainer');

button.addEventListener('click', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await response.json();

    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');

        postElement.id = `post-${post.id}`;

        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button onclick="deletePost(${post.id})">Удалить</button>
          <hr>
        `;

        postsContainer.appendChild(postElement);
    });
});

async function deletePost(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    });

    document.getElementById(`post-${id}`).remove();
}

// 4
const updateForm = document.getElementById('updateUserForm');
const userResult = document.getElementById('userResult');

updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userId = document.getElementById('editUserId').value;

    const updatedUser = {
        id: userId,
        name: document.getElementById('editName').value,
        email: document.getElementById('editEmail').value
    };

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    });

    const data = await response.json();

    userResult.innerHTML = `
        <h3>Обновленные данные:</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `;
});

// PUT полностью заменяет ресурс на сервере - сервер считает, что ты отправляешь новую версию объекта, и все поля должны быть указаны, 
// иначе они могут пропасть. PATCH меняет только указанные поля, оставляя остальные без изменений.
