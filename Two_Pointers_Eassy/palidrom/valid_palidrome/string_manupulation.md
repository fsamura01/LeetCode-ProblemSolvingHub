<!--To remove non-alphanumeric characters from a string, you can use the regular expression [^a-zA-Z0-9] in most programming languages, which essentially means "match any character that is not a letter (a-z, A-Z) or a digit (0-9)" and replace it with an empty string using the appropriate string manipulation function (like replace or replaceAll) depending on your language.-->

# **Example (in JavaScript):**

```javascript
const str = "Hello, World! 123";

const cleanStr = str.replace(/[^a-zA-Z0-9]/g, ""); // "HelloWorld123"


Explanation: [1, 2, 3]

• [^a-zA-Z0-9]: This is the regular expression that matches
  any character that is not a letter (a-z, A-Z) or a number (0-9).
• g: The "global" flag ensures that all occurrences of non-alphanumeric characters are replaced.

Key points to remember:
• Regular Expressions: Most programming languages have built-in
  functions to work with regular expressions, allowing you to use
  this pattern to manipulate strings efficiently. [1, 2, 4]
• Replace with empty string: To remove the matched characters,
  you replace them with an empty string (""). [1, 2, 5]



```
