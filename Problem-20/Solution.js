function checkIfItemExists(items, targetItem) {
  const exists = items.includes(targetItem);
  return exists;
}

const availableColors = ["red", "green", "blue", "yellow", "purple"];
const shoppingList = ["milk", "bread", "eggs", "butter"];

console.log("Available Colors:", availableColors);
console.log("Is 'blue' in availableColors?", checkIfItemExists(availableColors, "blue"));
console.log("Is 'orange' in availableColors?", checkIfItemExists(availableColors, "orange"));

console.log("\nShopping List:", shoppingList);
console.log("Is 'eggs' in shoppingList?", checkIfItemExists(shoppingList, "eggs"));
console.log("Is 'cheese' in shoppingList?", checkIfItemExists(shoppingList, "cheese"));
