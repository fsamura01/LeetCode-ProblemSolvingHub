var reverseStr = function (s, k) {
  let arr = s.split(""); // Convert string to array for easy manipulation
  let n = arr.length;

  for (let i = 0; i < n; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1); // Ensure we don't go out of bounds

    // Reverse the first k characters in this chunk
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap characters
      left++;
      right--;
    }
  }

  return arr.join(""); // Convert array back to string
};
reverseStr("abcdefg", 2);

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseStr(s, k) {
  // Convert string to array since strings are immutable in JavaScript
  const arr = s.split("");

  // Process string in chunks of size 2k
  for (let start = 0; start < s.length; start += 2 * k) {
    // Calculate end index for reversal
    // Math.min ensures we don't go beyond string length
    let left = start;
    let right = Math.min(start + k - 1, s.length - 1);

    // Reverse the first k characters
    while (left < right) {
      // Swap characters
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  // Convert array back to string
  return arr.join("");
}
