const btn = document.querySelector("button");
const inputBox = document.querySelector("#user-pw");
const userPw = document.querySelector("#user-pw");
const confirmationPw = document.querySelector("#confirmation-pw");

const checkEquality = document.querySelector("#check-equality");
const checkLower = document.querySelector("#check-lower");
const checkUpper = document.querySelector("#check-upper");
const checkNum = document.querySelector("#check-num");
const checkLength = document.querySelector("#check-length");

/***************** Button: Toggle Password Visibility **************/
function passwordVisibility() {
  if (btn.classList.contains("hiddenPw")) {
    btn.classList.toggle("hiddenPw");
    userPw.setAttribute("type", "text");
    confirmationPw.setAttribute("type", "text");
    btn.textContent = "Hide Password";
  } else {
    btn.classList.toggle("hiddenPw");
    userPw.setAttribute("type", "password");
    confirmationPw.setAttribute("type", "password");
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
    checkUpper.textContent = "❌";
    checkNum.textContent = "❌";
    checkLength.textContent = "❌";
  } else {
    console.log("pw match");
    checkEquality.textContent = "✅";

    /***************** Check: Lower-Case ****************/
    if (!requirementLowerCase.test(userPw.value)) {
      checkLower.textContent = "❌";
    } else {
      checkLower.textContent = "✅";
    }

    /***************** Check: Upper-Case ****************/
    if (!requirementUpperCase.test(userPw.value)) {
      checkUpper.textContent = "❌";
    } else {
      checkUpper.textContent = "✅";
    }

    /***************** Check: Number ****************/
    if (!requirementNumber.test(userPw.value)) {
      checkNum.textContent = "❌";
    } else {
      checkNum.textContent = "✅";
    }

    /***************** Check: Length ****************/
    if (!requirementLength.test(userPw.value)) {
      checkLength.textContent = "❌";
    } else {
      checkLength.textContent = "✅";
    }
  }
}

btn.addEventListener("click", passwordVisibility);
confirmationPw.addEventListener("input", checkRequirements);
userPw.addEventListener("input", checkRequirements);
