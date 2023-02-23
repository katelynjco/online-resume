  
// Generate Background Asteroid Belt and Stars
function generateBackground(){
  // Star Randomizer
  function generateStars() {
    try {const STAR_COUNT = 400
      let result = ""
      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      function randomStars() {
        for(let i = 0; i < STAR_COUNT; i++){
            result += `${randomNumber(-95, 95)}vw ${randomNumber(-95, 95)}vh ${randomNumber(0, 2)}px ${randomNumber(0,2)}px #FFF,`
        }
      }
      randomStars();
      let stars = result.substring(0, result.length - 1);
      document.getElementById("stars").style.boxShadow = stars;
    } catch (error) {
      // Catch Error Here
    }
  }
  // Generate Asteroid Belts
  function generateAsteroids1() {
    try {const Asteroid_COUNT = 50
      let result = ""
      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      function randomRocks() {
        for(let i = 0; i < Asteroid_COUNT; i++){
            result += `${randomNumber(-25, 25)}vw ${randomNumber(-25, 25)}vh ${randomNumber(0, 3)}px ${randomNumber(0,3)}px #301B2F,`
        }
      }
      randomRocks();
      let rocks = result.substring(0, result.length - 1);
      document.getElementById("asteroids-belt").style.boxShadow = rocks;
    } catch (error) {
      // Catch Error Here
    }
  }
  // Generate Asteroid Belts
  function generateAsteroids2() {
    try {const Asteroid_COUNT = 30
      let result = ""
      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      function randomRocks() {
        for(let i = 0; i < Asteroid_COUNT; i++){
            result += `${randomNumber(-30, 30)}vw ${randomNumber(-30, 30)}vh ${randomNumber(0, 2)}px ${randomNumber(0,3)}px #382B2F,`
        }
      }
      randomRocks();
      let rocks = result.substring(0, result.length - 1);
      document.getElementById("asteroids-belt2").style.boxShadow = rocks;
    } catch (error) {
      // Catch Error Here
    }
  }
  generateStars();
  generateAsteroids1();
  generateAsteroids2();
}


// Close Menu Upon Button Click
function closeMenu() {
    const menuContainer = document.getElementById("menu-container");
    if (menuContainer && menuContainer.style.visibility === "visible") {
      // Hide Menu
      try {
        menuContainer.style.visibility = "hidden";
        document.getElementById("blink-text").style.visibility = "visible";
        document.getElementById("container").style.width = "100%";
        document.getElementById("solarSystem").style.left = "50%";
      } catch (error) {
        // Catch Error Here
      }
    }
  }
  
  // Open Menu Upon Button Click
  function openMenu() {
    const menuContainer = document.getElementById("menu-container");
    if (!(menuContainer && menuContainer.style.visibility === "visible")) {
      // Show Menu
      try {
        menuContainer.style.visibility = "visible";
        document.getElementById("blink-text").style.visibility = "hidden";
        document.getElementById("container").style.width = "0%";
        document.getElementById("solarSystem").style.left = "20%";
      } catch (error) {
        // Catch Error Here
      }
    }
  }
  
// Add Event Listeners After DOM Loads
  function init(){
    const exitButton = document.getElementById("exit-button");
    const container = document.getElementById("container");
    container.addEventListener('click', openMenu);
    exitButton.addEventListener('click', closeMenu);
    generateBackground();
  };

// On Load
document.addEventListener('DOMContentLoaded', init, false);
