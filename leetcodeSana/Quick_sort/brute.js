function partition(arr,low,high)
{
    let j=low,i=low
    let pivot=arr[high]
    while (i<=high)
    {
        if(arr[i]<=pivot)
           { let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            
            j++

}     i++

  console.log('i:',i,'j:',j ,arr)
}
return arr.indexOf(pivot)
}


   function quickSort(arr,l,h)
   {let low=l
    let high=h
    if(low<high)
    {
let p=partition(arr,low,high)

 
quickSort(arr,low,p-1) 
quickSort(arr,p+1,high) 
    }
return arr
  
}
const arr=[9,-3,5,2,6,8,-6,1,3]
const low=0
    const high=arr.length-1
console.log(quickSort(arr,low,high))