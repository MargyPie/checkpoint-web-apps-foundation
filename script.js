const btn = document.querySelector("button");

/***************** Button: Toggle Password Visibility **************/
function passwordVisibility() {
  const inputBox = document.querySelector("input");

  if (btn.classList.contains("hiddenPw")) {
    btn.classList.toggle("hiddenPw");
    inputBox.setAttribute("type", "text");
    btn.textContent = "Hide Password";
  } else {
    btn.classList.toggle("hiddenPw");
    inputBox.setAttribute("type", "password");
    btn.textContent = "Show Password";
  }

  /***************** Check: Equality ****************/
  /***************** Check: Lower-Case ****************/
  /***************** Check: Upper-Case ****************/
  /***************** Check: Number ****************/
  /***************** Check: Length ****************/
}

btn.addEventListener("click", passwordVisibility);
