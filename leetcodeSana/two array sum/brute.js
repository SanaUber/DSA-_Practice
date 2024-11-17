/**
 * @param {[3,2,4]} nums
 * @param {6} target
 * @return {number[]}
 */
console.log('hello');
var twoSum = function (nums, target) {const answer=[];
    for(let i=0;i<nums.length;i++)
    {for(let j=0;j<nums.length;j++)
    {
      if(target==(nums[i]+nums[j])&& i!=j)
      {
  
          console.log(i,j);
          
          answer.push([i,j])
          return answer[0];
          
      }
   
    }}
    return answer
  };
  // Call the function with example parameters
const result = twoSum([3, 2, 4], 6);
console.log(result);
  