   function majorityElement(A) {
        const len = A.length;
        const map = new Map();

        // Count the frequency of each element
        for (let i = 0; i < len; i++) {
            if (map.has(A[i])) {
                map.set(A[i], map.get(A[i]) + 1);
            } else {
                map.set(A[i], 1);
            }
        }
        console.log(map)
let value1=0;let s=[],sa=[]
        // Find the element that appears more than floor(len / 2) times
        for (let [key, value] of map) {
              if(value>=value1)
                {value1=value;
            sa=[key, value]}
           
        }
    for (let [key, value] of map) {
        if(value==value1)
          { 
      s.push([key, value])}
     
  }
            
       
        return s;  // This line won't be reached because the problem guarantees a majority element
    }
 
const majorityElementdata=majorityElement([1,2,3,3,4,2,3,2,4,4])
console.log(majorityElementdata)