var duplicateZeros = function(arr) {
    let possibleduplicates = 0;
    let length = arr.length - 1;let j=arr.length-1;let temp=[]

    
 for(let i=0;i<length;i++)
 {if(arr[i]==0)
  {  if(i==length-possibleduplicates)
    {
arr[length]==0
length--;
break;

    }
    else
    possibleduplicates++
}

 }

 console.log(possibleduplicates)
 for (let i = length - possibleduplicates; i >= 0; i--) {
    console.log('i',i,arr)
    if (arr[i] === 0) {
        // Duplicate zero
        arr[i + possibleduplicates] = 0;
        console.log(' arr[i + possibleduplicates]', arr[i + possibleduplicates])
        possibleduplicates--;
        arr[i + possibleduplicates] = 0;
        console.log(' arr[i + possibleduplicates] 2', arr[i + possibleduplicates])

    } else {
        // Just move the element
        arr[i + possibleduplicates] = arr[i];
    }
    console.log(arr)
}
};
// Example test
let arr = [0,1,2,0,4,3,0];

console.log(duplicateZeros(arr));  // Output should be [1, 0, 0, 2, 3, 0, 0, 4]
