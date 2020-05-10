const catchyTitle = document.querySelector(".js-catchy-title");
const catchyTitleArrow = document.querySelector(".js-catchyTitle-arrow");
const projectsHeader = document.querySelector(".js-project-header");
const cards = document.querySelectorAll(".card");
const img = document.getElementsByClassName("card-mockup");
const footer = document.querySelector(".home-footer");

// Changing letter animation
  changeLetters = () => {
    const possibleChars = "POIUYTREZAQSDFGHJKLMNBVCXW"
    const initialText = "Bonjour.<span></span> Je suis Julien.<span></span> Je souhaite <span>devenir</span> votre prochain apprenti.";
    let result = "";

      for (let i = 0; i < initialText.length + 1 ; i++) {
        result = initialText.substr(0, i);
    
        for (let j = i; j < initialText.length; j++){
        result += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }
        show(result, i);
      }
  
  }

  show = (result, index) => {
    setTimeout(() => {
      catchyTitle.innerHTML = result;

      if (index >= result.length){ 
        // When Index reaches 95 the animation is almost over so im displaying again all the element needed.
        // Im doing this because otherwise the user is going to see the content of the web site before the end of the animation. 
        //As im injecting html, the content its sticking to the catchy-title before animation ends. 
        //I could set a height but very hard to maintain with responsiveness.
        catchyTitleArrow.style.visibility = "unset";
        cards.forEach(item => item.style.visibility = "unset");
        projectsHeader.style.visibility = "unset";
        footer.style.visibility = "unset";
      }

    }, index * 70);
  }


console.log("deployed successful");


window.addEventListener('load', changeLetters);