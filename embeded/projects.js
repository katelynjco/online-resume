const projectArray = [
    {
        "title": "Modern Website Sample",
        "description": "A sleek and modern site that utlizised a dark mode/light mode theme",
        "image": "img/projects/modernSample.png",
        "url": "https://katelynjco.github.io/light-dark-mode/",
        "code": "https://github.com/katelynjco/light-dark-mode"
    },
    {
        "title": "Joke Telling Robot",
        "description": "A robot that uses speech to text to tell jokes",
        "image": "img/projects/jokeTeller.png",
        "url": "https://katelynjco.github.io/joke-teller/",
        "code": "https://github.com/katelynjco/joke-teller"
    },
    {
        "title": "Unsplash API - Infinite Scroll",
        "description": "A site that auto-poputlates photos for endless scrolling",
        "image": "img/projects/infiniteScroll.png",
        "url": "https://katelynjco.github.io/infinite-scroll/",
        "code": "https://github.com/katelynjco/infinite-scroll"
    },
    {
        "title": "Quote Generator",
        "description": "Sources quotes from an API and generates them in a pleasing theme",
        "image": "img/projects/quoteGenerator.png",
        "url": "https://katelynjco.github.io/quote-generator/",
        "code": "https://github.com/katelynjco/quote-generator"
    },
    {
        "title": "CSS Background Generator",
        "description": "Generates a gradient background in CSS code",
        "image": "img/projects/backgroundGenerator.png",
        "url": "https://katelynjco.github.io/background-generator/",
        "code": "https://github.com/katelynjco/background-generator"
    },
    {
        "title": "Picture-in-Picture",
        "description": "This site allows you to create a picture in picture window of any tab",
        "image": "img/projects/picturePicture.png",
        "url": "https://katelynjco.github.io/picture-in-picture/",
        "code": "https://github.com/katelynjco/picture-in-picture"
    },
    {
        "title": "Joke Landing Page",
        "description": "A site generated completely from HTML, designed for a laugh",
        "image": "img/projects/tcTuggers.png",
        "url": "https://katelynjco.github.io/tc-tuggers/",
        "code": "https://github.com/katelynjco/tc-tuggers"
    }
];


// Create Elements for Links & Photos, Add to Dom
function displayProjects() {
    const workContainer = document.getElementById("work-container");
    projectArray.forEach((project) => {
      // Clone the project container element
      const projectContainer = document.getElementById("project-container").cloneNode(true);
  
      // Set the title, description, and URL for the project
      const previewImage = projectContainer.querySelector("#preview");
      previewImage.src = project.image;

      const sitelink = projectContainer.querySelector("#img a");
      sitelink.href = project.url;

      const projectTitle = projectContainer.querySelector(".project-title");
      projectTitle.textContent = project.title;
  
      const projectDescription = projectContainer.querySelector(".project-description");
      projectDescription.textContent = project.description;
  
      const projectLink = projectContainer.querySelector(".code-link a");
      projectLink.href = project.code;
  
      // Append the cloned project container element to the work container
      workContainer.appendChild(projectContainer);
    });
  }


displayProjects();