const menuContainer = document.getElementById("menu-container");
const solarSystem = document.getElementById("solarSystem");
const container = document.getElementById("container");
const blinkText = document.getElementById("blink-text");
const exitButton = document.getElementById("exit-button");
const menuButton = document.getElementById("menu-button");
const bluePlanet = document.getElementById("bluePlanet");
const bluePlanetContainer = document.getElementById("bluePlanet-container");
const purplePlanet = document.getElementById("purplePlanet");
const purplePlanetContainer = document.getElementById("purplePlanet-container");
const pinkPlanet = document.getElementById("pinkPlanet");
const pinkPlanetContainer = document.getElementById("pinkPlanet-container");
const sunContainer = document.getElementById("sun-container");
const embedAbout = document.getElementById("about");
const embedInfo = document.getElementById("info");
const embedWork = document.getElementById("work");
const menuHeaders = document.getElementById("menu-header");
const menuIcons = document.getElementById("menu-icons");
const aboutIcon = document.getElementById("about-me");
const workIcon = document.getElementById("my-work");
const siteIcon = document.getElementById("about-site");
const spaceLaser = document.getElementById("space-laser");
const connect = document.getElementById("connect");
const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");


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

// Clear Header
function clearHeader() {
  menuHeaders.innerHTML = "";
}

// Typewriter Effect on Headings
let isHeaderRunning = false;
let timeoutId;

function animateHeader(txt) {
  isHeaderRunning = true;
  let i = 0;
  let speed = 40;

  function typeWriter() {
    if (i < txt.length) {
      menuHeaders.innerHTML += txt.charAt(i);
      i++;
      timeoutId = setTimeout(typeWriter, speed);
    } else {
      isHeaderRunning = false;
    }
  }

  clearHeader();
  typeWriter();
  return timeoutId;  
}

function menuHeader() {
  if (menuContainer 
    && menuContainer.style.visibility === "visible" 
    && (!embedAbout || embedAbout.style.visibility === "hidden") 
    && (!embedInfo || embedInfo.style.visibility === "hidden") 
    && (!embedWork || embedWork.style.visibility === "hidden")) {
      if (isHeaderRunning === true) {
        clearTimeout(timeoutId);
        clearHeader();
      }
      animateHeader("Hi, I'm Katelyn|");
      console.log('header');
  }
}

function aboutHeader() {
  if (menuContainer 
    && menuContainer.style.visibility === "visible" 
    && (!menuIcons || menuIcons.style.visibility === "hidden") 
    && (!embedInfo || embedInfo.style.visibility === "hidden") 
    && (!embedWork || embedWork.style.visibility === "hidden")) {
      if (isHeaderRunning === true) {
        clearTimeout(timeoutId);
        clearHeader();
      }
      animateHeader("About Me|");
  }
}

function infoHeader() {
  if (menuContainer 
    && menuContainer.style.visibility === "visible" 
    && (!menuIcons || menuIcons.style.visibility === "hidden") 
    && (!embedAbout || embedAbout.style.visibility === "hidden") 
    && (!embedWork || embedWork.style.visibility === "hidden")) {
      if (isHeaderRunning === true) {
        clearTimeout(timeoutId);
        clearHeader();
      }
      animateHeader("Site Info|");
    }
}

function workHeader() {
  if (menuContainer 
    && menuContainer.style.visibility === "visible" 
    && (!menuIcons || menuIcons.style.visibility === "hidden") 
    && (!embedAbout || embedAbout.style.visibility === "hidden") 
    && (!embedInfo || embedInfo.style.visibility === "hidden")) {
      if (isHeaderRunning === true) {
        clearTimeout(timeoutId);
        clearHeader();
      }
      animateHeader("My Work|");
    }
}

// Hide Embeded HTMLs
function hideEmbed() {
    try {
      embedAbout.style.visibility = "hidden";
      embedInfo.style.visibility = "hidden";
      embedWork.style.visibility = "hidden";
      clearHeader();
      hideMenuIcons();
    } catch (error) {
      // Catch Error Here
    }
}

// Hide Menu Buttons
function hideMenuIcons() {
  try {
    menuIcons.style.visibility = "hidden";
  } catch (error) {
    // Catch Error Here
  }
}

// Show Menu Buttons
function showMenuIcons() {
  try {
    menuIcons.style.visibility = "visible";
  } catch (error) {
    // Catch Error Here
  }
}

// Open About Page Upon Menu Open
function openEmbedAbout() {
    try {
      embedAbout.style.visibility = "visible";
    } catch (error) {
      // Catch Error Here
    }
}

// Open Work Page Upon Menu Open
function openEmbedWork() {
    try {
      embedWork.style.visibility = "visible";
    } catch (error) {
      // Catch Error Here
    }
}

// Open Info Page Upon Menu Open
function openEmbedInfo() {
    // Show Menu
    try {
      embedInfo.style.visibility = "visible";
    } catch (error) {
      // Catch Error Here
    }
}

// Close Menu Container Upon Button Click
function closeMenu() {
    if (menuContainer && menuContainer.style.visibility === "visible") {
      // Hide Menu
      try {
        hideEmbed();
        hideMenuIcons()
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
        solarSystem.style.left = "25%";
        showMenuIcons();
      } catch (error) {
        // Catch Error Here
      }
    }
}

// Open Menu Container & Menu Page Upon Button Click
 function openMenuPage() {
    // Open Menu Container
    openMenu();
    // Hide Embeded
    hideEmbed();
    // Show Menu
    showMenuIcons();
    // Add Header
    menuHeader();
}

// Open Menu Container & About Page Upon Button Click
function openAbout() {
    // Open Menu Container
    openMenu();
    // Hide other Embeded
    hideEmbed();
    // Open About HTML
    openEmbedAbout();
    // Add Header
    aboutHeader();
}

// Open Menu Container & Work Page Upon Button Click
function openWork() {
    // Open Menu Container
    openMenu();
    // Hide other Embeded
    hideEmbed();
    // Open Work HTML
    openEmbedWork();
    // Add Header
    workHeader();
}

// Open Menu Container & Info Page Upon Button Click
function openSite() {
   // Open Menu Container
    openMenu();
    // Hide other Embeded
    hideEmbed();
    // Open Work HTML
    openEmbedInfo();
    // Add Header
    infoHeader();
}

// Space Laser
function spaceLaserActivate() {
  closeMenu();
  alert('pew');
}

// Open Social Medias
function openGithub() {
  window.open("https://github.com/katelynjco", '_blank');
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/katelyn-j-collins/", '_blank');
}

function openEmail() {
  window.location.href = "mailto:user@example.com?subject=Portfolio&body=";
}

  
// Add Event Listeners After DOM Loads
  function init(){
    // Generate Background
    generateBackground();

    // Open Menus
    container.addEventListener('click', openMenuPage);
    menuButton.addEventListener('click', openMenuPage);
    bluePlanetContainer.addEventListener('click', openAbout);
    purplePlanetContainer.addEventListener('click', openWork);
    pinkPlanetContainer.addEventListener('click', openSite);
    sunContainer.addEventListener('click', spaceLaserActivate);
    aboutIcon.addEventListener('click', openAbout);
    workIcon.addEventListener('click', openWork);
    siteIcon.addEventListener('click', openSite);
    spaceLaser.addEventListener('click', spaceLaserActivate);
    connect.addEventListener('click', openEmail);
    github.addEventListener('click', openGithub);
    linkedin.addEventListener('click', openLinkedin);

    // Exit Menu
    exitButton.addEventListener('click', closeMenu);
  };

// On Load
document.addEventListener('DOMContentLoaded', init, false);
