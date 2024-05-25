"use strict";
const card = document.querySelector(".card");
const overlay = document.querySelector(".overlay");
const btnCloseCard = document.querySelector(".close-card");
const btnOpenCard = document.querySelectorAll(".show-card");

console.log(btnOpenCard);

const openCard = function () {
  card.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeCard = function () {
  card.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenCard.length; i++)
  btnOpenCard[i].addEventListener("click", openCard);
btnCloseCard.addEventListener("click", closeCard);
overlay.addEventListener("click", closeCard);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!card.classList.contains("hidden")) closeCard();
  }
});
