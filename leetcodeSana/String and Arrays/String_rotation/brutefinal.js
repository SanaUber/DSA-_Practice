function isRotation(S1, S2) {
    // Step 1: Check if lengths of S1 and S2 are equal
    if (S1.length !== S2.length) {
        return false;
    }
    
    // Step 2: Concatenate S1 with itself
    let S1S1 = S1 + S1;
    
    // Step 3: Check if S2 is a substring of S1S1 using the isSubstring method
    return isSubstring(S1S1, S2);
}

// Assuming this is a given method to check if one string is a substring of another
function isSubstring(str, sub) {
    return str.includes(sub); // You can replace this with any other implementation
}

// Example Usage
let S1 = "waterbottle";
let S2 = "erbottlewat";

console.log(isRotation(S1, S2));  // Output: true
