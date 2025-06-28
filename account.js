const userDigit = document.getElementById("userDigit");

const userNumber = document.getElementById("userNumber");

const amountNumber = document.getElementById("amountNumber");

const submit = document.getElementById("submit");

const defense = document.getElementById("defense");

const text = document.getElementById("text");

let num = 5000;
userDigit.innerHTML = `$${num}.00`

submit.addEventListener("click", function (event) {
   event.preventDefault();
let digit = Number(amountNumber.value);
if(digit < num) {
  userDigit.textContent = `$${num -= digit}`;
  alert("transaction successful");
  saveNumber();
}
 if(digit > num) {
  alert("insufficient funds"); 
  saveNumber();
}
    amountNumber.value = "";
    userNumber.value = "";
    submit.style.display = "none";
    defense.style.display = "block"
    text.textContent = "Send Funds";
    saveNumber();
})

defense.addEventListener("click", function () {
    event.preventDefault();
if(userNumber.value === "" && amountNumber.value === "") {
      userNumber.style.border = "1px solid red"  
      amountNumber.style.border = "1px solid red"
      saveNumber();
     };
    if(userNumber.value < 1000000000) {
     alert("invalid account number")  
     }else if(amountNumber.value < 50) {
   alert("amount to be sent must be above #50 naira")
     }else {
         console.log("welcome");
         userNumber.style.border = "none"  
      amountNumber.style.border = "none"
      saveNumber();
     }
  
  defense.style.display = "none";
  submit.style.display = "block";
  text.innerHTML= "Confirm Payment";
  saveNumber();
})


function saveNumber() {
    localStorage.setItem("value", userDigit.innerHTML);
}
function showNum() {
   userDigit.innerHTML = localStorage.getItem("value")
}
showNum();



