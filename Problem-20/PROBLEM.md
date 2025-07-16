Write a function that checks whether a specific item exists in an array and returns a boolean result


🔸 1. Straightforward Prompt
"How would you check if an item is present in a JavaScript array?"

Expected Answer: Use .includes(item) — it returns true if found, otherwise false.

🔸 2. Function-Based
"Write a reusable function to check if a given value exists in an array."

→ That’s exactly what checkIfItemExists() does.

🔸 3. Case Sensitivity
"What happens if you check for 'Blue' instead of 'blue'?"

.includes() is case-sensitive. So 'Blue' would return false in ["blue", "green"].

🔸 4. Alternative Methods
"How else can you check if an array contains a value without using .includes()?"


items.indexOf(targetItem) !== -1
Or with .some():

items.some(item => item === targetItem)
🔸 5. Custom Search Condition
"How would you check if a shopping list contains an item starting with 'b'?"

shoppingList.some(item => item.startsWith("b"))
🔸 6. Edge Case
"What happens if the array is empty?"

.includes() will always return false.

[].includes("anything"); // false
