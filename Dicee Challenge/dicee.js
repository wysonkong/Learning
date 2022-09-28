function randomDice1() {
  var randomNumber1 = Math.floor((Math.random() * 4) + 1);
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  return randomImageSource
}

function randomDice2() {
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var randomDiceImage = "dice" + randomNumber2 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  return randomImageSource
}

function randomDice3() {
  var randomNumber3 = Math.floor((Math.random() * 8) + 1);
  var randomDiceImage = "dice" + randomNumber3 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  return randomImageSource
}

function randomDice4() {
  var randomNumber4 = Math.floor((Math.random() * 10) + 1);
  var randomDiceImage = "dice" + randomNumber4 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  return randomImageSource
}

function randomDice5() {
  var randomNumber5 = Math.floor((Math.random() * 10) + 1);
  var randomDiceImage = "dice" + randomNumber5 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  return randomImageSource
}

function randomDice6() {
  var randomNumber6 = Math.floor((Math.random() * 12) + 1);
  var randomDiceImage = "dice" + randomNumber6 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  return randomImageSource
}

function randomDice7() {
  var randomNumber7 = Math.floor((Math.random() * 20) + 1);
  var randomDiceImage = "dice" + randomNumber2 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  return randomImageSource
}

document.querySelectorAll(".img1")[0].setAttribute("src", randomDice1());
document.querySelectorAll(".img2")[0].setAttribute("src", randomDice2());
document.querySelectorAll(".img3")[0].setAttribute("src", randomDice3());
document.querySelectorAll(".img4")[0].setAttribute("src", randomDice4());
document.querySelectorAll(".img5")[0].setAttribute("src", randomDice5());
document.querySelectorAll(".img6")[0].setAttribute("src", randomDice6());
document.querySelectorAll(".img7")[0].setAttribute("src", randomDice7());
