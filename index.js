// Select the button
document.querySelector("button").addEventListener("click", function() {

  // Generate new random values
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Update the page
  if (randomNumber1 > randomNumber2) 
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  else  
    document.querySelector("h1").innerHTML = "Draw!";

  // Update the image source based on the random number
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
});