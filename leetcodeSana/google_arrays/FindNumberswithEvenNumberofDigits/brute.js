function recursivediv(nums)
{const map=new Map();
for(let i=0;i<nums.length;i++)
{let count=0;let orignal=0;let even=Boolean
    orignal=nums[i]
    if(nums[i]!=0)
    {
        while(nums[i]!=0)
        {nums[i]=Math.floor(nums[i]/10)

        count=count+1
        console.log(nums[i],count)
    }
    if(count%2==0)
         even=true
    else even=false
map.set(orignal,{count,even})
    }
}
return map
}


const value=recursivediv([12,345,2,6,7896])
 console.log('value',value)
