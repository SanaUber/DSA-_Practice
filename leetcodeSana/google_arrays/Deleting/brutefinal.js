/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let j = 0;  // Pointer to track the position of the next non-val element
   
   for (let i = 0; i < nums.length; i++) {
       // If the current element is not equal to val, we move it to position j
       if (nums[i] !== val) {
           nums[j] = nums[i];
           j++;  // Move j forward to track the next non-val position
       }
   }
   
   // At this point, nums[0...j-1] contains the elements that are not equal to val
   return j;  // j is the count of elements that are not equal to val

};