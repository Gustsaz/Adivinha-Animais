import { animals } from './animais.js';

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

let correctAnimalMarkers = [];

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

function getIconSizeForZoom(zoom) {
    const minSize = 30; // menor tamanho quando estiver com muito zoom (mais perto)
    const maxSize = 100; // maior tamanho quando estiver com pouco zoom (mais longe)
    const zoomRange = map.getMaxZoom() - map.getMinZoom();
    const zoomLevel = zoom - map.getMinZoom();
    // Inverte a proporção: quanto mais zoom, menor o tamanho
    return maxSize - ((maxSize - minSize) * (zoomLevel / zoomRange));
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

export { showAnimalOnMap };
