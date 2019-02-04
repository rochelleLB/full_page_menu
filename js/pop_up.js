let popUp = document.getElementById("menu-area");

function showme() {
  popUp.style.display = "block";
  popUp.style.animation = "menuOpen 750ms forwards";
};

function hideme() {
  popUp.style.animation = "menuClose 750ms forwards";

};

