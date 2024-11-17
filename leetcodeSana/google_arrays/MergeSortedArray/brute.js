// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
function getmergedSortedArray(num1, m, num2, n)
{ 
    // let temparr=[],tempdata=m
    // if(m<n && m!=0 && n!=0)
    // {
    // temparr=num1
    // num1=num2
    // num2=temparr
    // tempdata=m
    // m=n
    // n=tempdata
    
    // }
    console.log(num1,num2,m,n)
let index=0 ;let data=num1.length-n-1
for(let i=0;i<num1.length;i++)
{
    if(num1[i]==0)
{
  
  if(  index<n)
   { num1[i]=num2[index]
    index++}
    else
    { num1[i]=num1[i]
       }

    let left=0;
    data=data+1
    while(left<num1.length)
    {
        if(num1[left]>num1[data])
        {
            temp=num1[data]
            num1[data]=num1[left]
            num1[left]=temp
            left++
           
        }
        else
        left++
 //       console.log(num1)
    }

    // console.log(num1)
}

}
 

 
console.log(num1)


}
let num1=[-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4
    ,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//[1,2,3,0,0,0] 
let num2=[-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,
          -5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0
          ,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6
          ,6,6,7,7,7,7,7 ,7,7,8,8,8,8,9,9,9,9]
//[2,5,6]
let m=55
let n=99
// let num1=[4,0,0,0,0,0]



// //[1,2,3,0,0,0] 
// let num2=[1,2,3,5,6]
// //[2,5,6]
// let m=1
// let n=5
 var mergedSoertedArray=getmergedSortedArray(num1,m,num2,n )
 