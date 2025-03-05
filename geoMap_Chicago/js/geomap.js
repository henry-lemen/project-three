// Assign variable for neighborhood crash data
let neighborhoodCrashData = {};
let geojsonData = null;
// Fetch neighborhood crash data from csv
fetch('./geo_yearly_data/sorted_2018_count.csv')
    .then(response => response.text())
    .then(text => {
        // Parse the CSV data using PapaParse
        const csvData = Papa.parse(text, { header: true }).data;
        console.log('CSV Data:', csvData);

        // Loop through the CSV data and store the neighborhood and crash count
        csvData.forEach(row => {
            let neighborhoodName = row['name'];
            let crashCount = parseInt(row['count']);

            // Store the data in the neighborhoodCrashData object
            if (neighborhoodName && !isNaN(crashCount)) {
                neighborhoodCrashData[neighborhoodName] = crashCount;
            }
        });

        console.log('Neighborhood Crash Data:', neighborhoodCrashData);
    })
    .catch(error => console.error('Error loading CSV:', error));



// Chicago map
let chicagoMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
// map location
let myMap = L.map("map-id", {
    center: [41.8813, -87.7148],
    zoom: 11,
    
  });
// Add Chicago map
chicagoMap.addTo(myMap);
// fetch geoJSON data
fetch('chicago.geojson')
            .then(response => response.json())
            .then(data => {
                // style the GeoJSON
                L.geoJSON(data, {
                    style: function(feature) {
                        return {
                            color: "lightblue",  
                            weight: 2,      
                            opacity: 1,     
                            fillColor: "blue", 
                            fillOpacity: 0.5   
                        };
                    },
                    // Collect data for neighborhood and populate pop-up content
                    onEachFeature: function(feature, layer) {
                        // Collect variables
                        let neighborhoodName = feature.properties.name;
                        
                        let popupContent = `<h3>${neighborhoodName}</h3>`;

                        if (neighborhoodCrashData[neighborhoodName]) {
                            // Add crash count to the popup content
                            popupContent += `<p><strong>Accident Count:</strong> ${neighborhoodCrashData[neighborhoodName]}</p>`;
                        } else {
                            popupContent += `<p>No crash data available</p>`;
                        }
                        // Add pop-up
                        layer.bindPopup(popupContent);
                    }
                }).addTo(myMap);
            })
            .catch(error => console.error('Error loading the GeoJSON:', error));

// Function for loading correct data as years are selected           
function loadCrashData(year) {
    // Reset crash data
    neighborhoodCrashData = {};

    // Fetch the correct CSV file
    fetch(`./geo_yearly_data/sorted_${year}_count.csv`)
        .then(response => response.text())
        .then(text => {
            const csvData = Papa.parse(text, { header: true }).data;

            // Loop through CSV data and store neighborhood and count
            csvData.forEach(row => {
                let neighborhoodName = row['name'];
                let crashCount = parseInt(row['count']);

                // Store data
                if (neighborhoodName && !isNaN(crashCount)) {
                    neighborhoodCrashData[neighborhoodName] = crashCount;
                }
            });

            // Update map with data for selected year
            updateMapPopups();
        })
        .catch(error => console.error('Error loading CSV:', error));
}
    
// Function to update pop-up content
function updateMapPopups() {
    // Loop through and populate pop-up data
    myMap.eachLayer(layer => {
        if (layer.feature) {
            let neighborhoodName = layer.feature.properties.name;
            let popupContent = `<h3>${neighborhoodName}</h3>`;

            if (neighborhoodCrashData[neighborhoodName]) {
                popupContent += `<p><strong>Accident Count:</strong> ${neighborhoodCrashData[neighborhoodName]}</p>`;
            } else {
                popupContent += `<p>No crash data available</p>`;
            }

            // New pop-up
            layer.setPopupContent(popupContent);
        }
    });
}
    
// Event listener for year selection
document.getElementById('year-select').addEventListener('change', function(event) {
    let selectedYear = event.target.value;
    loadCrashData(selectedYear); // Load data for the selected year
});