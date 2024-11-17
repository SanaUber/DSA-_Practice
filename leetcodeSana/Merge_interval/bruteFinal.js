/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    console.log(intervals)
    //now insert the first interval in anew array
    let newArray=intervals[0]
   // [[intervals[0][0],intervals[0][1]]]
    
 console.log('newArray',newArray)
     
 console.log('newArray length',newArray.length)
for(let i=1;i<intervals.length;i++){
     console.log('say merge',newArray[newArray.length-1][0],intervals[i][0])
 
    if(intervals[i][0]<=newArray [newArray.length-1][1])
    {
        console.log('say merge',newArray [1],intervals[i][0])
        newArray[newArray.length-1][1]=Math.max(  newArray[newArray.length-1][1],intervals[i][1])
        console.log('newArrayM',newArray)
    }
    else
    {console.log('no merge')

        newArray.push(intervals[i])
        console.log('newArrayNM',newArray)
    }
}




return newArray
}
  const result = merge([[ 1, 3 ], [ 2, 7 ], [ 8, 10 ],[13,16]]);
  console.log(result);