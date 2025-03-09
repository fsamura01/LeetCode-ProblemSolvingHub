# **1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence**

## **Step 1: Problem Understanding**

The problem **"Check If a Word Occurs As a Prefix of Any Word in a Sentence"** is asking us to determine if a given `searchWord` appears as a **prefix** in any word within a given `sentence`. If it does, return the **1-based index** of the first occurrence; otherwise, return `-1`.

### **Clarifications & Constraints**

- A **sentence** consists of lowercase English words separated by **a single space**.
- A **prefix** means the starting portion of a word. For example, `"leetc"` is a prefix of `"leetcode"`.
- The given constraints:
  - `1 <= sentence.length <= 100`
  - `1 <= searchWord.length <= 10`
  - The sentence contains **only lowercase English letters and spaces**.

#### **Edge Cases to Consider**

1. **Prefix at the beginning**: `sentence = "apple banana cat", searchWord = "ap"` → should return `1`.
2. **Prefix in the middle**: `sentence = "dog apple banana", searchWord = "ban"` → should return `3`.
3. **Prefix at the end**: `sentence = "this is a test", searchWord = "te"` → should return `4`.
4. **No match found**: `sentence = "hello world", searchWord = "bye"` → should return `-1`.
5. **Single-word sentence**: `sentence = "prefix"`, `searchWord = "pre"` → should return `1`.

---

### **Step 2: Pattern Identification**

This problem is best solved using **String Manipulation & Iteration**:

- We can split the sentence into words using `.split(" ")`.
- Iterate over each word, checking if `searchWord` is a prefix using `.startsWith(searchWord)`.
- Return the **1-based index** of the first matching word.

This follows a **Linear Search pattern**, which is often used when searching for elements in an unsorted collection.

---

### **Step 3: Approach Discussion**

1. **Split** the sentence into an array of words.
2. **Loop** through each word:
   - Check if the `searchWord` is a **prefix** using `.startsWith(searchWord)`.
   - If a match is found, return the **1-based index** (i.e., `i + 1`).
3. **If no match is found, return `-1`**.

---

### **Step 4: Code Implementation (JavaScript)**

```javascript
var isPrefixOfWord = function (sentence, searchWord) {
  let words = sentence.split(" "); // Step 1: Split sentence into words

  for (let i = 0; i < words.length; i++) {
    // Step 2: Iterate through words
    if (words[i].startsWith(searchWord)) {
      // Step 3: Check for prefix match
      return i + 1; // Return 1-based index
    }
  }

  return -1; // Step 4: Return -1 if no match found
};
```

---

### **Step 5: Complexity Analysis**

- **Splitting the string** into words: \( O(N) \) (where \( N \) is the sentence length)
- **Iterating through words**: \( O(W) \) (where \( W \) is the number of words in the sentence)
- **Checking `.startsWith()`**: \( O(M) \) (where \( M \) is the length of `searchWord`)

Overall, the time complexity is **O(N) ≈ O(W × M)** in the worst case, which is efficient given the constraints.

The space complexity is **O(W)** because we store the words in an array.

---

### **Step 6: Alternative Solutions**

#### **Using Regular Expressions**

```javascript
var isPrefixOfWord = function (sentence, searchWord) {
  let match = sentence.match(new RegExp(`\\b${searchWord}\\w*`, "g"));
  return match ? sentence.split(" ").indexOf(match[0]) + 1 : -1;
};
```

💡 **Pros**: Compact, direct use of regex.  
⚠️ **Cons**: More complex to debug, regex can be overkill for simple string matching.

---

### **Step 7: Practice Recommendations**

To reinforce this concept, try solving these problems:

1. **LeetCode 28** - [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) (String matching)
2. **LeetCode 648** - [Replace Words](https://leetcode.com/problems/replace-words/) (Prefix matching with a dictionary)
3. **LeetCode 14** - [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) (Prefix operations)

---

### **Step 8: Flowchart Design**

Now, let’s create a **flowchart** to illustrate the logical flow of our approach.

Here is a flowchart illustrating the logical progression of our solution. It visually represents the key steps, including splitting the sentence, iterating through words, checking for a prefix match, and returning the appropriate index or `-1` if no match is found.

Would you like further clarification or modifications? 🚀
