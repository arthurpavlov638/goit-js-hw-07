const categ = document.querySelector("#categories");
const items = document.querySelectorAll("#categories .item");
const h2Count = document.querySelectorAll("#categories h2").length;
const liElements = document.querySelectorAll("#categories .item li");
const titleStyle = document.querySelectorAll("#categories .item");
const ulStyles = document.querySelectorAll("#categories .item ul");

console.log(`Number of categories: ${h2Count}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const liCount = item.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${liCount}`);

  item.style.listStyleType = "none";
});

liElements.forEach((li) => {
  li.style.border = "1px solid #808080";
  li.style.marginBottom = "8px";
  li.style.borderRadius = "4px";
  li.style.listStyleType = "none";
  li.style.paddingLeft = "16px";
});

ulStyles.forEach((ul) => {
  ul.style.paddingLeft = "0";
});

categ.style.maxWidth = "360px";