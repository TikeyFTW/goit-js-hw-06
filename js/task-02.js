const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient) {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");

  ulElement.appendChild(liElement);
});
