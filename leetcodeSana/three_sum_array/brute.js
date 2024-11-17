/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  
console.log(nums);let Answer=[]
for(let i=0;i<nums.length-2;i++)
{
  const fixedNum=nums[i]
  let l=i+1;r=nums.length-1;
 
  if(i>0 && nums[i]==nums[i-1]) continue;
  while(l<r)
 { const answer=fixedNum+nums[l]+nums[r]
  if(answer==0 )
  {
       Answer.push([fixedNum,nums[l],nums[r]])
        while (l < r && nums[l] === nums[l + 1]) {
                    l++;
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--;
                }
       l++;
       r--;
  }
  else if(answer<0)
  {
      l++
  }
    else if(answer>0)
  {
      r--
  }}

}
 return Answer;
};


const result = threeSum([ -2, 0, 0, 2, 2]);
console.log(result);