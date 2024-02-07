for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function (eve) {
      makeSound(this.textContent);
      buttonAnimation(this.textContent);
    });
}
document.body.addEventListener("keydown", (eve) => {
  eve.preventDefault();
  makeSound(eve.key);
  buttonAnimation(eve.key);
});

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
function makeSound(key) {
  var kick = new Audio("./sounds/kick-bass.mp3");
  var snare = new Audio("./sounds/snare.mp3");
  var crash = new Audio("./sounds/crash.mp3");
  var tom1 = new Audio("./sounds/tom-1.mp3");
  var tom2 = new Audio("./sounds/tom-2.mp3");
  var tom3 = new Audio("./sounds/tom-3.mp3");
  var tom4 = new Audio("./sounds/tom-4.mp3");
  switch (key) {
    case "w":
      kick.play();
      break;
    case "a":
      snare.play();
      break;
    case "s":
      crash.play();
      break;
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;
    default:
      console.log(eve.target.textContent);
  }
}