var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6

var randomDiceImage1 = "Dice" + randomNumber1 + ".png"; // Dice1.png - Dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; // images/Dice1.png - images/Dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // 1-6

var randomDiceImage2 = "Dice" + randomNumber2 + ".png"; // Dice1.png - Dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; // images/Dice1.png - images/Dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If Player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

// If Player 2 wins
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}

// If there is no winnar!
else {
  document.querySelector("h1").innerHTML = "😲Draw!";
}
