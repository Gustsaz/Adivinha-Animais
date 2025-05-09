import { skipAnimal } from './sorteio-animal.js';

let swapsLeft = 3;
let swapButton = null;

function handleSwapClick() {
    if (swapsLeft > 0) {
        swapButton.classList.add("button-wave");
        swapsLeft--;
        swapButton.textContent = `Pular (${swapsLeft})`;
        document.getElementById("feedback").textContent = "";
        document.getElementById("answer").value = "";

        const animalImage = document.getElementById("animal-image");
        animalImage.classList.remove("fade-in");
        animalImage.classList.add("fade-out");

        setTimeout(() => {
            skipAnimal();
        }, 300);

        setTimeout(() => {
            swapButton.classList.remove("button-wave");
        }, 1000);
    } else {
        alert("Você usou todos os pulos!");
    }
}

function resetSwaps() {
    swapsLeft = 3;
    if (!swapButton) {
        swapButton = document.getElementById("swap-button");
    }
    if (swapButton) {
        swapButton.textContent = `Pular (${swapsLeft})`;
        swapButton.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    swapButton = document.getElementById("swap-button");
    if (swapButton) {
        swapButton.addEventListener("click", handleSwapClick);
    }
    resetSwaps(); // Garante que o número de pulos seja inicializado corretamente
});

export { resetSwaps };