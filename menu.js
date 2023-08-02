// Get references to the elements
const menuToggle = document.getElementById('menu-toggle');
const tilesDiv = document.querySelector('.tiles');

// Set initial state (assuming .tiles is initially hidden)
let isTilesVisible = false;

// Function to toggle the .tiles div visibility
function toggleTiles() {
  if (isTilesVisible) {
    tilesDiv.style.display = 'none';
  } else {
    tilesDiv.style.display = 'flex';
  }
  isTilesVisible = !isTilesVisible;
}

// Add a click event listener to the #menu-toggle button
menuToggle.addEventListener('click', toggleTiles);