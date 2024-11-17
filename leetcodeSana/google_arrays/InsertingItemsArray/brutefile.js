var duplicateZeros = function(arr) {
    let possibleduplicates = 0;
    let length = arr.length - 1;let j=arr.length-1;let temp=[]

    
 for(let i=0;i<length;i++)
 {if(arr[i]==0)
  {  if(i==length-possibleduplicates)
    {
 
break;

    }
    else
    possibleduplicates++
}

 }

 console.log(possibleduplicates)
 for (let i = length - possibleduplicates; i >= 0; i--) {
    if(arr[i]==0)
    {
arr[i+possibleduplicates]=0
possibleduplicates--
arr[i+possibleduplicates]=0
    }
    else
    arr[i+possibleduplicates]=arr[i]
}
return arr
};
console.log(duplicateZeros([0,1,2,0,4,3,0]))