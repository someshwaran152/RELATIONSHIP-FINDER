const correctAnswer = "friend"; // Change this to anything you want

function checkGuess() {
  const input = document
    .getElementById("guessInput")
    .value.trim()
    .toLowerCase();
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Please enter a guess!";
    result.style.color = "orange";
  } else if (input === correctAnswer.toLowerCase()) {
    result.textContent = "🎉 Correct! You guessed the relation!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Nope! Try again.";
    result.style.color = "red";
  }
}