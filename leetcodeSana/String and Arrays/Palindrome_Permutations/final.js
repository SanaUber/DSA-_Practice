function canPermutePalindrome(string){
    string = string.toLowerCase().replace(/\s+/g, '');//to remove spave and normalize
    let set =new Set();
    for(let char of string)
    {
        if(set.has(char))
        {
            set.delete(char)
        }
        else
        {set.add(char)}
    }
    return set.size<=1
}
console.log(canPermutePalindrome("Tact Coa"))

// Explanation:
// Normalize the input: Convert the string to lowercase and remove spaces.
// Use a set to track character frequency: Each time we encounter a character,
// we either add or remove it from the set. By the end, the set will only contain
// characters with odd frequencies.
// Check palindrome condition: If the set has 0 or 1 characters with odd frequencies, then the string can be a permutation of a palindrome.