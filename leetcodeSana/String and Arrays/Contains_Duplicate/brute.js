/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
   console.log(nums)
    
   for(let i=0;i<nums.length;i++)
   {
   if(  nums[i]==nums[i+1])
   return true
      if(  nums[i]<nums[i+1])
       { 
         continue;}
      if(nums.length==1 || i==nums.length-1)
       answer=  false
      
      
   }return answer
 };
   const result = containsDuplicate([1, 2, 3, 4]);
console.log(result);

//TIME COMPLEXITY O(n log n)
//SPACE COMPLEXITY O(1)

//i ==to next print true
//else continue
//length =1  false or if you reached ghe last elenment false