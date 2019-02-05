const catchyTitle = document.querySelector(".js-catchy-title");
const possibleChars = "KJ*ZDZA£%D§ZEKNEZEDF£%ZJ1#LKNJK"

class TextAnimation {
  constructor() {
    this.animation = this.changeLetters.bind(this);
    this.show = this.show.bind(this);
    this.onInit();
  }

  onInit() {
    this.launch = this.animation();
  }

  changeLetters () {
    const initialText = "testing this new feature";
    let result = "";
  
    for (let i = 0; i < initialText.length + 1 ; i++) {
      result = initialText.substr(0, i);
  
      for (let j = i; j < initialText.length; j++){
        result += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      }
      this.show(result, i);
    }
  }

  show(result, i) {
    setTimeout(function(){
      catchyTitle.innerHTML = result;
    }, i * 50);
  }

}


document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    new TextAnimation();
  }
};

