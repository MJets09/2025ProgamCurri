document.addEventListener('DOMContentLoaded', () => {
    let currentQuestion = 1;
    let score = 0;

    // Select all answer buttons
    const answerButtons = document.querySelectorAll('.answer-btn');

    answerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const isCorrect = event.target.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                score++;
            }
            showNextQuestion();
        });
    });

    function showNextQuestion() {
        // Hide current question
        const currentQuestionElement = document.getElementById(`question${currentQuestion}`);
        currentQuestionElement.style.display = 'none';

        currentQuestion++;

        // If there are more questions, show the next one
        if (currentQuestion <= 3) {
            const nextQuestionElement = document.getElementById(`question${currentQuestion}`);
            nextQuestionElement.style.display = 'block';
        } else {
            // If no more questions, display the score
            const scoreElement = document.getElementById('score');
            scoreElement.textContent = `Score: ${score}`;
            scoreElement.style.display = 'block';
        }
    }
});
