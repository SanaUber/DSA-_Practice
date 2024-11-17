function isUniqueChar(str) {
    // Step 1: Initialize a variable called 'checker' that will help track which characters we have seen
    let checker = 0; // This is a bit vector initialized to 0. We will use this to store whether a character has been seen.

    // Step 2: Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Step 3: Get the character at position 'i' and calculate its position relative to 'a'
        // This converts the character into an index from 0 to 25 (for 'a' to 'z')
        let val = str.charCodeAt(i) - 'a'.charCodeAt(0); 
        
        // Example: If the character is 'c', str.charCodeAt(i) will give the ASCII value of 'c', which is 99.
        // 'a'.charCodeAt(0) gives the ASCII value of 'a', which is 97.
        // So, 99 - 97 = 2, which is the index for 'c'.

        // Step 4: Use bitwise AND to check if the bit at position 'val' has already been set in 'checker'
        // 1 << val creates a bit mask with a 1 at the position 'val'. 
        // We use the & (AND) operator to see if that bit is already set.
        if ((checker & (1 << val)) > 0) {
            // If this condition is true, it means we've seen this character before.
            return 'not unique'; // So, we return false because the string doesn't have all unique characters.
        }

        // Step 5: If the bit was not set, use bitwise OR to set the bit for this character in 'checker'
        // checker |= (1 << val) sets the bit at position 'val' to 1, indicating we've seen this character.
        checker |= (1 << val);// bitwise OR (|=) to update the checker variable
    }
    //1 << val (Left Shift Operation):
//     For example:
// If val = 0, 1 << 0 shifts 1 by 0 positions, which is 00000001 (binary).
// If val = 2, 1 << 2 shifts 1 by 2 positions, which becomes 00000100 (binary).

    // Step 6: If we finished the loop without finding any duplicate characters, return true
    return 'unique'; // This means all characters in the string are unique.
}
let result = isUniqueChar("Helol");
console.log(result);