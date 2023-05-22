// 1. Виведення в консоль кількості категорій
const categoriesItem = categories.children;

console.log(`Number of categories: ${categoriesItem.length}`);

// 2. Виведення назв категорій та кількості елементів

const generalListRef = document.querySelector("#categories");

const categoryRef = generalListRef.querySelectorAll(`li.item`);

categoryRef.forEach((listItem, i) => {
  const itemTitleRef = listItem.querySelector(`h2`);
  console.log(`Category: ${itemTitleRef.textContent}`);

  const categoryListItemRef = listItem.querySelectorAll(`li`);
  console.log(`Elements: ${categoryListItemRef.length}`);
});
