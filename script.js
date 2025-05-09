const animals = [
  { name: "Abutre-barbudo", image: "imgs/img1.jpg", location: "Europa", coords: [42, 10] },
  { name: "Anaconda", image: "imgs/img2.jpg", location: "América do Sul", coords: [-3, -65] },
  { name: "Anta", image: "imgs/img3.jpg", location: "América do Sul", coords: [-15, -60] },
  { name: "Antílope", image: "imgs/img4.jpg", location: "África", coords: [-10, 20] },
  { name: "Arara", image: "imgs/img5.jpg", location: "América do Sul", coords: [-10, -60] },
  { name: "Babuíno", image: "imgs/img6.jpg", location: "África", coords: [-10, 30] },
  { name: "Bandicoot", image: "imgs/img7.jpg", location: "Oceania", coords: [-28, 133] },
  { name: "Bicho-da-seda", image: "imgs/img8.jpg", location: "Ásia", coords: [31, 120] },
  { name: "Bicho-preguiça", image: "imgs/img9.jpg", location: "América do Sul", coords: [-15, -55] },
  { name: "Bisonte", image: "imgs/img10.jpg", location: "América do Norte", coords: [45, -100] },
  { name: "Cacajao", image: "imgs/img11.jpg", location: "América do Sul", coords: [1, -60] },
  { name: "Cacatua", image: "imgs/img12.jpg", location: "Oceania", coords: [-20, 150] },
  { name: "Cacatua-de-crista-amarela", image: "imgs/img13.jpg", location: "Oceania", coords: [-25, 150] },
  { name: "Cacatua-negra", image: "imgs/img14.jpg", location: "Oceania", coords: [-25, 135] },
  { name: "Calau", image: "imgs/img15.jpg", location: "Ásia", coords: [3, 102] },
  { name: "Camaleão-pantera", image: "imgs/img16.jpg", location: "Madagascar", coords: [-18, 47] },
  { name: "Canguru", image: "imgs/img17.jpg", location: "Oceania", coords: [-25, 135] },
  { name: "Canguru-vermelho", image: "imgs/img18.jpg", location: "Oceania", coords: [-25, 135] },
  { name: "Capivara", image: "imgs/img19.jpg", location: "América do Sul", coords: [-15, -60] },
  { name: "Caranguejeira-golias", image: "imgs/img20.jpg", location: "América do Sul", coords: [2, -60] },
  { name: "Caribu", image: "imgs/img21.jpg", location: "América do Norte", coords: [60, -100] },
  { name: "Casuar", image: "imgs/img22.jpg", location: "Oceania", coords: [-17, 145] },
  { name: "Cão selvagem", image: "imgs/img23.jpg", location: "África", coords: [-5, 25] },
  { name: "Cernícalo", image: "imgs/img24.jpg", location: "Europa", coords: [50, 10] },
  { name: "Cervo-almiscarado", image: "imgs/img25.jpg", location: "Ásia", coords: [30, 100] },
  { name: "Cervo-de-pantano", image: "imgs/img26.jpg", location: "América do Norte", coords: [30, -95] },
  { name: "Cervo-do-pantanal", image: "imgs/img27.jpg", location: "América do Sul", coords: [-15, -60] },
  { name: "Cervo-vermelho", image: "imgs/img28.jpg", location: "Europa", coords: [50, 10] },
  { name: "Civeta", image: "imgs/img29.jpg", location: "África", coords: [0, 25] },
  { name: "Coiote", image: "imgs/img30.jpg", location: "Ámerica do Norte", coords: [45, -110] },
  { name: "Condor-dos-andes", image: "imgs/img31.jpg", location: "América do Sul", coords: [-15, -70] },
  { name: "Coruja", image: "imgs/img32.jpg", location: "Europa", coords: [50, 10] },
  { name: "Cudo", image: "imgs/img33.jpg", location: "África", coords: [-15, 25] },
  { name: "Dingo", image: "imgs/img34.jpg", location: "Oceania", coords: [-23, 133] },
  { name: "Elefante", image: "imgs/img35.jpg", location: "África", coords: [-1, 18] },
  { name: "Equidna", image: "imgs/img36.jpg", location: "Oceania", coords: [-25, 133] },
  { name: "Esquilo", image: "imgs/img37.jpg", location: "América do Norte", coords: [40, -100] },
  { name: "Fossa", image: "imgs/img38.jpg", location: "África", coords: [-18, 46] },
  { name: "Furão", image: "imgs/img39.jpg", location: "Europa", coords: [52, 13] },
  { name: "Furão-negro", image: "imgs/img40.jpg", location: "América do Norte", coords: [40, -100] },
  { name: "Galo", image: "imgs/img41.jpg", location: "América do Sul", coords: [-10, -60] },
  { name: "Galo-selvagem-vermelho", image: "imgs/img42.jpg", location: "Ásia", coords: [23, 78] },
  { name: "Gambá", image: "imgs/img43.jpg", location: "América do Norte", coords: [35, -90] },
  { name: "Gato selvagem", image: "imgs/img44.jpg", location: "Europa", coords: [50, 10] },
  { name: "Gato-do-mato", image: "imgs/img45.jpg", location: "América do Sul", coords: [-10, -60] },
  { name: "Gaur", image: "imgs/img46.jpg", location: "Ásia", coords: [20, 80] },
  { name: "Girafa", image: "imgs/img47.jpg", location: "África", coords: [2, 36] },
  { name: "Gorila-das-montanhas", image: "imgs/img48.jpg", location: "África", coords: [-1, 29] },
  { name: "Guaxinim", image: "imgs/img49.jpg", location: "América do Norte", coords: [40, -90] },
  { name: "Iaque", image: "imgs/img50.jpg", location: "Ásia", coords: [32, 85] },
  { name: "Ibex", image: "imgs/img51.jpg", location: "Europa", coords: [46, 10] },
  { name: "Iguana", image: "imgs/img52.jpg", location: "América Central", coords: [15, -85] },
  { name: "Jacaré-do-pantanal", image: "imgs/img53.jpg", location: "América do Sul", coords: [-17, -57] },
  { name: "Lagarto-de-garganta-verde", image: "imgs/img54.jpg", location: "África", coords: [3, 20] },
  { name: "Leão", image: "imgs/img55.jpg", location: "África", coords: [-3, 22] },
  { name: "Lemure", image: "imgs/img56.jpg", location: "África", coords: [-20, 45] },
  { name: "Lêmure-de-cauda-anelada", image: "imgs/img57.jpg", location: "África", coords: [-20, 46] },
  { name: "Lobo-cinzento", image: "imgs/img58.jpg", location: "Ámerica do Norte", coords: [60, -150] },
  { name: "Lobo-guará", image: "imgs/img59.jpg", location: "América do Sul", coords: [-15, -60] },
  { name: "Macaco-aranha", image: "imgs/img60.jpg", location: "América do Sul", coords: [-10, -60] },
  { name: "Macaco-prego", image: "imgs/img61.jpg", location: "América do Sul", coords: [-5, -60] },
  { name: "Mangusto", image: "imgs/img62.jpg", location: "África", coords: [2, 22] },
  { name: "Maracajá", image: "imgs/img63.jpg", location: "América do Sul", coords: [-10, -55] },
  { name: "Markhor", image: "imgs/img64.jpg", location: "Ásia", coords: [35, 72] },
  { name: "Mono-narigudo", image: "imgs/img65.jpg", location: "Ásia", coords: [4, 114] },
  { name: "Morcego-vampiro", image: "imgs/img66.jpg", location: "Ásia", coords: [10, 100] },
  { name: "Narval", image: "imgs/img67.jpg", location: "Antártida", coords: [75, -50] },
  { name: "Nilgó", image: "imgs/img68.jpg", location: "Ásia", coords: [25, 75] },
  { name: "Onça-pintada", image: "imgs/img69.jpg", location: "Ámerica do Sul", coords: [-5, -60] },
  { name: "Panda Gigante", image: "imgs/img70.jpg", location: "Ásia", coords: [31, 103] },
  { name: "Papagaio-ecletus", image: "imgs/img71.jpg", location: "Oceania", coords: [-6, 147] },
  { name: "Periquito-da-tasmânia", image: "imgs/img72.jpg", location: "Oceania", coords: [-41, 146] },
  { name: "Pica-pau", image: "imgs/img73.jpg", location: "América do Norte", coords: [40, -100] },
  { name: "Porco-espinho", image: "imgs/img74.jpg", location: "Europa", coords: [50, 10] },
  { name: "Porquinho-da-índia", image: "imgs/img75.jpg", location: "América do Sul", coords: [-15, -60] },
  { name: "Puma", image: "imgs/img76.jpg", location: "América do Norte", coords: [40, -105] },
  { name: "Quati", image: "imgs/img77.jpg", location: "América do Sul", coords: [-10, -55] },
  { name: "Quati-de-cauda-anelada", image: "imgs/img78.jpg", location: "América Central", coords: [12, -85] },
  { name: "Quokka", image: "imgs/img79.jpg", location: "Oceania", coords: [-30, 115] },
  { name: "Raposa-do-ártico", image: "imgs/img80.jpg", location: "Antártida", coords: [70, -50] },
  { name: "Rena", image: "imgs/img81.jpg", location: "América do Norte", coords: [50, -90] },
  { name: "Rinoceronte-branco", image: "imgs/img82.jpg", location: "África", coords: [-2, 23] },
  { name: "Seriema", image: "imgs/img83.jpg", location: "América do Sul", coords: [-22, -45] },
  { name: "Siamangue", image: "imgs/img84.jpg", location: "Ásia", coords: [0, 102] },
  { name: "Sifaka", image: "imgs/img85.jpg", location: "África", coords: [-20, 45] },
  { name: "Suricata", image: "imgs/img86.jpg", location: "África", coords: [-25, 20] },
  { name: "Takin", image: "imgs/img87.jpg", location: "Ásia", coords: [28, 90] },
  { name: "Tamanduá", image: "imgs/img88.jpg", location: "América do Sul", coords: [-15, -60] },
  { name: "Tamanduá-bandeira", image: "imgs/img89.jpg", location: "América do Sul", coords: [-20, -60] },
  { name: "Tarpan", image: "imgs/img90.jpg", location: "Europa", coords: [52, 15] },
  { name: "Tenrec", image: "imgs/img91.jpg", location: "África", coords: [-20, 47] },
  { name: "Tigre-de-bengala", image: "imgs/img92.jpg", location: "Ásia", coords: [23, 88] },
  { name: "Tubarão-da-Groenlândia", image: "imgs/img93.jpg", location: "Antártida", coords: [72, -40] },
  { name: "Tucano", image: "imgs/img94.jpg", location: "América do Sul", coords: [-10, -60] },
  { name: "Turaco", image: "imgs/img95.jpg", location: "África", coords: [1, 30] },
  { name: "Urso-do-Tibete", image: "imgs/img96.jpg", location: "Ásia", coords: [30, 90] },
  { name: "Urso-pardo", image: "imgs/img97.jpg", location: "Ámerica do Norte", coords: [50, -120] },
  { name: "Vison", image: "imgs/img98.jpg", location: "Europa", coords: [55, 10] },
  { name: "Zebra", image: "imgs/img99.jpg", location: "África", coords: [-4, 34] },
  { name: "Zebu", image: "imgs/img100.jpg", location: "Ásia", coords: [20, 78] },
  { name: "Axolote", image: "imgs/img101.jpg", location: "América Central", coords: [19, -99] },
  { name: "Urso-polar", image: "imgs/img102.jpg", location: "Antártida", coords: [82, -40] },
  { name: "Dragão-de-komodo", image: "imgs/img103.jpg", location: "Ásia", coords: [-8, 119] },
  { name: "Pinguim", image: "imgs/img104.jpg", location: "Antártida", coords: [-75, 0] }
];





let shuffledAnimals = [];
let currentIndex = 0;
let currentAnimal = null;
let score = 0;
let correctAnimalMarkers = [];
const animalsPerGame = 10;


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

  currentAnimal = shuffledAnimals[currentIndex++];
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

function startGame() {
  shuffledAnimals = shuffleArray(animals).slice(0, animalsPerGame);
  currentIndex = 0;
  score = 0;
  correctAnimalMarkers = [];

  document.getElementById("game-container").style.display = "block";
  document.getElementById("result-container").style.display = "none";

  loadAnimal();
}

document.addEventListener("DOMContentLoaded", () => {
  startGame();
});

document.getElementById("answer").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".button-wave").click();
  }
});

let swapsLeft = 3;

document.getElementById("swap-button").addEventListener("click", () => {
  if (swapsLeft > 0) {
    const remaining = animals.filter(a =>
      !shuffledAnimals.includes(a) &&
      a !== currentAnimal
    );

    if (remaining.length > 0) {
      const newAnimal = remaining[Math.floor(Math.random() * remaining.length)];

      
      shuffledAnimals[currentIndex - 1] = newAnimal;
      currentAnimal = newAnimal;

     
      const imgElement = document.getElementById("animal-image");
      document.getElementById("animal-name").textContent = currentAnimal.name;
      imgElement.src = currentAnimal.image;

      swapsLeft--;
      document.getElementById("swap-button").textContent = `Pular (${swapsLeft})`;

      
      document.getElementById("feedback").textContent = "";
      document.getElementById("answer").value = "";

    } else {
      alert("Não há mais animais disponíveis para pular.");
    }
  } else {
    alert("Você usou todas os pulos!");
  }
});
