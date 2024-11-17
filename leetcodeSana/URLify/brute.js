
// Write a method to replace all spaces in a string with %20 you may assume that the string has suffix spaces at the end to hold the additional characters, and that you are given the true length of the string note if implementing in Java please use a character array so that you can perform this operation in place example 
// input:” Mr John Smith       “, 13  
// output: “Mr%20John%20Smith”

function Urilify(string,truelength){
const len=string.length
let arra=string.split('')
console.log(string,truelength,len,arra)
if(truelength<len)
{
    for(let i=0;i<len-1;i++)
    { //console.log(arra[i])
        if(arra[i]==' ')
    { if(i<truelength-1)
        arra[i]='%20'
       
    }

    }
    const answer = arra.slice(0, truelength).join('');
//     String.slice(start?: number, end?: number): string
// The index to the beginning of the specified portion of stringObj.


// Returns a section of a string.
    console.log(answer,answer.length)
    // Return the result
    return answer; 
  
}
 
}
console.log (Urilify("Mr John Smith       ",13))
//Why Wrong Approach
 
// Spaces are 1 character, but %20 is 3 characters. You need to manage the space in the string to fit all the characters.
// You should work backward from the end of the string to avoid messing up parts of the string you haven’t processed yet.
// The original code replaces spaces incorrectly and cuts off the string too soon. The correct approach carefully moves characters around and replaces spaces only where needed.