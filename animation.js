const catchyTitle = document.querySelector(".js-catchy-title");
const catchyTitleAside = document.querySelector(".js-catchyTitle-aside");
const catchyTitleArrow = document.querySelector(".js-catchyTitle-arrow");
const projectsHeader = document.querySelector(".js-project-header");
const cards = document.querySelectorAll(".card");
const img = document.getElementsByClassName("card-mockup");
const footer = document.querySelector(".home-footer");

// Changing letter animation
  changeLetters = () => {
    const possibleChars = "POIUYTREZAQSDFGHJKLMNBVCXW"
    const initialText = "Hi ! I am Julien and I'd like to <span>become</span> your next kick ass trainee Developer <sup>*</sup>";
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

      if (index >= 95){ 
        // When Index reaches 95 the animation is almost over so im displaying again all the element needed.
        // Im doing this because otherwise the user is going to see the content of the web site before the end of the animation. 
        //As im injecting html, the content its sticking to the catchy-title before animation ends. 
        //I could set a height but very hard to maintain with responsiveness.
        catchyTitleAside.style.visibility = "unset"; 
        catchyTitleArrow.style.visibility = "unset";
        cards.forEach(item => item.style.visibility = "unset");
        projectsHeader.style.visibility = "unset";
        footer.style.visibility = "unset";
      }

    }, index * 70);
  }


console.log("deployed successful");


window.addEventListener('load', changeLetters);