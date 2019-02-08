const catchyTitle = document.querySelector(".js-catchy-title");
const catchyTitleAside = document.querySelector(".js-catchyTitle-aside");
const catchyTitleArrow = document.querySelector(".js-catchyTitle-arrow");
const projectsHeader = document.querySelector(".js-project-header");
const cards = document.querySelectorAll(".card");
const footer = document.querySelector("footer");

// Changing letter animation
  changeLetters = () => {
    const possibleChars = "POIUYTREZAQSDFGHJKLMNBVCXW"
    const initialText = "Hi ! I am Julien and I'd like to <span>become</span> your next kick ass intern Developer <sup>*</sup>";
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
      console.log(index);

      if (index >= 90){ // When Index reaches 90 the animation is almost over so im displaying again all the element needed.
        catchyTitleAside.style.visibility = "unset";
        catchyTitleArrow.style.visibility = "unset";
        cards.forEach(item => item.style.visibility = "unset");
        projectsHeader.style.visibility = "unset";
        footer.style.display = "unset";
      }

    }, index * 60);
  }

  
// load eventListener would not work cause i wanted all pictures to be loaded before animation init 
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    changeLetters();
  }
};