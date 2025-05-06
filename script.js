const animals = [
  { name: "Anta", image: "imgs/img1.jpg", location: "América do Sul", coords: [-15, -60] },
  { name: "Águia-real", image: "imgs/img2.jpg", location: "Ámerica do Norte", coords: [40, -100] },
  { name: "Canguru", image: "imgs/img3.jpg", location: "Oceania", coords: [-25, 135] },
  { name: "Cervo-vermelho", image: "imgs/img4.jpg", location: "Europa", coords: [50, 10] },
  { name: "Coiote", image: "imgs/img5.jpg", location: "Ámerica do Norte", coords: [45, -110] },
  { name: "Crocodilo-do-nilo", image: "imgs/img6.jpg", location: "África", coords: [1, 32] },
  { name: "Dragão-de-komodo", image: "imgs/img7.jpg", location: "Ásia", coords: [-8, 120] },
  { name: "Elefante Africano", image: "imgs/img8.jpg", location: "África", coords: [-1, 18] },
  { name: "Girafa", image: "imgs/img9.jpg", location: "África", coords: [2, 36] },
  { name: "Gorila-das-montanhas", image: "imgs/img10.jpg", location: "África", coords: [-1, 29] },
  { name: "Leão", image: "imgs/img11.jpg", location: "África", coords: [-3, 22] },
  { name: "Lobo-cinzento", image: "imgs/img12.jpg", location: "Ámerica do Norte", coords: [60, -150] },
  { name: "Onça-pintada", image: "imgs/img13.jpg", location: "Ámerica do Sul", coords: [-5, -60] },
  { name: "Panda Gigante", image: "imgs/img14.jpg", location: "Ásia", coords: [31, 103] },
  { name: "Pinguim-imperador", image: "imgs/img15.jpg", location: "Antártida", coords: [-75, 0] },
  { name: "Rinoceronte-branco", image: "imgs/img16.jpg", location: "África", coords: [-2, 23] },
  { name: "Tigre-de-bengala", image: "imgs/img17.jpg", location: "Ásia", coords: [23, 88] },
  { name: "Urso Polar", image: "imgs/img18.jpg", location: "Antártida", coords: [-80, -40] },
  { name: "Urso-pardo", image: "imgs/img19.jpg", location: "Ámerica do Norte", coords: [50, -120] },
  { name: "Zebra", image: "imgs/img20.jpg", location: "África", coords: [-4, 34] }
];




let shuffledAnimals = [];
let currentIndex = 0;
let currentAnimal = null;
let score = 0;
let correctAnimalMarkers = [];

const map = L.map('map', {
  zoom: 2,
  minZoom: 1,
  maxZoom: 5,
  worldCopyJump: false,
  maxBoundsViscosity: 1.0,
  maxBounds: [[-90, -180], [90, 180]]
}).setView([-14.235, -51.9253], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

map.on('zoomend', () => {
  const zoom = map.getZoom();
  const size = getIconSizeForZoom(zoom);

  correctAnimalMarkers.forEach(({ marker, animal }) => {
    const newIcon = L.icon({
      iconUrl: animal.image,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2],
      className: 'animal-icon'
    });

    marker.setIcon(newIcon);
  });
});


function normalizeText(text) {

  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getIconSizeForZoom(zoom) {
  const minSize = 30;
  const maxSize = 100;
  const zoomRange = map.getMaxZoom() - map.getMinZoom();
  const zoomLevel = zoom - map.getMinZoom();
  return minSize + ((maxSize - minSize) * (zoomLevel / zoomRange));
}

function showAnimalOnMap(animal) {
  const zoom = map.getZoom();
  const size = getIconSizeForZoom(zoom);

  const icon = L.icon({
    iconUrl: animal.image,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
    className: 'animal-icon'
  });

  const marker = L.marker(animal.coords, { icon }).addTo(map);


  marker.bindPopup(animal.name);

  correctAnimalMarkers.push({ marker, animal });

  map.setView(animal.coords, zoom);
}

function checkAnswer() {
  const userAnswer = normalizeText(document.getElementById("answer").value.trim());
  const correctAnswer = normalizeText(currentAnimal.location.trim());

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correto!";
    document.getElementById("feedback").className = "feedback correct";
    score++;
    showAnimalOnMap(currentAnimal);
  } else {
    document.getElementById("feedback").textContent = `Errado! Ele vive na: ${currentAnimal.location}`;
    document.getElementById("feedback").className = "feedback wrong";
  }

  setTimeout(() => {
    animateImageTransition();
  }, 2000);
}

function animateImageTransition() {
  const imgElement = document.getElementById("animal-image");

  imgElement.classList.remove("fade-in");
  imgElement.classList.add("fade-out");

  setTimeout(() => {
    loadAnimal();
  }, 300);
}

function loadAnimal() {
  if (currentIndex >= shuffledAnimals.length) {
    showFinalScore();
    return;
  }

  currentAnimal = shuffledAnimals[currentIndex];
  currentIndex++;

  const imgElement = document.getElementById("animal-image");

  document.getElementById("animal-name").textContent = currentAnimal.name;
  imgElement.src = currentAnimal.image;

  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";
  document.getElementById("progress").textContent = `${currentIndex}/${shuffledAnimals.length}`;

  imgElement.onload = () => {
    imgElement.classList.remove("fade-out");
    imgElement.classList.add("fade-in");
  };
}

function showFinalScore() {
  document.getElementById("game-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("final-score").textContent = `Você acertou ${score} de ${shuffledAnimals.length} animais!`;

}

shuffledAnimals = shuffleArray(animals);
document.addEventListener("DOMContentLoaded", loadAnimal);