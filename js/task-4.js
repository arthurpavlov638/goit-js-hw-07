const form = document.querySelector(".login-form");
const btn = document.querySelector(".button[type='submit']");
const btnStyle = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Log object to console
  console.log(formData);

  // Reset form
  form.reset();
});

form.style.display = "block";
form.style.margin = "0 auto";
form.style.padding = "24px";
form.style.border = "none";
form.style.borderRadius = "8px";
form.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
form.style.width = "100%";
form.style.maxWidth = "300px";
form.style.fontFamily = "Montserrat";
form.style.fontWeight = "400";

btnStyle.style.display = "block";
btnStyle.style.marginTop = "16px";
btnStyle.style.height = "40px"; // Corrected from 'heigth'
btnStyle.style.width = "86px";
btnStyle.style.border = "none";
btnStyle.style.fontSize = "16px";
btnStyle.style.cursor = "pointer";
btnStyle.style.fontWeight = "500";
btnStyle.style.lineHeight = "24px";
btnStyle.style.letterSpacing = "4%";
btnStyle.style.backgroundColor = "#4E75FF";
btnStyle.style.color = "white";
btnStyle.style.padding = "8px 16px";
btnStyle.style.borderRadius = "8px";

