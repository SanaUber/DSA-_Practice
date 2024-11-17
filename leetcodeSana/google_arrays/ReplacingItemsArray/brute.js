/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i=0 
   let index=arr.length-1 
         while(i<=index)
           {  if(arr[i]==0)
           {if(i+1!=arr.length)
              { arr[i+1]=0
           if((i+2)>=arr.length-1)
            return arr
            else
                i=i+2
              }
            else
                return arr
           
           }
           else
          i= i+1}
    console.log(arr)
    return arr
};
var values=duplicateZeros([1,0,2,3,0,4,5,0])//[1,0,0,2,3,0,0,4])
console.log(values)