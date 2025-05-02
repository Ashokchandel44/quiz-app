const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1,
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correct: 0,
    },
    // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const answersList = document.getElementById("answers");
    answersList.innerHTML = ""; // Clear previous answers

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = () => checkAnswer(index);
        answersList.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    // Disable all options after selection
    const options = document.querySelectorAll("#answers li");
    options.forEach((option) => option.style.pointerEvents = "none");

    // Show the "Next" button
    const nextBtn = document.getElementById("next-btn");
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.getElementById("next-btn").disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = `${score} / ${quizData.length}`;
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);

// Load the first question
loadQuestion();
document.getElementById("next-btn").disabled = true;

