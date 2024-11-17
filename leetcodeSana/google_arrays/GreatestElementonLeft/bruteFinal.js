function GreatestElementonLeft(arr) {
    // Initialize the greatest element to -1 (which will replace the last element)
    let maxRight = -1;

    // Traverse the array from the end to the beginning
    for (let i = arr.length - 1; i >= 0; i--) {
        // Store the current element
        let current = arr[i];
          // Replace the current element with the max element on the right
        arr[i] = maxRight;
           
        // Update the maxRight with the larger value between current and maxRight
        maxRight = Math.max(maxRight, current);
}

    return arr;
}
console.log(GreatestElementonLeft([17,18,5,4,6,1]))