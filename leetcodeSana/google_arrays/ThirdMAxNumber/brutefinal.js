function thirdMax (nums) { let temp=0

    nums=nums.sort((a,b)=>a-b)
    
console.log('after',nums)

let j=1,count=0
//remove duplicates
for(let i=1;i<nums.length;i++)
{
    if(nums[i]!=nums[i-1])
    {count++
nums[j]=nums[i]
j++
    }
}
//unique nums are count

console.log('unique numbers',count,nums)
if(count==0)
{
    temp=nums[0]
}
else if (count<2)
{
    temp=nums[1]
}
 else if (count>=2)
    { 
        temp=nums[count-2]
    }         
    console.log(temp)
    return temp
};
console.log(thirdMax([1,2,2,5,3,5]))