/**
 * @param {number[]} nums
 * @return {boolean}
 */
var BinarySearch = function(nums,target) {
      //console.log(nums,target)
      const len=nums.length;
      let left=0;
      let right=len-1
      while(left<=right)
      {
    let  mid=Math.floor((left+right)/2)
      console.log(mid)


      if(nums[mid]==target)
        {
          return mid
        }
        else if(nums[mid]<target)
            { //mid 0   1   2   3
            //       1 , 2, 3 ,  4
 left=mid+1
           
            }
            else if(nums[mid]>target)
                { //mid 0   1   2   3
                //       1 , 2, 3 ,  4
    right=mid-1
               
                }

            }
                return 'not found'      
};
     const result = BinarySearch([1, 2, 3, 4,8,9,10],8);

  console.log(result);
  
  //TIME COMPLEXITY O( log n)
  //SPACE COMPLEXITY O(1)
  
  //i ==to next print true
  //else continue
  //length =1  false or if you reached ghe last elenment false