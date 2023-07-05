var randomNumbers1=Math.floor(Math.random()*6)+1;
var newLink1 ="./images/dice"+randomNumbers1+".png";
document.querySelectorAll("img")[0].setAttribute("src",newLink1);
var randomNumbers2 =Math.floor(Math.random()*6)+1;
var newLink2 ="./images/dice"+randomNumbers2+".png"
document.querySelectorAll("img")[1].setAttribute("src",newLink2);
if(randomNumbers1 > randomNumbers2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!!🏆";
}
else if(randomNumbers1 < randomNumbers2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!!🏆";
}
else
{
    document.querySelector("h1").innerHTML="It's A tie🤝";
}