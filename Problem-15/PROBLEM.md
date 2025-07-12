Write a function that takes a string and returns an object representing the frequency of each character in the string (case-insensitive).



🔸 1. Basic Frequency Counter
"How would you count the number of occurrences of each character in a string?"

→ This is the direct essence of your function.

🔸 2. Ignore Case in Character Counting
"How would you handle both uppercase and lowercase letters as the same character?"

→ Normalize the string with .toLowerCase() or .toUpperCase().

🔸 3. Handle Only Letters (Optional Follow-up)
"Can you update the function to ignore spaces or punctuation?"

javascript
Copy
Edit
if (/[a-z]/.test(char)) { /* count only letters */ }
🔸 4. Return the Most Frequent Character
"Can you find the character that appears the most?"

javascript
Copy
Edit
let maxChar = '';
let maxCount = 0;
for (const char in frequencies) {
  if (frequencies[char] > maxCount) {
    maxChar = char;
    maxCount = frequencies[char];
  }
}
🔸 5. Edge Case Awareness
"What happens if the string is empty?"

→ Returns an empty object {} — valid and expected behavior.

🔸 6. Time Complexity Question
"What is the time complexity of your solution?"

Time: O(n) – each character is processed once.

Space: O(k) – where k is the number of unique characters.