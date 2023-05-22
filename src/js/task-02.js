const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector(`#ingredients`);

const ingredientsArray = ingredients.map((ingredient) => {
  const listItem = document.createElement(`li`);
  listItem.class = "item";
  listItem.textContent = ingredient;
  return listItem;
});

ingredientsList.append(...ingredientsArray);
