function findPowersOf2(limit) {
    function recurse(current) {
        // Base case: Stop recursion if the current power of 2 is greater than the limit
        if (current > limit) {
            return;
        }

        // Print the current power of 2
        console.log(current);

        // Recursive case: Call the function with the next power of 2
        recurse(current * 2);
    }

    // Start recursion with the smallest power of 2
    recurse(1);
}

// Example usage: Find powers of 2 up to 50
findPowersOf2(50);
