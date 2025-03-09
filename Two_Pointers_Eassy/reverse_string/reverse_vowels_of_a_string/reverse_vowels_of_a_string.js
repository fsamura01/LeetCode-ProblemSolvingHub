function reverseVowels(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const sArr = s.split(""); // Convert string to array
  let left = 0;
  let right = sArr.length - 1;

  while (left < right) {
    // Check if both characters are vowels
    if (vowels.has(sArr[left]) && vowels.has(sArr[right])) {
      // Swap the vowels
      [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
      left++;
      right--;
    } else if (!vowels.has(sArr[left])) {
      left++; // Move left pointer if not a vowel
    } else if (!vowels.has(sArr[right])) {
      right--; // Move right pointer if not a vowel
    }
  }

  return sArr.join(""); // Convert array back to string
}

reverseVowels("IceCreAm");
reverseVowels("leetcode");
