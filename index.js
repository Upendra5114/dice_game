var random1 = Math.random();
random1 = random1 * 6;
random1 = Math.floor(random1) + 1;
var img1 = "dice" + random1 + ".png";
var random2 = Math.floor(Math.random() * 6) + 1;
var img2 = "dice" + random2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src",img1);

document.getElementsByClassName("img2")[0].setAttribute("src",img2);
// if(random1 === 1){
//     document.getElementsByClassName("img1")[0].setAttribute("src","dice1.png")
// }
// else if(random1 === 2){
//     document.getElementsByClassName("img1")[0].setAttribute("src","dice2.png")
// }
// else if(random1 === 3){
//     document.getElementsByClassName("img1")[0].setAttribute("src","dice3.png")
// }
// else if(random1 === 4){
//     document.getElementsByClassName("img1")[0].setAttribute("src","dice4.png")
// }
// else if(random1 === 5){
//     document.getElementsByClassName("img1")[0].setAttribute("src","dice5.png")
// }
// else{
//     document.getElementsByClassName("img1")[0].setAttribute("src","dice6.png")
// }
if(random1 === random2){
    document.querySelector("h1").innerHTML = "Draw!🤷🏼‍♂️";
}
else if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player1 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}