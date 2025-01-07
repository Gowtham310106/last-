var randomNumber=Math.floor(Math.random()*6)+1;
var randomDice="dice"+randomNumber+".png";
var randomSource="images/"+randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDice2="dice"+randomNumber2+".png";
var randomSource2="images/"+randomDice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSource2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
}
else{
    ddocument.querySelector("h1").innerHTML="Draw!";
}
