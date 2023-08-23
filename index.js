/*Player1*/

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource);

/*Player2*/

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins🥇";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player2 Wins🥇";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}