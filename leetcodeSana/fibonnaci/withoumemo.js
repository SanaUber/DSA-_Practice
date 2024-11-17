function fibonacci(n) {
    // Base case: If n is 0 or 1, return n
    if (n <= 1) {                    // Line 2
        return n;                    // Line 3
    }
    console.log(n)
    // Recursive calls to compute fibonacci(n-1) and fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);  // Line 6
}

// Example call: fibonacci(5)
console.log(fibonacci(10));  // Output: 5