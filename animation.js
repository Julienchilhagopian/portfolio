const catchyTitle = document.querySelector(".js-catchy-title");

  changeLetters = () => {
    const possibleChars = "POIUYTREZAQSDFGHJKLMNBVCXW"
    const initialText = "Hi ! I am Julien and I'd like to <span>become</span> your next kick ass intern <span>Developer</span> <sup>*</sup>";
    let result = "";
    let e = 0;

      for (let i = 0; i < initialText.length + 1 ; i++) {
        result = initialText.substr(0, i);
    
        for (let j = i; j < initialText.length; j++){
        result += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }
        show(result, i);
      }
  
  }


  show = (result, index) => {
    setTimeout(function(){
      catchyTitle.innerHTML = result;
    }, index * 55);
  }


  function test() {
   const span = Array.from(catchyTitle.querySelectorAll('span'));
    if(span.length > 2) {
      


    }
  }

  

// load eventListener would not working cause i wanted all pictures to be loaded before animation init 
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    changeLetters();
  }
};

window.addEventListener("scroll", test);