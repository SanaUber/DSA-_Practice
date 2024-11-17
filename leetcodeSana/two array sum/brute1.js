/**
 * @param {[3,2,4]} nums
 * @param {6} target
 * @return {number[]}
 */
console.log('hello');
var twoSum = function(nums, target) {
    const answer = []; let complementIndex=null
    nums.find((num, index) => {
        const complement = target - num;
          complementIndex = nums.indexOf(complement);
        if (complementIndex !== -1 && complementIndex !== index) {
            answer.push(index, complementIndex);
            return true;
        }
    });
    return answer;


  };
  // Call the function with example parameters
const result = twoSum([3, 2, 4], 6);
console.log(result);
  