const projectArray = [
    {
        "title": "Hazards Along the Way",
        "description": "A complex text based adventure game built using JavaScript, CSS, and HTML",
        "image": "img/projects/hazards.png",
        "url": "https://katelynjco.github.io/hazards/",
        "code": "https://github.com/katelynjco/hazards"
    },
    {
        "title": "Dinatrophy",
        "description": "A dodge focused dinosaur game made with JavaScript, CSS, and HTML",
        "image": "img/projects/dinatrophy.png",
        "url": "https://katelynjco.github.io/dinatrophy/",
        "code": "https://github.com/katelynjco/dinatrophy"
    },
    {
        "title": "Modern Website Sample",
        "description": "A sleek example product that uses JavaScript to switch between a light and a dark theme",
        "image": "img/projects/modernSample.png",
        "url": "https://katelynjco.github.io/light-dark-mode/",
        "code": "https://github.com/katelynjco/light-dark-mode"
    },
    {
        "title": "Joke Telling Robot",
        "description": "This robot sources programing jokes from an API, then passes them through a text to speech API using JavaScript",
        "image": "img/projects/jokeTeller.png",
        "url": "https://katelynjco.github.io/joke-teller/",
        "code": "https://github.com/katelynjco/joke-teller"
    },
    {
        "title": "Unsplash API - Infinite Scroll",
        "description": "Utilizes JavaScript to endlessly scroll through API sourced photos",
        "image": "img/projects/infiniteScroll.png",
        "url": "https://katelynjco.github.io/infinite-scroll/",
        "code": "https://github.com/katelynjco/infinite-scroll"
    },
    {
        "title": "Quote Generator",
        "description": "Sources quotes from an API and generates them in a pleasing theme using JavaScript",
        "image": "img/projects/quoteGenerator.png",
        "url": "https://katelynjco.github.io/quote-generator/",
        "code": "https://github.com/katelynjco/quote-generator"
    },
    {
        "title": "CSS Background Generator",
        "description": "A CSS code generator that uses JavaScript to assign the background gradient",
        "image": "img/projects/backgroundGenerator.png",
        "url": "https://katelynjco.github.io/background-generator/",
        "code": "https://github.com/katelynjco/background-generator"
    },
    {
        "title": "Picture-in-Picture",
        "description": "This site uses JavaScript to turn any tab into a picture-in-picture window",
        "image": "img/projects/picturePicture.png",
        "url": "https://katelynjco.github.io/picture-in-picture/",
        "code": "https://github.com/katelynjco/picture-in-picture"
    },
    {
        "title": "Prank Landing Page",
        "description": "A site generated completely primarily HTML, designed for a laugh",
        "image": "img/projects/tcTuggers.png",
        "url": "https://katelynjco.github.io/tc-tuggers/",
        "code": "https://github.com/katelynjco/tc-tuggers"
    }
];


function displayProjects() {
    const workContainer = document.getElementById("work-container");
    projectArray.forEach((project) => {
      // Clone the project container element
      const projectContainer = document.getElementById("project-container").cloneNode(true);
    
      // Set the title, description, and URL for the project
      const previewImage = projectContainer.querySelector("#preview");
      previewImage.src = project.image;
  
      const sitelink = projectContainer.querySelector(".img a");
      sitelink.href = project.url;
  
      const projectTitle = projectContainer.querySelector("#project-title");
      projectTitle.textContent = project.title;
  
      const projectDescription = projectContainer.querySelector(".project-description");
      projectDescription.textContent = project.description;
  
      const projectCode = projectContainer.querySelector("#project-info a");
      projectCode.href = project.code;
  
      // Append the cloned project container element to the work container
      workContainer.appendChild(projectContainer);
    });
  }
  
  document.addEventListener('DOMContentLoaded', displayProjects, false);
