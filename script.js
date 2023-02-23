// Asteroid Belt/ Sra Randomizer
    // function randomNumber(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min
    // }

    // const STAR_COUNT = 100
    // let result = ""
    // for(let i = 0; i < STAR_COUNT; i++){
    //     result += `${randomNumber(-25, 25)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0,3)}px #59373F,`
    // }
    // console.log(result.substring(0, result.length - 1)

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
  
  
  // Open Menu Upon Screen Click
  function checkMenu() {
    // Make Menu Visible
    try {
      if (!(document.getElementById("menu-container").style.visibility === "visible")) {
        openMenu();
      }
    } catch (error) {
      // Catch Error Here
    }
  }

  function init(){
    const exitButton = document.getElementById("exit-button");
    const container = document.getElementById("container");
    container.addEventListener('click', checkMenu);
    exitButton.addEventListener('click', closeMenu);
  };
  
document.addEventListener('DOMContentLoaded', init, false);
