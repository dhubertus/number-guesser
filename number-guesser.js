
/* NOTE global variables run at page start. However I have seen cases where the input still works */

var recBtn = document.getElementById("guess");
var prevGuess = document.getElementById("prevGuess");
var clearBtn = document.getElementById("clr");
var resetBtn = document.getElementById("reset");
var hiLo = document.getElementById("high-low");
var win = document.getElementById("win");
var randomNumb = numberGen();


/* For programming reference */
console.log(randomNumb);


/* rand num 1 - 100 */
function numberGen () {
  return Math.ceil(Math.random() * 100);
}


/* Recieve Button return previous guess items */
/* Recieve Button enable disable responsibilities*/
recBtn.addEventListener ("click", function() {
  var recInput = document.getElementById("input");
  var input = recInput.value;
  prevGuess.innerText = input;
})


/* Recieve Button return NaN/hi/low/boom items*/
/*NOTE parse is not used bc it is not recognizing #letter combos. Also direct input is not viewed as string, why??*/
/* Switched input type to number to avoid possible #lettercombo */

recBtn.addEventListener ("click", function highLowWin() {
  var recInput = document.getElementById("input");
  var parse = parseInt(recInput.value);
  var input = recInput.value;

  if (isNaN(input)) {
    return win.innerText = "That is not a number!";
      hiLo.innerText = "";
  } if (input > 100) {
      win.innerText = "You have guessed greater than the upper limit!";
  } else if (input < 1) {
      win.innerText = "You have guessed less than the lower limit!";
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


/* Recieve button enable/disable responsibilities */

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
      console.log(randomNumb);
})
