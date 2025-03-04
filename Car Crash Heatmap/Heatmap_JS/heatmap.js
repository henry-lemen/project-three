let myMap = L.map("map", {
    center: [41.8813, -87.7148],
    zoom: 12
  });
  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let currentHeatLayer = null;

function loadData() {

const year = document.getElementById('yearSelect').value;
const csvPath = `../../data/df_${year}.csv`;

if (currentHeatLayer){
  myMap.removeLayer(currentHeatLayer);
}

  Papa.parse(csvPath, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: function(results) {
          console.log(results);
          var heatData = [];
          let totalCrashes = 0;
          results.data.forEach(function(row) {
              if (row.LATITUDE && row.LONGITUDE) {
                  heatData.push([row.LATITUDE, row.LONGITUDE]);
                  totalCrashes++;
              }
          });
          document.getElementById('totalCrashes').innerText = `Total Crashes: ${totalCrashes}`;
          currentHeatLayer = L.heatLayer(heatData, { radius: 10, blur: 15 }).addTo(myMap);
      }
  });
}
document.getElementById('yearSelect').addEventListener('change', loadCSV);
loadData();



