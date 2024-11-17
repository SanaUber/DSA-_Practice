/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let pointerArr=0 ; let pointerNewArr=0;
   let index=arr.length-1;const newarr=new Array(index).fill({ values: '' });
   for(let i=0;i<=(arr.length-1);i++)
   {if(index>=0)
    {if(arr[i]==0)
 {newarr[index--]=arr[i]
  newarr[index--]=arr[i]
   console.log('arr[i]',arr[i],i,'index',index)
 }
 else
 {newarr[index--]=arr[i]
  console.log('arr[i] else',arr[i],i,'index',index)
 }
 console.log(newarr)
}else
  { console.log(newarr)
   return newarr}
   
   }
    return newarr
};
var values=duplicateZeros([1,0,2,3,0,4,5,0])// should be the output [1,0,0,2,3,0,0,4])
console.log(values)