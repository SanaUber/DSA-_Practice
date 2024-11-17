var checkIfExist = function(arr) { let left=0,right=arr.length-1
    for(let i=0;i<arr.length;i++)
        { for(let j=0;j<arr.length;j++)
            if(arr[i]==2*arr[j])
                count=count+1
 
                
        }
                                  if(count>0)
                                      return true
                                  else
                                      return false
    
};