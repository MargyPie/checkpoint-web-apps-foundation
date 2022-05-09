const btn = document.querySelector("button");
const inputBox = document.querySelector("input");
const userPw = document.querySelector("#user-pw");
const confirmationPw = document.querySelector("#confirmation-pw");

const checkEquality = document.querySelector("#check-equality");
const checkLower = document.querySelector("#check-lower");
const checkUpper = document.querySelector("#check-upper");
const checkNum = document.querySelector("#check-num");
const checkLength = document.querySelector("#check-length");

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
  const requirementLowerCase = new RegExp("^(?=.*[a-z])");
  const requirementUpperCase = new RegExp("^(?=.*[A-Z])");
  const requirementNumber = new RegExp("^(?=.*[0-9])");
  const requirementLength = new RegExp("^(?=.{10,})");

  /***************** Check: Equality ****************/
  if (confirmationPw.value !== userPw.value) {
    console.log("Passwords do not match!");
    checkEquality.textContent = "❌";
    checkLower.textContent = "❌";
  } else {
    console.log("pw match");
    checkEquality.textContent = "✅";

    /***************** Check: Lower-Case ****************/
    if (!requirementLowerCase.test(userPw)) {
      checkLower.textContent = "❌";
    } else {
      checkLower.textContent = "✅";
    }
    /***************** Check: Upper-Case ****************/
    /***************** Check: Number ****************/
    /***************** Check: Length ****************/
    // if (inputBox.length > 3) {
    //   span.textContent = " ✅";
    // }
  }
}

btn.addEventListener("click", passwordVisibility);
confirmationPw.addEventListener("input", checkRequirements);
