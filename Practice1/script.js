const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const answersContainer = document.getElementById('answers');
const progressText = document.getElementById('progress');
const scoreText = document.getElementById('score-text');

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "Как называется этот фильм?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%92%D0%B0%D1%81%D0%B0%D0%B1%D0%B8-1024x603.jpg",
        answers: [{ text: "Код да Винчи", correct: false },
        { text: "Васаби", correct: true },
        { text: "Леон", correct: false },
        { text: "Багровые реки", correct: false }]
    },

    {
        question: "Из какого фильма этот кадр?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/11-%D0%9D%D0%B5%D0%BF%D1%80%D0%B8%D0%BA%D0%B0%D1%81%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5-1024x681.jpg",
        answers: [{ text: "1+1", correct: true },
        { text: "Волк с Уолл Стрит", correct: false },
        { text: "Форест Гамп", correct: false }]
    },

    {
        question: "Как называется этот фильм?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/3-%D0%BC%D0%B5%D1%82%D1%80%D0%B0-%D0%BD%D0%B0%D0%B4-%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B5%D0%BC-%D0%BD%D0%B5%D0%B1%D0%B0-1024x683.jpg",
        answers: [{ text: "Босиком по мостовой", correct: false },
        { text: "Зажигание", correct: false },
        { text: "3 метра над уровнем неба", correct: true },
        { text: "Форсаж", correct: false }]
    },

    {
        question: "Это кадр из фильма Форсаж. Как звали героя которого сыграл Вин Дизель?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%A4%D0%BE%D1%80%D1%81%D0%B0%D0%B6-1024x675.jpg",
        answers: [{ text: "Антонио Маргарети", correct: false },
        { text: "Стас Барецкий", correct: false },
        { text: "Доминик Торетто", correct: true },
        { text: "Доминик Декоко", correct: false }]
    },

    {
        question: "Как называется этот фильм?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/v-%D0%B7%D0%BD%D0%B0%D1%87%D0%B8%D1%82-%D0%B2%D0%B5%D0%BD%D0%B4%D0%B5%D1%82%D1%82%D0%B0-1024x690.jpg",
        answers: [{ text: "Оно", correct: false },
        { text: "Анонимные хакеры", correct: false },
        { text: "V значит вендетта", correct: true },
        { text: "Робин гуд", correct: false }]
    },

    {
        question: "Как называется этот фильм?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%91%D1%80%D0%B0%D1%82-2-1024x576.jpg",
        answers: [{ text: "Бригада", correct: false },
        { text: "Брат 2", correct: true },
        { text: "Отморозки", correct: false },
        { text: "Бумер", correct: false }]
    },

    {
        question: "Из какого фильма этот кадр?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%91%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%D1%80%D1%83%D0%BA%D0%B0-1024x635.jpg",
        answers: [{ text: "Бриллиантовая рука", correct: true },
        { text: "Степные волки", correct: false },
        { text: "Иван Васильевич меняет профессию", correct: false },
        { text: "Кавказская пленница", correct: false }]
    },

    {
        question: "Как звали забравшихся в дом преступников в фильме «Один дома»?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%9E%D0%B4%D0%B8%D0%BD-%D0%B4%D0%BE%D0%BC%D0%B0-1024x576.jpg",
        answers: [{ text: "Биба и Боба", correct: false },
        { text: "Гарри и Марвин", correct: true },
        { text: "Кевин и Базз", correct: false },
        { text: "Питер и Гарри", correct: false }]
    },

    {
        question: "Из какого фильма этот кадр?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%B4%D0%B6%D0%B5%D0%BD%D1%82%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D1%8B-%D1%83%D0%B4%D0%B0%D1%87%D0%B8-1024x708.jpg",
        answers: [{ text: "Джентльмены удачи", correct: true },
        { text: "12 стульев", correct: false },
        { text: "Каникулы строгого режима", correct: false },
        { text: "О, где же ты, брат?", correct: false }]
    },

    {
        question: "А этот?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%B4%D0%B6%D0%B5%D0%BD%D1%82%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D1%8B-1024x683.jpg",
        answers: [{ text: "Джентльмены", correct: true },
        { text: "Достать ножи", correct: false },
        { text: "Бойцовский клуб", correct: false },
        { text: "Большой куш", correct: false }]
    },

    {
        question: "Из какого фильма этот кадр?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%94%D1%83%D1%80%D0%B0%D0%BA-1024x571.jpg",
        answers: [{ text: "Дурак", correct: true },
        { text: "Тупой и ещё тупее", correct: false },
        { text: "Левиафан", correct: false },
        { text: "Дурной и ещё дурнее", correct: false }]
    },

    {
        question: "Как звали главного героя фильма Матрица изображенного на фоторгафии?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0-1024x664.jpg",
        answers: [{ text: "Морфеус", correct: false },
        { text: "Сераф", correct: false },
        { text: "Нео", correct: true },
        { text: "Меровинген", correct: false }]
    },

    {
        question: "Из какого фильма этот кадр?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B8%D0%BB%D1%8F.jpg",
        answers: [{ text: "Зелёная книга", correct: false },
        { text: "Ничего себе поездочка", correct: false },
        { text: "Зеленая миля", correct: true },
        { text: "Джек стоун", correct: false }]
    },

    {
        question: "Как называется этот фильм?",
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87-%D0%BC%D0%B5%D0%BD%D1%8F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D1%8E-1024x744.jpg",
        answers: [{ text: "Иван Васильевич меняет профессию", correct: true },
        { text: "Операция «Ы» и другие приключения Шурика", correct: false },
        { text: "Бриллиантовая рука", correct: false },
        { text: "Ирония судьбы, или с лёгким паром!", correct: false }]
    },

    { question: "Из какого фильма этот кадр?", 
        image: "https://na-dostupnom.ru/wp-content/uploads/2021/06/%D0%AD%D0%B9%D1%81-%D0%92%D0%B5%D0%BD%D1%82%D1%83%D1%80%D0%B0-%D0%A0%D0%BE%D0%B7%D1%8B%D1%81%D0%BA-%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D1%85-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D1%85.-1024x571.jpg", 
        answers: [{ text: "Эйс Вентура Розыск домашних животных", correct: true }, 
            { text: "Я, снова я и Ирэн", correct: false }, 
            { text: "Тупой и ещё тупее", correct: false }, 
            { text: "Брюс всемогущий", correct: false }] }
];

function startTest() {
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    questionScreen.classList.add('active');
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    nextBtn.disabled = true;
    answersContainer.innerHTML = '';

    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    questionImage.src = q.image;
    progressText.textContent = `Вопрос ${currentQuestion + 1}/${questions.length}`;

    q.answers.forEach(answer => {
        const btn = document.createElement('div');
        btn.classList.add('answer');
        btn.textContent = answer.text;
        btn.addEventListener('click', () => selectAnswer(btn, answer.correct));
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(btn, correct) {
    const allButtons = answersContainer.querySelectorAll('.answer');
    allButtons.forEach(b => b.style.pointerEvents = 'none');

    if (correct) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        const correctAnswer = questions[currentQuestion].answers.find(a => a.correct);
        allButtons.forEach(b => {
            if (b.textContent.trim() === correctAnswer.text) {
                b.classList.add('correct');
            }
        });
    }

    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
    scoreText.textContent = `Вы ответили правильно на ${score} из ${questions.length}!`;
}

function restartTest() {
    startScreen.classList.add('active');
    resultScreen.classList.remove('active');
}

startBtn.addEventListener('click', startTest);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartTest);