let numbersKeyboard = ["Digit1", "Digit2", "Digit3", "Digit4"];
let input = document.createElement("input");
document.body.appendChild(input);
let keyboard = document.createElement("div");
keyboard.className = "keyboard";
document.body.appendChild(keyboard);
let numbers = document.createElement("ul");
numbers.className = "numbers";
keyboard.append(numbers);

for (let i = 1; i <= 4; i++) {
  let p = document.createElement("li");
  p.textContent = i;
  numbers.appendChild(p);
}
const children = Array.from(numbers.children);
console.log(children[0]);
input.addEventListener("keydown", function (event) {
  for (var i = 0; i < numbersKeyboard.length; i++) {
    if (event.key == 1) {
      children[0].style.backgroundColor = "blue";
    }
    if (event.key == 2) {
      children[1].style.backgroundColor = "blue";
    }
    if (event.key == 3) {
      children[2].style.backgroundColor = "blue";
    }
    if (event.key == 4) {
      children[3].style.backgroundColor = "blue";
    }
  }
});
input.addEventListener("keyup", function (event) {
  for (var i = 0; i < numbersKeyboard.length; i++) {
    if (event.key == 1) {
      children[0].style.backgroundColor = "black";
    }
    if (event.key == 2) {
      children[1].style.backgroundColor = "black";
    }
    if (event.key == 3) {
      children[2].style.backgroundColor = "black";
    }
    if (event.key == 4) {
      children[3].style.backgroundColor = "black";
    }
  }
});

//нужно закончить и провести рефакторинг кода
