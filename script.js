const menuContainer = document.getElementById("menu-container");
const starsOrbit = document.getElementById('stars');
const asteroidBelt = document.getElementById('asteroids-belt');
const asteroidBelt2 = document.getElementById('asteroids-belt2');
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
const canvas = document.getElementById('drawing-board');
const noLaser = document.getElementById("no-laser");


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

// Cursor Companions Follow
function cursorFollow() {

  // find cursor
  function mouseX(evt) {if (!evt) evt = window.event; if (evt.pageX) return evt.pageX; else if (evt.clientX)return evt.clientX + (document.documentElement.scrollLeft ?  document.documentElement.scrollLeft : document.body.scrollLeft); else return 0;}
  function mouseY(evt) {if (!evt) evt = window.event; if (evt.pageY) return evt.pageY; else if (evt.clientY)return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop); else return 0;}
  
  function addCompanion(){
    function navi(evt) {
        // div that is to follow the mouse (must be position:absolute)
        let divName = 'blue-follow'; 
        // X offset from mouse position
        let offX = 25;          
        // Y offset from mouse position
        let offY = 30; 
        var obj = document.getElementById(divName).style;
        obj.left = (parseInt(mouseX(evt))+offX) + 'px';
        obj.top = (parseInt(mouseY(evt))+offY) + 'px'; 
      }

    function ufo(evt) {
      // div that is to follow the mouse (must be position:absolute)
      let divName = 'purple-follow'; 
      // X offset from mouse position
      let offX = 20;          
      // Y offset from mouse position
      let offY = 100; 
      var obj = document.getElementById(divName).style;
      obj.left = (parseInt(mouseX(evt))+offX) + 'px';
      obj.top = (parseInt(mouseY(evt))+offY) + 'px'; 
    }

    function pinky(evt) {
      // div that is to follow the mouse (must be position:absolute)
      let divName = 'pink-follow'; 
      // X offset from mouse position
      let offX = 100;          
       // Y offset from mouse position
      let offY = 70; 
      var obj = document.getElementById(divName).style;
        obj.left = (parseInt(mouseX(evt))+offX) + 'px';
        obj.top = (parseInt(mouseY(evt))+offY) + 'px'; 
      }
      navi();
      ufo();
      pinky();   
    }
  document.onmousemove = addCompanion;
}

// Easter Egg - If planet is clicked 4 times, a companion appears
let blueClick = 1;
let purpleClick = 1;
let pinkClick = 1;
function blueAppear(){
  blueClick = blueClick + 1;
  console.log(blueClick);

  if (blueClick >= 4){
    document.getElementById("blue-follow").style.visibility = "visible";
  }
}
function purpleAppear(){
  purpleClick = purpleClick + 1;
  console.log(purpleClick);

  if (purpleClick >= 4){
    document.getElementById("purple-follow").style.visibility = "visible";
  }
}
function pinkAppear(){
  pinkClick = pinkClick + 1;
  console.log(pinkClick);

  if (pinkClick >= 4){
    document.getElementById("pink-follow").style.visibility = "visible";
  }
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
    bluePlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
      purplePlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
      pinkPlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
  } catch (error) {
    // Catch Error Here
  }
}

// Open About Page Upon Menu Open
function openEmbedAbout() {
    try {
      embedAbout.style.visibility = "visible";
      bluePlanet.style.boxShadow = "0px 0px 30px #B7A9FE";
      purplePlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
      pinkPlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
    } catch (error) {
      // Catch Error Here
    }
}

// Open Work Page Upon Menu Open
function openEmbedWork() {
    try {
      embedWork.style.visibility = "visible";
      bluePlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
      purplePlanet.style.boxShadow = "0px 0px 30px #B7A9FE";
      pinkPlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
    } catch (error) {
      // Catch Error Here
    }
}

// Open Info Page Upon Menu Open
function openEmbedInfo() {
    // Show Menu
    try {
      embedInfo.style.visibility = "visible";
      bluePlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
      purplePlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
      pinkPlanet.style.boxShadow = "0px 0px 30px #B7A9FE";
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
        bluePlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
        purplePlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
        pinkPlanet.style.boxShadow = "0px 0px 0px #B7A9FE";
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

// Toggle Page Animations
function toggleOrbit() {
  const animations = [bluePlanetContainer, purplePlanetContainer, pinkPlanetContainer, starsOrbit, asteroidBelt, asteroidBelt2];
  animations.forEach(animation => {
    const running = animation.style.animationPlayState || 'running';
    animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
  });
}

// Space Laser
function spaceLaserDeactivate() {
  canvas.style.visibility = "hidden";
  noLaser.style.visibility = "hidden";
  blinkText.style.visibility = "visible";
  toggleOrbit();

}

function spaceLaserActivate() {
  closeMenu();
  // Pause animations
  toggleOrbit();
  blinkText.style.visibility = "hidden";
  // Add Canvas
  noLaser.style.visibility = "visible";
  canvas.style.visibility = "visible";
  const ctx = canvas.getContext('2d');
  const canvasOffsetX = canvas.offsetLeft;
  const canvasOffsetY = canvas.offsetTop;
  canvas.width = window.innerWidth - canvasOffsetX;
  canvas.height = window.innerHeight - canvasOffsetY;

  // Drawing Controls
  let isPainting = false;
  let lineWidth = 10;
  let startX;
  let startY;

  canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
  });

  const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.strokeStyle = '#060214';
    ctx.stroke();
  }
  alert('Press and hold the right mouse button to draw over objects with the space laser. Click the button on the right to stop.');
  canvas.addEventListener('mousemove', draw);
  noLaser.addEventListener('click', spaceLaserDeactivate);
}


// Open Social Medias
function openGithub() {
  window.open("https://github.com/katelynjco", '_blank');
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/katelyn-j-collins/", '_blank');
}

function openEmail() {
  window.location.href = "mailto:developer@katelynj.co?subject=Portfolio&body=";
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
    bluePlanet.addEventListener('click', blueAppear);
    purplePlanet.addEventListener('click', purpleAppear);
    pinkPlanet.addEventListener('click', pinkAppear);
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

    // Have Cursor Companions follow cursor on load
    cursorFollow();
  };

// On Load
document.addEventListener('DOMContentLoaded', init, false);
