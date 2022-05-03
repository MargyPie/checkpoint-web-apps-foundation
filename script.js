const btn = document.querySelector("button");

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
}

btn.addEventListener("click", passwordVisibility);
