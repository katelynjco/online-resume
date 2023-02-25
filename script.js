const menuContainer = document.getElementById("menu-container");
const solarSystem = document.getElementById("solarSystem");
const container = document.getElementById("container");
const blinkText = document.getElementById("blink-text");
const exitButton = document.getElementById("exit-button");
const bluePlanet = document.getElementById("bluePlanet");
const bluePlanetContainer = document.getElementById("bluePlanet-container");
const purplePlanet = document.getElementById("purplePlanet");
const purplePlanetContainer = document.getElementById("purplePlanet-container");
const pinkPlanet = document.getElementById("pinkPlanet");
const pinkPlanetContainer = document.getElementById("pinkPlanet-container");
const sun = document.getElementById("sun");
const sunContainer = document.getElementById("sun-container");
const embedAbout = document.getElementById("about");
const embedInfo = document.getElementById("info");
const embedWork = document.getElementById("work");

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

// Hide Embeded HTMLs
function hideEmbed() {
    try {
      embedAbout.style.visibility = "hidden";
      embedInfo.style.visibility = "hidden";
      embedWork.style.visibility = "hidden";
    } catch (error) {
      // Catch Error Here
    }
}

// Open About Page Upon Menu Open
function openEmbedAbout() {
  if (!(menuContainer && menuContainer.style.visibility === "visible")) {
    // Show Menu
    try {
      embedAbout.style.visibility = "visible";
      embedInfo.style.visibility = "hidden";
      embedWork.style.visibility = "hidden";
    } catch (error) {
      // Catch Error Here
    }
  }
}

// Open Work Page Upon Menu Open
function openEmbedWork() {
  if (!(menuContainer && menuContainer.style.visibility === "visible")) {
    // Show Menu
    try {
      embedAbout.style.visibility = "hidden";
      embedInfo.style.visibility = "hidden";
      embedWork.style.visibility = "visible";
    } catch (error) {
      // Catch Error Here
    }
  }
}

// Open Info Page Upon Menu Open
function openEmbedInfo() {
  if (!(menuContainer && menuContainer.style.visibility === "visible")) {
    // Show Menu
    try {
      embedAbout.style.visibility = "hidden";
      embedInfo.style.visibility = "visible";
      embedWork.style.visibility = "hidden";
    } catch (error) {
      // Catch Error Here
    }
  }
}

// Close Menu Container Upon Button Click
function closeMenu() {
    if (menuContainer && menuContainer.style.visibility === "visible") {
      // Hide Menu
      try {
        hideEmbed();
        menuContainer.style.visibility = "hidden";
        blinkText.style.visibility = "visible";
        container.style.width = "100%";
        solarSystem.style.left = "50%";
      } catch (error) {
        // Catch Error Here
      }
    }
  }
  
  // Open Menu Container Upon Button Click
  function openMenu() {
    if (!(menuContainer && menuContainer.style.visibility === "visible")) {
      // Show Menu
      try {
        menuContainer.style.visibility = "visible";
        blinkText.style.visibility = "hidden";
        container.style.width = "0%";
        solarSystem.style.left = "20%";
      } catch (error) {
        // Catch Error Here
      }
    }
  }

  // Open Menu Container & Menu Page Upon Button Click
  function openMenuPage() {
    // Open Menu Container
    openMenu();
    // Open Menu

  }

  // Open Menu Container & About Page Upon Button Click
  function openAbout() {
    // Open Menu Container
    openMenu();
    // Open About HTML
    openEmbedAbout();
    console.log('about');
  }

  // Open Menu Container & Work Page Upon Button Click
  function openWork() {
    // Open Menu Container
    openMenu();
    // Open Work HTML
    openEmbedWork();
    console.log('work');
  }

  // Open Menu Container & Info Page Upon Button Click
  function openInfo() {
   // Open Menu Container
    openMenu();
    // Open Work HTML
    openEmbedInfo();
    console.log('info');
  }
  
// Add Event Listeners After DOM Loads
  function init(){
    // Generate Background
    generateBackground();

    // Open Menus
    container.addEventListener('click', openMenuPage);
    bluePlanet.addEventListener('click', openAbout);
    bluePlanetContainer.addEventListener('click', openAbout);
    purplePlanet.addEventListener('click', openWork);
    purplePlanetContainer.addEventListener('click', openWork);
    pinkPlanet.addEventListener('click', openInfo);
    pinkPlanetContainer.addEventListener('click', openInfo);
    sun.addEventListener('click', openMenuPage);
    sunContainer.addEventListener('click', openMenuPage);

    // Exit Menu
    exitButton.addEventListener('click', closeMenu);
  };

// On Load
document.addEventListener('DOMContentLoaded', init, false);
