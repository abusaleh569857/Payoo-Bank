// import { getInputFieldValueById } from "./commonFunction";
document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();
  const pinNumber = getInputFieldValueById("pin-num");
  if (pinNumber === 234) {
    let mainBalance = getTextFieldValueById("main-balance");
    const bankName = document.getElementById("select-bank").value;
    const amountAdd = getInputFieldValueById("amount-add");
    const accountNum = document.getElementById("account-num").value;
    console.log(
      "Main Balance : ",
      mainBalance + " " + "Bank Name : ",
      bankName + " " + "Amount Add:",
      amountAdd + " " + "Account Number:",
      accountNum
    );
    mainBalance += amountAdd;
    document.getElementById("main-balance").innerText = mainBalance;
  } else {
    alert("Your Pin Number is Wrong!");
  }
});
