function Movezeros(arr) {const n=arr.length-1;let countzero=0,temp=0
    if(n<1)
    {return arr}
                              for(let i=0;i<n-1;i++)
      {
          if(arr[i]==0)
             {  countzero=countzero+1
            
              
             }
      }
          let pointer=0   ;let valPos=(n-countzero )   ;let valPosD=0
          console.log('countzero:',countzero,'valPos:',valPos,'n:',n)
           
    while(pointer<=n)
        {
            if(arr[pointer]!=0)
                {temp=arr[pointer]
                    arr[pointer]=0
                   arr[ valPosD++]=temp
                   
                   
                } 
                pointer++  
            
            console.log(arr,pointer)
           
        }
                return arr
            };                
                 
    

console.log(Movezeros([1,0]))