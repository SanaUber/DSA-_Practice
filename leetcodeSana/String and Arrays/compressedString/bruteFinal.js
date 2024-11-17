// String Compression: implement a method to perform basic string compression 
// using counts of repeated characters for example the string is abbcccccaaa 
// becomes a1b2c5a3 If the compressed string would not become smaller than the 
// original string your method should
//  return original string you can assume the string has only uppercase lowercase letters a-z


function compressString(str) {
    let compressed = [];
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed.push(str[i - 1] + count);
            count = 1;
        }
    }
    console.log('compressedini',compressed)

    // Convert the array back to a string
    let compressedString = compressed.join('');
    console.log('compressed',compressedString.length, str.length)
    // Return the original string if the compressed string is not smaller
    return compressedString.length < str.length ? compressedString : str;
}

// Example usage:
console.log(compressString("abbcccccaaa"));  // Output: a1b2c5a3
console.log(compressString("abc"));          // Output: abc
//This solution has a time complexity of O(n), where n is the length of the string, making it quite efficient.
//The dominant factor here is the compressed array,
//  which stores up to O(2n) characters in the worst case, making the space complexity O(n).
// Thus, the space complexity of the function is O(n)
