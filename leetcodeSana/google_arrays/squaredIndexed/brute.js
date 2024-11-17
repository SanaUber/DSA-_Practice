//The numbers at even indexes (0, 2, 4, 6) have been squared,console
function squaredIndex(arr){
    for(let i=0;i<arr.length;i++)
    {
        if(i%2==0)
        {
            arr[i]=arr[i]*arr[i]
        }
    }
return arr}
console.log(squaredIndex([9, -2, -9, 11, 56, -12, -3]))