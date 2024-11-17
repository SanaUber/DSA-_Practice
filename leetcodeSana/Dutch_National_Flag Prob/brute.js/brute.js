function dnfp(arr)
{let i=0,j=0,k=arr.length-1
 
 while(i<=k)
 {
    if(arr[i]==0)
   {     swap(arr,i,j)
    i++
    j++
 }

 else if(arr[i]==2)
    {     swap(arr,i,k)
    k--
  }
 
  else if(arr[i]==1)
    {      
    i++
  }
 

  console.log('i:',i,'j:',j,'k:',k,arr)


}

return arr
}

function swap(arr,k,j)
{
let temp=arr[k]
arr[k]=arr[j]
arr[j]=temp
}

console.log('dnfp', dnfp([0,0,1,2,0,1,2]))