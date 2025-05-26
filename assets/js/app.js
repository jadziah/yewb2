//console.log("This is loaded in app.js");

window.addEventListener("DOMContentLoaded", () => {
  scrollFunction();
  topFunction();
  const theme = localStorage.getItem("theme");
  const logoHeader = document.getElementById('logo-header');
  const darkLogo = './assets/images/logo_dark.svg';
  const lightLogo = './assets/images/logo_light.svg';

  if (theme == "dark") {
    document.body.classList.add("dark-mode");
    if (logoHeader) logoHeader.src = darkLogo;
  } else {
    document.body.classList.remove("dark-mode");
    if (logoHeader) logoHeader.src = lightLogo;
  }
  console.log("Loaded theme setup:",theme);
  console.log("Loaded logo version:", logoHeader?.src);

});
//////////////



window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  console.log("Current theme:", theme);
});
//////////
function myFunctionDark22() {
  const isDark = document.body.classList.toggle("dark-mode");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const logoHeader = document.getElementById('logo-header');
  const darkLogo = './assets/images/logo_dark.svg';
  const lightLogo = './assets/images/logo_light.svg';

  if (logoHeader) logoHeader.src = isDark ? darkLogo : lightLogo;
}


document.addEventListener("DOMContentLoaded", () => {
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  window.topFunction = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});
let myElement = document.getElementById("someId"); 
console.log(myElement); // This will show `null` if the element is missing
/*
window.addEventListener("DOMContentLoaded", () => {

  const theme = localStorage.getItem("theme");
  const logoHeader = document.getElementById('logo-header');
  const darkLogo = '/assets/images/logo_dark.svg';
  const lightLogo = '/assets/images/logo_light.svg';

  if (theme === "dark") {
    document.body.classList.add("dark");
    if (logoHeader) logoHeader.src = darkLogo;
  } else {
    if (logoHeader) logoHeader.src = lightLogo;
  }
  console.log("Loeaded this theme setup");
});




function myFunctionDark22() {
  const isDark = document.body.classList.toggle("dark-mode");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const logoHeader = document.getElementById('logo-header');
  const darkLogo = '/assets/images/logo_dark.svg';
  const lightLogo = '/assets/images/logo_light.svg';

  if (logoHeader) logoHeader.src = isDark ? darkLogo : lightLogo;
}
///////////////////////////
*/
function demo2(){
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("demo3").innerHTML = localStorage.getItem("lastname");
}

function setLogo(){
  document.getElementById("logo-header3").innerHTML
}
/////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('language') || 'en';
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
 
});



/////////////////


//Load all functions to DOM, and make sure it works
document.addEventListener("DOMContentLoaded", async (event) => {
    loadComponent("header", "./components/header.html");
    loadComponent("footer", "./components/footer.html");
    console.log("DOM fully loaded and components loaded.");
  });

///////////////

// topnav function
function mobileMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }


// Gallery

document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  const showSlides = (n) => {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Remove 'active' from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    // Show current slide and activate dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  };

  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  };

  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  };

  // Initial call
  showSlides(slideIndex);

  // Event listeners (example setup)
  document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
  document.querySelector(".next").addEventListener("click", () => plusSlides(1));
  
  Array.from(dots).forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index + 1));
  });
});


// <head> element
(function updateHead() {

    // Set or change the document title
    document.title = "Youth Exchanges without Borders website";
  
    // Create and append <meta charset="UTF-8">
    const charsetMeta = document.createElement("meta");
    charsetMeta.setAttribute("charset", "UTF-8");
    document.head.appendChild(charsetMeta);

    // Create and append <meta name="viewport">
    const viewportMeta = document.createElement("meta");
    viewportMeta.setAttribute("name", "viewport");
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.appendChild(viewportMeta);

    // Add meta tag dynamically
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Youth Exchanges without Borders Website, YEWB';
    document.head.appendChild(metaDescription);

    // Add meta tag author
    const metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    metaAuthor.content = 'YEWB Member';
    document.head.appendChild(metaAuthor);
  
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/style.css"; // Replace with your stylesheet URL
    link.type = "text/css";
    document.head.appendChild(link);

    const linkIconSet = document.createElement('link');
    linkIconSet.rel = 'stylesheet';
    linkIconSet.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'; // Icons link
    document.head.appendChild(linkIconSet);

     // Add a link to a website small icon*/
     const linkIcon = document.createElement('link');
     linkIcon.rel = 'icon';
     linkIcon.href = './assets/icons/icon.ico'; // Icon link
     linkIcon.type = 'image/x-icon';
     document.head.appendChild(linkIcon);


/* 
      const linkIconSet = document.createElement('link');
      linkIconSet.rel = 'stylesheet';
      linkIconSet.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'; // Icons link
      document.head.appendChild(linkIconSet);

      const linkIconSet2 = document.createElement('link');
      linkTag.rel = 'stylesheet';
      linkTag.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'; // Icons link
      document.head.appendChild(linkIconSet2);
      */

  })();


function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}



function updateContent(langData) { 
  document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.innerHTML = langData[key];
  });
}

function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}

async function fetchLanguageData(lang) {
  const response = await fetch(`/assets/js/${lang}.json`); //location file of language translated text
  return response.json();
}

async function changeLanguage(lang) {
  await setLanguagePreference(lang);
  
  const langData = await fetchLanguageData(lang);
  updateContent(langData);
 
}

