const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')
console.log(`ingredientsRef:`, ingredientsRef);

const ingredientsItem = ingredients.map((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList = "item"
  ingredientsRef.append(listItem);

});