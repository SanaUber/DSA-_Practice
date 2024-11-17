// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left=0,right=nums.length-1,index=nums.length-1 
    const arr=new Array(nums.length)
    while(left<=right)
    {
        const leftsq=nums[left]*nums[left]
        const rightsq=nums[right]*nums[right]
        if(leftsq>rightsq)
        {
            arr[index--]=leftsq
            left++
            console.log('left',arr,"sq",leftsq,rightsq)
        }
        else {
            arr[index--] = rightsq;

            right--;
          console.log('right',arr,"sq",leftsq,rightsq)
        }
        console.log(arr)
       
    } 
   
    return arr


    
};
var value=sortedSquares([-4,-1,0,3,10])
console.log('squard array',value)