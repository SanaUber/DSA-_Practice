/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            maxCount = Math.max(maxCount, count); // Update maxCount if count is greater
        } else {
            count = 0; // Reset count if a 0 is encountered
        }
    }

    return maxCount; // Return the maximum consecutive 1s found
};

const value = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log('Maximum number of consecutive 1s:', value);
