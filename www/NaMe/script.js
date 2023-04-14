function getName(){
  let name = document.getElementsByName("firstname")[0].value;
  let admin = name
  alert(`Ваше имя ${admin} записано в переменную name затем скопировано в admin`)
}