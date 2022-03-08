var Teng = document.getElementById("teng");

function Raqam(number) {
  console.log(number);
  Teng.value += number
}

function Equal() {
  var Ekran = document.getElementById("teng")
  Ekran.value = eval(Ekran.value)
}

function Clear() {
  var Ekran = document.getElementById("teng")
  Ekran.value = " "
}

function Delete() {
  var Ekran = document.getElementById("teng");
  console.log("length", Ekran.value.length);
  Ekran.value = Ekran.value.slice(0,Ekran.value.length-1)

}


function Change(params) {

}

setInterval(Change, 4000)
const main = document.querySelector('main')
var button = document.querySelector(".dark")
button.addEventListener("click", () => {
main.classList.toggle('calc-light')})


function Shax() {
  var a = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var c = Math.floor(Math.random() * 255);

  document.querySelector("body").style.backgroundColor = `rgb(${a}, ${b}, ${c})`
  document.querySelector("body").style.backgroundImage = `url('http://unsplash.it/g/${1000+a}/800?&gravity=center')`
  document.querySelector("body").style.backgroundRepeat = "no-repeat"
  document.querySelector("body").style.backgroundSize = "cover"

}
  setInterval(Shax,4000)