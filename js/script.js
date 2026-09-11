let errorHigh = document.getElementById("errorHigh");
let errorLow = document.getElementById("errorLow");
let errorNaN = document.getElementById("errorNaN");
let successBanner = document.getElementById("successBanner");
let guessInput = document.getElementById("guessInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let bannerTimeout = 3000;
let secretNum = Math.floor(Math.random() * 100) + 1;
let banner = document.querySelectorAll(".banner")

function tooHigh() {
  errorHigh.hidden = false;
  setTimeout(() => { errorHigh.hidden = true; }, bannerTimeout);
}

function tooLow() {
  errorLow.hidden = false;
  setTimeout(() => { errorLow.hidden = true; }, bannerTimeout);
}

function invalidNum() {
  errorNaN.hidden = false;
  setTimeout(() => { errorNaN.hidden = true; }, bannerTimeout);
}

function success() {
  successBanner.hidden = false;
  setTimeout(() => { successBanner.hidden = true; }, bannerTimeout);
}

submitBtn.addEventListener("click", () => {
  let userGuess = Number(guessInput.value);
  if (!guessInput.value || isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    invalidNum();
    return;
  }
  if (userGuess > secretNum) {
    tooHigh();
  } else if (userGuess < secretNum) {
    tooLow();
  } else {
    success();
  }
});

resetBtn.addEventListener("click", () => {
	location.reload()
	guessInput.value = ""
})