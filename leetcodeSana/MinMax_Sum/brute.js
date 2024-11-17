var miniMaxSum =  function (arr) {
    arr.sort((a,b)=>a - b)
 
    let  max=arr.length-1
    let maxcount=0;let mincount=0
    for(let i=0;i<4;i++)
    {
        mincount=arr[i]  +mincount
        maxcount=arr[max]  +maxcount
        max=max-1
        
         }
       console.log (mincount,maxcount)
 return mincount,maxcount
 }

 const result = miniMaxSum([1, 2, 3, 4 ,5]);
 console.log(result);