function getRandomInt(max) {
        console.log(Math.floor(Math.random() * max))
}
console.log(getRandomInt(24))


var list = document.getElementById('hello') 
var h1 = document.createElement('h1')
h1.innerHTML = `${document.getElementById('header11').innerHTML}`
h1.id = ('newH1')
list.appendChild(h1)
