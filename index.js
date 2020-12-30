

//dice game 

  var randomNumber1 = Math.floor(Math.random() * 6 + 1);// random number from 1 to 6
  var randomDiceImage="dice" + randomNumber1 + ".png";// select dice image from 1 to 6 randomly
  var randomImageSource = "images/" + randomDiceImage;//images /dice 1.png to dice6.png

  //select attribute of images
  var image1=document.querySelectorAll("img")[0];

  //set attribute
  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var randomImageSource2 = "images/dice" + randomNumber2 +".png";
  // select img tag with array [1] second lement
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  //innerHtml changes according to dice result which player won
  if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML=" 🚩Player 1 wins!";
  }
  else if(randomNumber2>randomNumber1)
  {
     document.querySelector("h1").innerHTML = " 🚩Player 2 wins!";
  }
  else
  {
 document.querySelector("h1").innerHTML = " Draw!";
  }