const catchyTitle = document.querySelector(".js-catchy-title");
const possibleCharacter = "KJ*ZDZA£%D§ZEKNEZEDF£%ZJ1#LKNJK"

const textAnimation = () => {
  console.log("CCOUCOUOC");

  //setTimeout(changeLetters(), 1000);
}


let changeLetters = () => {
  const initialText = "testing this new feature";
  let result = "";


  for (let i = 0; i < initialText.length + 1 ; i++) {
    result = initialText.substr(0, i);

    for (let j = i; j < initialText.length; j++){
      result += possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length));
    }
    setTimeout(test(), i*500);
  }

  function test(){
    console.log(result);
  }


}


window.addEventListener("onload", textAnimation());