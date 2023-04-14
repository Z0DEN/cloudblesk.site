let name = "Джон"
let admin = name
console.log(`Переменная name = ${name}`)
console.log(`Переменная admin = ${admin}`)
function getName(){
  name = document.getElementsByName("firstname")[0].value;
  admin = name
  alert(`Ваше имя ${adsmin} записано в переменную name затем скопировано в admin`)
}