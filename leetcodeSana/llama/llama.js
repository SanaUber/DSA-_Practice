 




 
// writecode to integrate the apijavascript:  writecode to integrate the api


// write functions to look for a duplicate in arrayfunction findDuplicate(arr) {
  let seen = {};
  let inputArray = [1, 2, 3, 4, 5, 2, 6, 7, 8, 9];
console.log(findDuplicate(inputArray)); // Output: 2
let inputArray1 = [];
console.log(findDuplicate(inputArray1)); // Output: undefined
let inputArray11 = [1, 2, 3, 4, 5];
console.log(findDuplicate(inputArray11)); // Output: undefined


 function findDuplicate(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return arr[i];
    }
    seen[arr[i]] = true;
  }
  return undefined;
}



