function findDisappearedNumbers(nums) { 

    for(let i=0;i<nums.length;i++)
    {
        let index=Math.abs(nums[i])-1//presnt value -
        nums[index]=-Math.abs(nums[i])
        console.log(nums,'index',index)
    }
  let j=0
  for(let i=0;i<nums.length;i++)
  {
    if(nums[i]<0)
        nums[j++]=i+1
    
  }
  return nums.slice(0,j)
};   
console.log(findDisappearedNumbers ([4,3,2,7,8,2,3,1]))