function sortedSquaredArray(nums)
{
    for(let i=0;i<nums.length;i++)
    {
        nums[i]=nums[i]*nums[i]
    }
    console.log(nums)
let l=0,r=0,k=0,temp
    for(let i=nums.length;i>0;i--)
        {
           l=i-1 ;temp=nums[i]
           while(l<nums.length)
           {
            if(nums[i]<nums[l])
            {
                nums[i]=nums[i-1]
                nums[i-1]=temp
                
            }
            l--
           }
        }
return nums
}


console.log(sortedSquaredArray([-4,-1,0,3,10]))