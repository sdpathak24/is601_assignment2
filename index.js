function reverseString() {
  const userInput = document.getElementById("userInput").value;
  const reversedString = userInput.split("").reverse().join("");
  document.getElementById("result").textContent = `Reversed String: ${reversedString}`;
}

function checkPalindrome() {
  const numberInput = document.getElementById("numberInput").value;
  const reversedInput = numberInput.split("").reverse().join("");

  if (numberInput === reversedInput) {
    document.getElementById("result").textContent = "It is a palindrome!";
  } else {
    document.getElementById("result").textContent = "It is not a palindrome.";
  }
}

function calculateTotal() {
  const subtotal = parseFloat(document.getElementById("subtotal").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(subtotal) || isNaN(tipPercent)) {
    document.getElementById("result").textContent = "Please enter valid numbers for both fields.";
    return;
  }

  const tipAmount = (subtotal * tipPercent) / 100;
  const totalAmount = subtotal + tipAmount;

  document.getElementById("result").textContent = `Total Amount to Pay: $${totalAmount.toFixed(2)}`;
}
