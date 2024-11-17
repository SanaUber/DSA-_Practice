// Palindrome permutation: given a string write a function to check if it is permutation of a palindrome a palindrome is a word or a phrase that is the same forward and backward a permutation is a rearrangement of letters the palindrome does not need to be limited to just dictionary words
// Example
// Input: Tact Coa
// Output: true (permutations: “Taco cat”, “Atco cta”,etc)


// Quick rule a string can be permutation of a palindrome if at most 1 
//character has an odd frequency this is because in a palindrome characters 
//must be mirrored around the center so most characters should appear in even number of times
function CheckPalindrome(string)
{
let arra=string.split('')
let index = arra.indexOf(' ');

// Remove the empty array if found
if (index !== -1) {
  arra.splice(index, 1);

}
string=arra.join('')//assumption
let data=[]
string=string.toLowerCase()//assumption
const strlen=string.length;let count=0
const charCount = new Array(256).fill(0); // Assuming ASCII character set
//   256 elements: Accounts for the full range of extended ASCII characters (0-255).
// 128 elements: Could be used if you're only dealing with standard ASCII characters (0-127).
    // Count each character in str1
    for (let i = 0; i < arra.length; i++) {
      charCount[string.charCodeAt(i)]++;
    }
    for(let i=0;i<256;i++)
    {if(charCount[i]!=0)
    {
data.push(charCount[i])
count=count+charCount[i]
console.log(data);
    }}
   const final=Math.ceil(count/2)
 console.log(final,data.length);
    if(data.length==final)
{
    return true}

    return false
}

console.log(CheckPalindrome("Tact Coa"))
