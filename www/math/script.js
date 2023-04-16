R = "камень"
S = "ножницы"
P = "бумага"

function getRandomInt(UserChoice) {
  rndInt = Math.floor(Math.random());
  if( rndInt < 0.33){
    if (UserChoice = P){
      alert (`Ничья : ${UserChoice} VS ${P}`)
    }
    if (UserChoice = S){
      alert (`Победа : ${UserChoice} VS ${P}`)
    }
    else {
      alert (`Поражение : ${UserChoice} VS ${P}`)
    }
  }
  if (rndInt > 0.33 < 0.66) {
    if (UserChoice = S){
      alert (`Ничья : ${UserChoice} VS ${S}`)
    }
    if (UserChoice = R){
      alert (`Победа : ${UserChoice} VS ${S}`)
    }
    else {
      alert (`Поражение : ${UserChoice} VS ${S}`)
    }
  }
  if (rndInt > 0.66) {
    if (UserChoice = R){
      alert (`Ничья : ${UserChoice} VS ${R}`)
    }
    if (UserChoice = P){
      alert (`Победа : ${UserChoice} VS ${R}`)
    }
    else {
      alert (`Поражение : ${UserChoice} VS ${R}`)
    }
  }

}
function rsp(){
  UserChoice = prompt("Камень! Ножницы! Бумага!").toLowerCase()
  getRandomInt(UserChoice)
}