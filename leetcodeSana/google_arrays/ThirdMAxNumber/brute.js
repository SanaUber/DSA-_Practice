function thirdMax  (nums) {let n=nums.length-1, k=nums.length,temp=0,l=0,count=0,maxnum=0,j=1,p=0
    for(let i=1;i<nums.length;i++)
     {if(nums[i]!=nums[i-1])
{count++
    nums[j]=nums[i]
    j++
    }
    else if(nums[i]==nums[i-1] && n<=2)
    { count++}
     }
     //total non unique values
     maxnum=k-count
        console.log(nums)
     console.log('maxnum',maxnum)
      console.log('count',count)
     for(let l=0;l<count;l++)
    { p=count
        while(p>l)
{
    if( nums[l]>nums[p])
    {
        p--
    }
    else if( nums[l]<nums[p])
   { temp=nums[l]
nums[l]=nums[p]
nums[p]=temp
p--
}
else
{nums[count--]
    p--;

}
 
}}
console.log('after',nums)

       //total unique is  count
     if(count>=3)
        {console.log('3: maximum possible')
            temp=nums[2]
        }
        else if(n<=2 && count==1)

       { console.log('',count,':','maximum possible only as length is 2')
    
    temp=nums[0]}

        else

       { console.log('',count,':','maximum possible only')
    
    temp=nums[0]}


   
  return temp
    
};
console.log(thirdMax([1,2]))