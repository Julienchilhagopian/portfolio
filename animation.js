const catchyTitle = document.querySelector(".js-catchy-title");
const possibleChars = "KJ*ZDZA£%D§ZEKNEZEDF£%ZJ1#LKNJK"


  changeLetters = () => {
    const initialText = "testing this new feature";
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
    setTimeout(function(){
      catchyTitle.innerHTML = result;
    }, index * 50);
  }
  


// load eventListener would not working cause i wanted all pictures to be loaded before animation init 
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    changeLetters();
  }
};