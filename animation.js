const catchyTitle = document.querySelector(".js-catchy-title");

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
    }, index * 55);
  }

  
// load eventListener would not work cause i wanted all pictures to be loaded before animation init 
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    heightCalulator();
    changeLetters();
  }
};


// Based on most used screen resolution in france
function heightCalulator(element) {
  let winWidth = window.innerWidth;
  switch(true){
    case winWidth <= 375:
    catchyTitle.style.height = `${winWidth + 140}px`;
    break;
    case winWidth <= 768:
    catchyTitle.style.height = `${winWidth + 80}px`;
    break;
    case winWidth <= 1160:
    catchyTitle.style.height = `${winWidth - 60}px`;
    break;
    case winWidth <= 1366:
    catchyTitle.style.height = `${winWidth - 235}px`;
    break;
    case winWidth <= 1500:
    catchyTitle.style.height = `${winWidth - 535}px`;
    break;
    case winWidth <= 1700:
    catchyTitle.style.height = `${winWidth - 735}px`;
    break;
    case winWidth <= 1920:
    catchyTitle.style.height = `${winWidth - 1085}px`;
    break;
  }
}
