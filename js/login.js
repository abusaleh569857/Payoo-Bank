document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const inputNum = getInputFieldValueById("input-phn-num");
  const inputDigit = getInputFieldValueById("input-digit");
  const phnNum = 12345;
  const digit = 234;
  if (inputNum === phnNum && inputDigit === digit) {
    // console.log("Welcome to the home page!");
    window.location.href = "/home.html";
  } else {
    alert("Phone Number or Digit Mismatched. Please try again!");
  }
});
