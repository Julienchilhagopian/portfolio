const catchyTitle = document.querySelector(".js-catchy-title");
const possibleCharacter = "KJ*ZDZA£%D§ZEKNEZEDF£%ZJ1#LKNJK"



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
    let result = ""
  
    for (let i = 0; i < initialText.length + 1 ; i++) {
      result = initialText.substr(0, i);
  
      for (let j = i; j < initialText.length; j++){
        result += possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length));
      }
      this.show(result);
      
    }
  }

  show(result) {
    setTimeout(console.log(result), 5000)
  }




}




window.addEventListener("onload", new TextAnimation());