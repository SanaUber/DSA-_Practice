function countEvenDigits(nums) {
    let count = 0;
  
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
      // Convert number to string and check if the length (number of digits) is even
      if (nums[i].toString().length % 2 === 0) {
        count++;
      }
    }
  
    return count;
  }
  
  // Test cases
  const result1 = countEvenDigits([12, 345, 2, 6, 7896]);
  console.log('Result 1:', result1); // Output: 2
  
  const result2 = countEvenDigits([555, 901, 482, 1771]);
  console.log('Result 2:', result2); // Output: 1
  