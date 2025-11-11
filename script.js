// Fonction pour récupérer un cookie spécifique
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// Récupération DOM
const body = document.querySelector("body");
const buttonBlue = document.querySelector("#button-blue");
const buttonWhite = document.querySelector("#button-white");
const buttonRed = document.querySelector("#button-red");

// Restaurer la couleur sauvegardée au chargement de la page
const colorSaved = getCookie("color");
if (colorSaved) {
  body.style.backgroundColor = colorSaved;
}

// Ajout Evenement sur chaque boutton
buttonBlue.addEventListener("click", function () {
  body.style.backgroundColor = "#283593";
  const dateExpiration = new Date();
  dateExpiration.setFullYear(dateExpiration.getFullYear() + 10);
  document.cookie = "color=#283593; expires=" + dateExpiration.toUTCString();
});

buttonWhite.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  const dateExpiration = new Date();
  dateExpiration.setFullYear(dateExpiration.getFullYear() + 10);
  document.cookie = "color=white; expires=" + dateExpiration.toUTCString();
});

buttonRed.addEventListener("click", function () {
  body.style.backgroundColor = "#ce0505";
  const dateExpiration = new Date();
  dateExpiration.setFullYear(dateExpiration.getFullYear() + 10);
  document.cookie = "color=#ce0505; expires=" + dateExpiration.toUTCString();
});

// // TIME
// // Jours ( 7 jours - 24 heures - 60 mins - 60 secondes - 1000 millisecondes )
// dateExpiration.setTime(dateExpiration.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 jours
// //Années
// dateExpiration.setFullYear(dateExpiration.getFullYear() + 10); // 10 ans
