document.querySelector("button").addEventListener("click",response);
function response(){
var randomNumber1 = Math.round(Math.random()*6)+1;//1-6
var randomDice1 = "image/dice"+randomNumber1+".png";//img/dice1.png-img/dice6.png
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);//random Dice

var randomNumber2 = Math.round(Math.random()*6)+1;//1-6
var randomDice2 = "image/dice"+randomNumber2+".png";//img/dice1.png-img/dice6.png
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);//random dice

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 Player 1 Win";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="🚩 Player 2 Win";
}
else{
  document.querySelector("h1").textContent="Draw";
}
}
