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
   let lenarr=intervals.length
   lenarr=lenarr-1
 console.log('lenarr',lenarr)
 if(lenarr>0)
{   for(let i=0;i<lenarr;i++)
   {
    console.log('lena---rr',lenarr,i)
     {console.log('data1',intervals[i][1],'data2',intervals[i+1][0])
 if( intervals[i][1]>=intervals[i+1][0])

{ if(intervals[i+1][1]>intervals[i][1])
   { intervals[i]=[intervals[i][0],intervals[i+1][1]]
    intervals.splice((i+1), 1);}
else
   { intervals[i]=[intervals[i][0],intervals[i][1]]
    intervals.splice((i), 1);}
  console.log('merge',intervals[i],intervals[i+1])
 
 
 lenarr=lenarr-1
  console.log('here',intervals)
 }
 //merge them
 else
 {console.log('no')
   
 }
}
}}
 
return intervals
}
  const result = merge([[ 0, 2 ], [ 1, 4 ], [ 3, 5 ]]);
  console.log(result);