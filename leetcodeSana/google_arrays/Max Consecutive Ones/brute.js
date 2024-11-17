/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
var findMaxConsecutiveOnes = function(nums) {  let count=0,array=[]
       
            
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]==1)
                count=count+1
            else
                count=0
            array.push(count)
        }
    console.log( array)
                    count=Math.max(...array) //Using Math.max() with the Spread Operator                    
                                         return count

};
const value=findMaxConsecutiveOnes([1,1,0,1,1,1])
console.log(' maximum number of consecutive:' ,value)