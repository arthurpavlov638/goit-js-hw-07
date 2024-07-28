const input = document.querySelector("#name-input");
const h1Span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const trimValue = event.currentTarget.value.trim();
  if (trimValue === "") {
    h1Span.textContent = "Anonymous";
  } else {
    h1Span.textContent = trimValue;
  }
});

input.style.width = "360px";
input.style.height = "40px";
input.style.fontFamily = "Montserrat";
input.style.fontWeight = "400";
input.style.fontSize = "16px";
input.style.lineHeight = "24px";
input.style.letterSpacing = "0.04em";
input.style.border = "1px solid #808080";
input.style.borderRadius = "4px";
input.style.padding = "8px auto 8px 16px";

/*placeholder - отступы не задавались так как проще 
зделать это через css файл что ДЗ не предусмотрено.*/

h1Element.style.fontFamily = "Montserrat";
h1Element.style.fontWeight = "600";
h1Element.style.fontSize = "24px";
h1Element.style.lineHeight = "32px";
h1Element.style.letterSpacing = "0.04em";
h1Element.style.color = "#2E2F42";