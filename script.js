let randomImg1 = Math.floor(Math.random() * 6) + 1;
let randomSrc1 = `images/dice${randomImg1}.png`;
document.querySelector(".img1").setAttribute("src", randomSrc1);

let randomImg2 = Math.floor(Math.random() * 6) + 1;
let randomSrc2 = `images/dice${randomImg2}.png`;
document.querySelector(".img2").setAttribute("src", randomSrc2);

if (randomImg1 === randomImg2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomImg1 > randomImg2)
  document.querySelector("h1").innerHTML = "🚩 Play 1 wins!";
else {
  document.querySelector("h1").innerHTML = "Play 2 wins! 🚩";
}
