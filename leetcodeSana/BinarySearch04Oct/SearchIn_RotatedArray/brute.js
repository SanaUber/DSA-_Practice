//The number of times you can halve the array before you run out of elements is //proportional to log₂(n), where n is the number of elements in the array.



function findTargeInselection(nums,target)
{
    let l=0;let r=nums.length-1
//lets find the pivot

//[4,5,6,7,0,1,2] pivot iis at 3
//nums is 7

while(l<=r)//0to7
{
    let pivot=Math.floor(nums.length/2);

if(nums[pivot]>target)//7>0
{
if(nums[l]>target)//4>0
{

l=pivot+1
console.log(nums[pivot],'nums[l]',nums[l])

}
else
{r=pivot-1
console.log(nums[pivot],'nums[r]',nums[r])
}

}
 
if(nums[pivot]<target)//0>7
{
if(nums[pivot]<target)//4>0
{

l=pivot+1

console.log(nums[pivot],'in less nums[l]',nums[l])

}
else
{r=pivot-1
console.log(nums[pivot],'in less nums[r]',nums[r])

}


}

}

}

console.log(findTargeInselection([4,5,6,7,0,1,2],0));

