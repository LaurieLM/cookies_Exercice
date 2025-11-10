// Récupération DOM
const body = document.querySelector("body");
const buttonBlue = document.querySelector("#button-blue");
const buttonWhite = document.querySelector("#button-white");
const buttonRed = document.querySelector("#button-red");

// Ajout Evenement sur chaque boutton
buttonBlue.addEventListener("click", function () {
  body.style.backgroundColor = "#283593";
  const expiration = new Date();
  expiration.setFullYear(expiration.getFullYear() + 10);
  document.cookie =
    "couleur=bleu; expires=" + expiration.toUTCString() + "; path=/";
});

buttonWhite.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  const expiration = new Date();
  expiration.setFullYear(expiration.getFullYear() + 10);
  document.cookie =
    "couleur=white; expires=" + expiration.toUTCString() + "; path=/";
});

buttonRed.addEventListener("click", function () {
  body.style.backgroundColor = "#ce0505";
  const expiration = new Date();
  expiration.setFullYear(expiration.getFullYear() + 10);
  document.cookie =
    "couleur=#ce0505; expires=" + expiration.toUTCString() + "; path=/";
});
