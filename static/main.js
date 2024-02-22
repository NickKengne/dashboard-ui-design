import { validate } from "./valiadation.js";

const form = document.querySelector("#form");
const errorUsername = document.querySelector(".error_username");
const errorPassword = document.querySelector(".error_password");
const errorBlock = document.querySelectorAll("#error");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  const errors = validate(username, password);

  if (Object.keys(errors).length > 0) {
    // console.log(errors);

    if (errors["username"]) {
      errorUsername.innerHTML = errors["username"];
      errorBlock[0].style.display = "block";
    }
    if (errors["password"]) {
      errorPassword.innerHTML = errors["password"];
      errorBlock[1].style.display = "block";
    }

    setTimeout(() => {
      errorBlock.forEach((element) => (element.style.display = "none"));
    }, 5000);
  } else {
    location.href = "../index.html";
  }
});

const clearFields = () => {
  form.username.value = "";
  form.password.value = "";
};

