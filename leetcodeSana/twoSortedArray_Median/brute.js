/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newArray=[...nums1,...nums2]
    console.log('newArray',newArray)
    newArray.sort((a,b)=>a-b)
    
      const left =1;const right=newArray.length
        const mid=Math.floor((right)/2)

          console.log('newArray',newArray,right,mid)
    
      let median=0
      if(right>1)
      {if(right%2==0 )
   {   median=(newArray[mid-1]+newArray[mid])/2
console.log('even',median,newArray[mid],newArray[mid+1])
}
 else  if(mid==1 && right==2 )
   {   median=(newArray[mid-1]+newArray[mid])/2
console.log('one',median,newArray[mid],newArray[mid+1])
}
  else if (right%2!=0 )
  {median=newArray[mid]
  console.log('odd',median)
 } }
 
 else
 median=newArray[right-1]
   return median
};



const result= findMedianSortedArrays([],[2,3])
console.log(result)


  // newArray is created by merging nums1 and nums2. This operation takes O(m + n)
  //Sorting an array of length m + n takes O((m + n) * log(m + n))
  //TIME COMPLEXITY O((m+n)log (m+n))
  //new array (newArray) of size m + n. This takes O(m + n)
  //SPACE COMPLEXITY O(m+n)
  