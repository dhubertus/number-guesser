
var recBtn = document.getElementById("guess");
var prevGuess = document.getElementById("prev-guess");
var clearBtn = document.getElementById("clr");
var resetBtn = document.getElementById("reset");
var hiLo = document.getElementById("high-low");
var win = document.getElementById("win");
var randomNumb = numberGen();


/* Random Number Generator (1 - 100) */
function numberGen () {
  return (Math.ceil(Math.random() * 100));
}


/* Recieve Button (return previous guess items) */

recBtn.addEventListener ("click", function() {
  var recInput = document.getElementById("input");
  var input = recInput.value;
  prevGuess.innerText = input;
})


/* Recieve Button (return NaN/hi/low/boom items) */

recBtn.addEventListener ("click", function highLowWin() {
  var recInput = document.getElementById("input");
  var parse = parseInt(recInput.value);
  var input = recInput.value;

  if (isNaN(input)) {
    return win.innerText = "That is not a number!";
      hiLo.innerText = "";
  } else if (input > 100) {
      win.innerText = "You have guessed greater than the upper limit of 100!";
      hiLo.innerText = "";
  } else if (input < 1) {
      win.innerText = "You have guessed less than the lower limit of 1!";
      hiLo.innerText = "";
  } else if (input < randomNumb) {
      win.innerText = "Your last guess was";
      hiLo.innerText = "That was too LOW";
  } else if (input > randomNumb) {
      win.innerText = "Your last guess was";
      hiLo.innerText = "That was too HIGH";
  } else if (input == randomNumb) {
      win.innerText = "Boom! Correct!";
      hiLo.innerText = "Think you're tough!? Play Again!";
      resetBtn.innerText = "Play Again!";
      clearBtn.classList.add("disable");
      resetBtn.classList.add("disable");
    }
  })


/* Recieve button (enable/disable responsibilities) */

recBtn.addEventListener ("click", function () {
  clearBtn.classList.remove("disable");
  resetBtn.classList.remove("disable");
})


/* Clear button items with enable/disable responsibilities */

clearBtn.addEventListener("click", function() {
  var recInput = document.getElementById("input");
      recInput.value = null;
      clearBtn.classList.add("disable");
})


/* Reset button items with enable/disable responsiblities */

resetBtn.addEventListener("click", function() {
  var recInput = document.getElementById("input");
      recInput.value = null;
      win.innerText = "Your last guess was";
      prevGuess.innerText = "";
      hiLo.innerText = "";
      clearBtn.classList.add("disable");
      resetBtn.classList.add("disable");
      resetBtn.innerText = "Reset";
      randomNumb = numberGen();
})
