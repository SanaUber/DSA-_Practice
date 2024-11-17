/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let possibleval=0
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]==val)
                {possibleval++
            nums[i]='_'}
        }
     console.log('orignal',nums)        
        
    let totalnonval=nums.length-possibleval
    let i=0,k=nums.length-1
    while(i<=k)
        {
            if(nums[i]=='_')
             
            {
                
                 if(nums[k]!='_')
                {   
              nums[i]=nums[k]
                 nums[k]='_'
                i++
                k--}
             else
                {   
                 k--}
            
            }
            else
                { console.log('here')        
        
                    i++}
        console.log(nums)        
        }
    console.log(nums,totalnonval)
    
    return nums
};