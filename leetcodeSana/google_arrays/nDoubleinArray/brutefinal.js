// Choose a Map when you need key-value pairs and need to associate values with unique keys.
// Choose a Set when you only need to store unique values without any associated values.


// so SET use here

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) { const map=new Set()
    
    let data=0         ;
                           for (let i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) { 
     data=arr[i]/2
 console.log(data)
     map.add(data)    // Using 'arr[i]' instead of 'a[i]'
 }


}
                           
let count =0
                             for (let i = 0; i < arr.length; i++) {
                                console.log('set',map)
                                 if (map.has(arr[i])) {   // Using 'arr[i]' for checking the map
     console.log('this',arr[i]);
count=   count+1
 }  }
                             
                             
                             if(count>0)
                                 return true
                                 else
                                     return false
                             
};


console.log(checkIfExist([10,2,5,3]))