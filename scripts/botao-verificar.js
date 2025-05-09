import {
    currentOfficialAnimal,
    normalizeText,
    animateImageTransition,
    loadAnimal,
    showAnimalOnMap,
    incrementScore,
} from './sorteio-animal.js';

let currentIndex = 0; // 

function checkAnswer() {
    const answerInput = document.getElementById("answer").value.trim();

    if (!answerInput) {
        document.getElementById("feedback").textContent = "Por favor, digite uma resposta.";
        document.getElementById("feedback").className = "feedback warning";
        return;
    }

    const userAnswer = normalizeText(answerInput);
    const correctAnswer = normalizeText(currentOfficialAnimal.location.trim());

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correto!";
        document.getElementById("feedback").className = "feedback correct";
        incrementScore();
        showAnimalOnMap(currentOfficialAnimal);
    } else {
        document.getElementById("feedback").textContent = `Errado! Ele vive na: ${currentOfficialAnimal.location}`;
        document.getElementById("feedback").className = "feedback wrong";
    }

    setTimeout(() => {
        animateImageTransition(() => {
            loadAnimal(true); 
        });
    }, 2000);

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("verify-button").addEventListener("click", checkAnswer);
});

document.getElementById("answer").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const answerButton = document.querySelector('.your-answer-button-class');
        if (answerButton) {
            answerButton.click();
        }
    }
});
