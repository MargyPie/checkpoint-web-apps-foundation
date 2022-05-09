const btn = document.querySelector("button");
const inputBox = document.querySelector("input");
const userPw = document.querySelector("#user-pw");
const confirmationPw = document.querySelector("#confirmation-pw");

const checkEquality = document.querySelector("#check-equality");

const span = document.querySelector("span");

/***************** Button: Toggle Password Visibility **************/
function passwordVisibility() {
  if (btn.classList.contains("hiddenPw")) {
    btn.classList.toggle("hiddenPw");
    inputBox.setAttribute("type", "text");
    btn.textContent = "Hide Password";
  } else {
    btn.classList.toggle("hiddenPw");
    inputBox.setAttribute("type", "password");
    btn.textContent = "Show Password";
  }
}

function checkRequirements() {
  /***************** Check: Equality ****************/
  if (confirmationPw.value !== userPw.value) {
    console.log("Passwords do not match!");
  } else {
    console.log("pw match");
    checkEquality.textContent = "✅";
  }
  /***************** Check: Lower-Case ****************/
  /***************** Check: Upper-Case ****************/
  /***************** Check: Number ****************/
  /***************** Check: Length ****************/
  // if (inputBox.length > 3) {
  //   span.textContent = " ✅";
  // }
}

btn.addEventListener("click", passwordVisibility);
confirmationPw.addEventListener("input", checkRequirements);
