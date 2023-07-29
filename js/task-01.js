const categoryItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItem.length}`);

const listHeaders = categoryItem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

