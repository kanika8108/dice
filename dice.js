document.getElementById("start").addEventListener("click",function(){
makeSound();
let p1=Math.floor(Math.random()*6)+1;
let p2=Math.floor(Math.random()*6)+1;

document.getElementById("img1").src=`${p1}.png`;
document.getElementById("img2").src=`${p2}.png`;

if (p1 > p2) {
    document.querySelector("h1").textContent = "🏆🎉Player 1 wins🏆🎉";
  } else if (p1 < p2) {
    document.querySelector("h1").textContent = "🏆🎉Player 2 wins🏆🎉";
  } else {
    document.querySelector("h1").textContent = "🎈Oops! It's a DRAW🎈";
  }
});

function makeSound(){
    let audio = new Audio("sound.mp3");
    audio.play();
}
