function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result-container');

    let score = 0;

    // You can add more questions and their correct answers here
    const answers = {
        q1: 'a',
    };

    for (let i = 1; i <= Object.keys(answers).length; i++) {
        const questionName = 'q' + i;
        const selectedOption = form[questionName].value;

        if (selectedOption === answers[questionName]) {
            score++;
        }
    }

    const percentage = (score / Object.keys(answers).length) * 100;
    const message = `Your score: ${score}/${Object.keys(answers).length} (${percentage}%)`;

    resultContainer.innerHTML = message;
}
