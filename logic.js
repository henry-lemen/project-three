// Create a map object.
let myMap = L.map("map", {
    center: [41.8813, -87.7148],
    zoom: 12
  });

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

fetch('chicago_community_boundaries.json')
            .then(data => {
                // Add the GeoJSON layer to the map
                L.geoJSON(data, {
                    style: function (feature) {
                        return {
                            color: 'blue',        // Outline color of the neighborhoods
                            weight: 2,            // Outline thickness
                            opacity: 1,           // Outline opacity
                            fillColor: 'blue'     // No fill color, just outline
                        };
                    }
                }).addTo(map);
            })
            .catch(error => console.error('Error loading GeoJSON:', error));