import { animals } from './animais.js';
import { showAnimalOnMap } from './api-mapa.js';

let shuffledAnimals = [];
let currentAnimal = null;
let score = 0;
const animalsPerGame = 10;
let usedAnimals = [];
let gameAnimals = [];
let usedAnimalsGlobal = new Set();
let currentOfficialAnimal = null;
let isSkipping = false;

function normalizeText(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function shuffleArray(array) {

  const shuffled = array.slice();
  let randomSeed = performance.now();
  for (let i = shuffled.length - 1; i > 0; i--) {
    randomSeed = (randomSeed * 9301 + 49297) % 233280;
    const j = Math.floor((randomSeed / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function animateImageTransition(callback) {
  const imgElement = document.getElementById("animal-image");
  imgElement.classList.remove("fade-in");
  imgElement.classList.add("fade-out");
  setTimeout(callback, 300);
}

function incrementScore() {
  score++;
}

let currentIndex = 0;

function loadAnimal(shouldAdvance = false) {
  if (shouldAdvance) currentIndex++;

  if (currentIndex >= gameAnimals.length) {
    showFinalScore();
    return;
  }

  currentOfficialAnimal = gameAnimals[currentIndex];
  currentAnimal = currentOfficialAnimal;
  usedAnimalsGlobal.add(currentOfficialAnimal.name);

  const imgElement = document.getElementById("animal-image");

  document.getElementById("animal-name").textContent = currentOfficialAnimal.name;
  imgElement.src = currentOfficialAnimal.image;
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";

  const totalRestantes = gameAnimals.length - currentIndex;
  document.getElementById("progress").textContent = `Animais restantes: ${totalRestantes}`;

  imgElement.onload = () => {
    imgElement.classList.remove("fade-out");
    imgElement.classList.add("fade-in");
  };
}

function showFinalScore() {
  document.getElementById("game-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("final-score").textContent = `Você acertou ${score} de ${animalsPerGame} animais!`;

  const restartButton = document.getElementById("restart-button");
  if (restartButton) {
    restartButton.style.display = "block";

    restartButton.addEventListener("click", () => {
      location.reload(); 
    });

  }
}

import { resetSwaps } from './botao-pular.js';

function startGame() {
  gameAnimals = shuffleArray(animals).slice(0, animalsPerGame);
  currentIndex = 0;
  score = 0;
  usedAnimalsGlobal.clear();
  document.getElementById("game-container").style.display = "block";
  document.getElementById("result-container").style.display = "none";
  const restartButton = document.getElementById("restart-button");
  if (restartButton) restartButton.style.display = "none";
  loadAnimal();
  const swapButton = document.getElementById("swap-button");
  if (swapButton) {
    swapButton.textContent = "Pular (3)";
    swapButton.disabled = false;
  }

  function startGame() {

    resetSwaps();
  }

}

document.addEventListener("DOMContentLoaded", () => {
  startGame();
});

document.getElementById("answer").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("verify-button").click();
  }
});


function skipAnimal() {
  const confirmSkip = confirm("Tem certeza de que deseja pular este animal?");
  if (!confirmSkip) return;

  let randomAnimal;
  let tentativas = 0;

  do {
    randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    tentativas++;
    if (tentativas > 100) break;
  } while (
    usedAnimalsGlobal.has(randomAnimal.name) ||
    gameAnimals.includes(randomAnimal)
  );

  isSkipping = true;

  currentAnimal = randomAnimal;
  currentOfficialAnimal = randomAnimal;

  const imgElement = document.getElementById("animal-image");

  document.getElementById("animal-name").textContent = randomAnimal.name;
  imgElement.src = randomAnimal.image;

  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";

  showAnimalOnMap(randomAnimal.coords);

  imgElement.onload = () => {
    imgElement.classList.remove("fade-out");
    imgElement.classList.add("fade-in");
  };
}


function isCurrentlySkipping() {
  return isSkipping;
}

export {
  currentIndex,
  currentAnimal,
  currentOfficialAnimal,
  normalizeText,
  animateImageTransition,
  loadAnimal,
  showAnimalOnMap,
  incrementScore,
  skipAnimal
};
