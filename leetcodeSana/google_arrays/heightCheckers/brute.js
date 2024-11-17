/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) { const map=new Map();let max=0,count=0,l=0,r=heights.length-1
    //const max=Math.max(heights)
       for(let i=0;i<heights.length;i++)
            {
if(max<heights[i])
   { max=heights[i]
map.set(heights[i],i)}


      if(heights[i]>heights[i+1])
                    {
                         
                        count++
                    }
          //     console.log(map,heights,count)  
            }
                                           console.log(count,max)
                               
                                           


                                           for(let i=0;i<r;i++)
                                           {
                                            
                                            if(heights[i]==max)
                                            {
                                                temp=heights[r]
                                                heights[r--]=heights[i]
                                                heights[i]=temp
                                            }
                                           }
                                           console.log(heights);    if(count==0)
                        {return 0}
                    else
                        return count
                                   
                                               
    };

    console.log(heightChecker([1,1,4,2,1,3]))