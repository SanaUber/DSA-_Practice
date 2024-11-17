
// Write a method to replace all spaces in a string with %20 you may assume that the string has suffix spaces at the end to hold the additional characters, and that you are given the true length of the string note if implementing in Java please use a character array so that you can perform this operation in place example 
// input:” Mr John Smith       “, 13  
// output: “Mr%20John%20Smith”

function Urilify(string,trueLength){
    let arr = string.split(''); // Convert string to array for in-place manipulation
    let spaceCount = 0;

    // Count the spaces within the true length
    for (let i = 0; i < trueLength; i++) {
        if (arr[i] === ' ') {
            spaceCount++;
        }
    }
     let newLength=trueLength+spaceCount*2
     for(let i=trueLength-1;i>=0;i--)
     {
        if(arr[i]==' ')
        {
            arr[newLength-1]='0'
            arr[newLength-2]='2'
            arr[newLength-3]='%'
            newLength -= 3;
        } else {
            arr[newLength - 1] = arr[i];
            newLength--;
        }
     }
     return arr.join('');
    }
    console.log (Urilify("Mr John Smith       ",13))
    //Why Wrong Approach
     
    // Spaces are 1 character, but %20 is 3 characters. You need to manage the space in the string to fit all the characters.
    // You should work backward from the end of the string to avoid messing up parts of the string you haven’t processed yet.
    // The original code replaces spaces incorrectly and cuts off the string too soon. The correct approach carefully moves characters around and replaces spaces only where needed.