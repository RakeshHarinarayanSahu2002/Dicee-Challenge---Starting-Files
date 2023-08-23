var imagesArr = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var randomImg1 = Math.floor(Math.random() * imagesArr.length);

var randomImg2 = Math.floor(Math.random() * imagesArr.length);

if (randomImg1 === randomImg2) {
  if (randomImg1 === imagesArr.length - 1) randomImg1--;
  else {
    randomImg1++;
  }
}

let generatedImg1 = imagesArr[randomImg1];

let generatedImg2 = imagesArr[randomImg2];

let image1 = (document.querySelector(".img1").src = generatedImg1);

let image2 = (document.querySelector(".img2").src = generatedImg2);
