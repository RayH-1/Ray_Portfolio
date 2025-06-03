let allData = [];
let periods = [];

fetch('/Ray_Portfolio/tools/tool-1/data/trade_data.json')
  .then(response => response.json())
  .then(data => {
    allData = data;
    periods = Object.keys(allData).sort();
    const slider = document.getElementById('year-slider');
    slider.min = periods[0];
    slider.max = periods[periods.length - 1];
    slider.value = slider.max;

    slider.addEventListener('input', () => {
      document.getElementById('selected-year').textContent = slider.value;
      updateMap(slider.value);
    });

    initMap();
    updateMap(slider.value);
  });

function initMap() {
  // Leaflet or other map setup code goes here
}

function updateMap(year) {
  const yearData = allData[year];
  // Code to update map based on `yearData`
}
