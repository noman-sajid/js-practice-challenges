How would you convert an array of words into a single string with a custom separator?

"How would you turn an array of strings into a single space-separated sentence?"

🔸 2. Custom Separators
"How do you control how elements are joined when using .join()?"

.join(" ") → Adds spaces

.join("-") → Hyphenates

.join("") → No separator (concatenation)

🔸 3. Data Formatting Scenario
"You're given an array of strings from a form. How would you format them as a readable sentence or identifier?"

Examples:

For display: use .join(" ")

For URL slug: use .join("-")

For variable naming: use .join("") or .join("_")


🔸 4. Follow-up Questions
Question	Sample Answer
"What is the return type of .join()?"	A single string
"Does .join() modify the original array?"	No, it returns a new string
"Can .join() be used on non-string arrays?"	Yes, it converts elements to strings first
"What happens if the array is empty?"	Returns an empty string


📊 Time & Space Complexity:
Time: O(n) — Each element is visited once

Space: O(n) — A new string is created from the array

