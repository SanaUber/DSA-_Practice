/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
     console.log(nums)
      const newmap=new Map();
     for(let i=0;i<nums.length;i++)
     {
         if(!newmap.has(nums[i]))
        newmap.set(nums[i],i)
    else if(i<(nums.length-1) && newmap.has(nums[i]))
    answer=true;
else if(i==(nums.length-1) && !newmap.has(nums[i]))
     answer=false
   }
   
    return answer;}
     const result = containsDuplicate([-1,0,1,2,-1,-4]);
  console.log(result);
  
  //TIME COMPLEXITY O(n)
  //SPACE COMPLEXITY O(n)
  
  //i ==to next print true
  //else continue
  //length =1  false or if you reached ghe last elenment false