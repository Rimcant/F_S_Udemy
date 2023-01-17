
var numimagem1 = Math.floor(Math.random() * 6) + 1;
var numimagem2 = Math.floor(Math.random() * 6)+1;
console.log(numimagem1);
console.log(numimagem2);



document.getElementsByClassName("img1")[0].setAttribute("src", `fornecido/Dicee Challenge - Starting Files/images/dice${numimagem1}.png`);
document.getElementsByClassName("img2")[0].setAttribute("src", `fornecido/Dicee Challenge - Starting Files/images/dice${numimagem2}.png`);



if (numimagem1 > numimagem2) {
document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 Wins!";
} else if (numimagem1==numimagem2){
document.getElementsByTagName("h1")[0].innerHTML = "🚩DRAW🚩";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!🚩";
}

//src="fornecido/Dicee Challenge - Starting Files/images/dice1.png"






    