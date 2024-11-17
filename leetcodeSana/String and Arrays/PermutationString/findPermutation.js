function arePermutationsOptimized(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCount = new Array(256).fill(0); // Assuming ASCII character set
//   256 elements: Accounts for the full range of extended ASCII characters (0-255).
// 128 elements: Could be used if you're only dealing with standard ASCII characters (0-127).
    // Count each character in str1
    for (let i = 0; i < str1.length; i++) {
      charCount[str1.charCodeAt(i)]++;
    }
    console.log('charCount[str1.charCodeAt(i)]',charCount)
//     As this loop runs, it updates the charCount array:

// For the first character 'l' (str1[0]), the ASCII value is 108, so charCount[108]++ will make charCount[108] = 1.
// For the second character 'i' (str1[1]), the ASCII value is 105, so charCount[105] = 1.
// For the third character 's' (str1[2]), the ASCII value is 115, so charCount[115] = 1.
// This continues for 't', 'e', and 'n', updating their corresponding ASCII values.

  
    // Subtract each character count from str2
    for (let i = 0; i < str2.length; i++) {
      charCount[str2.charCodeAt(i)]--;
      // If count goes negative, str2 has an extra character
      if (charCount[str2.charCodeAt(i)] < 0) {
        return false;
      }
    }
    console.log('charCount[str1.charCodeAt(i)]',charCount)
    // For the first character 's' (str2[0]), the ASCII value is 115. We decrease charCount[115] by 1 (it was 1 from the first string, so now it becomes 0).
    // For the second character 'i' (str2[1]), the ASCII value is 105. We decrease charCount[105] by 1 (it was 1, now it’s 0).
    // For the third character 'l' (str2[2]), the ASCII value is 108. We decrease charCount[108] by 1 (it was 1, now it’s 0).
    // Similarly, we subtract the count for 'e', 'n', and 't', making all their counts 0.
    
    return true;
  }
  
  // Example usage
  console.log(arePermutationsOptimized("listen", "silent")); // Output: true
//   Thus, the overall time complexity is O(n), where n is the length of the strings (since str1.length === str2.length, both loops run n times).
//   Thus, the overall space complexity is O(1) because the additional memory usage (the charCount array) does not grow with the size of the input strings.