/**
 * @param {number[]} nums
 * @return {boolean}
 */
var BinarySearch = function(nums,target,left,right) {
    //console.log(nums,target)
    //const len=nums.length;
    // let left=0;
    // let right=len-1
   let mid=Math.floor((left+right)/2)
   // console.log(mid)
   if (left > right) {
    return -1;  // Base case: target not found
}     
    if(nums[mid]==target)
      {
        return mid
      }
      else if(nums[mid]<target)
          { //mid 0   1   2   3
          //       1 , 2, 3 ,  4 2<4t
          //mid shifts to right side
          left = mid+1 
return BinarySearch(nums,target, left,right 
);
}
else if(nums[mid]>target)
              { //mid 0   1   2   3
              //       1 , 2, 3 ,  4
              //mid 0   1   2   3
          //       1 , 2, 3 ,  4 4>2t
          //mid shifts to right side
  right = mid-1 
                return BinarySearch(nums,target,left,right);
              }

            
 };
   const result = BinarySearch([1, 2, 3, 4,8,9,10,111,222,999],990,0,9);

console.log(result);

//TIME COMPLEXITY O(log n)
//SPACE COMPLEXITY O(log n)

//i ==to next print true
//else continue
//length =1  false or if you reached ghe last elenment false