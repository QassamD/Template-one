let spanLinks = document.querySelector(".icon");
let liLinks = document.querySelector("ul");
let spansIcon = document.querySelectorAll(".icon span");

console.log(spansIcon);

spanLinks.addEventListener("click", function () {
  liLinks.classList.toggle("block");
  spansIcon.forEach((span) => {
    span.classList.toggle("full");
  });
});
console.log(liLinks);
