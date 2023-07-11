// La banniere du header change de sens toutes les 5 secondes
let images = ["./img/background.jpg", "./img/backgroundreverse.jpg"];
let indexCounter = 0;
setInterval(() => {
  indexCounter++;
  if (indexCounter == images.length) {
    indexCounter = 0;
  }
  $("#banniere").css({
    backgroundImage: `url(${images[indexCounter]})`,
  });
}, 15000);

// Click sur le bouton dropUp (un li transformé pour faire un menu déroulant)

$("#dropUp").on("click", () => {
  // si le menu est caché , il prendra la proprieté display block au click, sinon il reprendra la proprieté display none
  //   if ($(".dropDown").css("display") === "none") {
  //     $(".dropDown").css({ display: "block" });
  //   } else if ($(".dropDown").css("display") === "block") {
  //     $(".dropDown").css({ display: "none" });
  //   }
  $(".dropDown").toggle();
});

// Changer la voiture à chaque click

let carImages = [
  "./img/vehicule1.png",
  "./img/vehicule2.png",
  "./img/vehicule3.png",
  "./img/vehicule4.png",
];

let indexVoitures = 0;

// Voiture 1
$(".leftOne").on("click", () => {
  indexVoitures--;
  if (indexVoitures < 0) {
    indexVoitures = carImages.length - 1;
  }
  $("#voiture1").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});
$(".rightOne").on("click", () => {
  indexVoitures++;
  if (indexVoitures == carImages.length) {
    indexVoitures = 0;
  }
  $("#voiture1").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});

// Voiture 2
$(".leftTwo").on("click", () => {
  indexVoitures--;
  if (indexVoitures < 0) {
    indexVoitures = carImages.length - 1;
  }
  $("#voiture2").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});
$(".rightTwo").on("click", () => {
  indexVoitures++;
  if (indexVoitures == carImages.length) {
    indexVoitures = 0;
  }
  $("#voiture2").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});

// voiture 3
$(".leftThree").on("click", () => {
  indexVoitures--;
  if (indexVoitures < 0) {
    indexVoitures = carImages.length - 1;
  }
  $("#voiture3").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});
$(".rightThree").on("click", () => {
  indexVoitures++;
  if (indexVoitures == carImages.length) {
    indexVoitures = 0;
  }
  $("#voiture3").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});

// Voiture 4
$(".leftFour").on("click", () => {
  indexVoitures--;
  if (indexVoitures < 0) {
    indexVoitures = carImages.length - 1;
  }
  $("#voiture4").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});
$(".rightFour").on("click", () => {
  indexVoitures++;
  if (indexVoitures == carImages.length) {
    indexVoitures = 0;
  }
  $("#voiture4").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});

// Voiture 5

$(".leftFive").on("click", () => {
  indexVoitures--;
  if (indexVoitures < 0) {
    indexVoitures = carImages.length - 1;
  }
  $("#voiture5").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});
$(".rightFive").on("click", () => {
  indexVoitures++;
  if (indexVoitures == carImages.length) {
    indexVoitures = 0;
  }
  $("#voiture5").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});

// voiture 6

$(".leftSix").on("click", () => {
  indexVoitures--;
  if (indexVoitures < 0) {
    indexVoitures = carImages.length - 1;
  }
  $("#voiture6").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});
$(".rightSix").on("click", () => {
  indexVoitures++;
  if (indexVoitures == carImages.length) {
    indexVoitures = 0;
  }
  $("#voiture6").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});

// Voiture 7

$(".leftSeven").on("click", () => {
  indexVoitures--;
  if (indexVoitures < 0) {
    indexVoitures = carImages.length - 1;
  }
  $("#voiture7").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});
$(".rightSeven").on("click", () => {
  indexVoitures++;
  if (indexVoitures == carImages.length) {
    indexVoitures = 0;
  }
  $("#voiture7").css({
    backgroundImage: `url(${carImages[indexVoitures]})`,
  });
});

// Div lors du scroll :

$(document).scroll(() => {
if (window.scrollY >= 1384) {
    $(".noShow").fadeIn(5000);
  } else {
    $(".noShow").fadeOut(1000);
  }
});