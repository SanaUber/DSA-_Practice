function minmax(arr)
{
    let minid=0,maxid=arr.length-1
    let temp
    for(let i=0;i<arr.length-1;i++)
    {
        if(i%2==0)
          {  temp=arr[i]
            arr[i]=arr[maxid]
        maxid--
  } 
else
{  arr[i]=temp
    minid++
} 
console.log(arr)
}
return arr
}





console.log(minmax([2,3,5,6,8,9]))


