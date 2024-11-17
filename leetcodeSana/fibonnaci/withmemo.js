function fibonacciMemo(n, memo = {}) {
    // Base case: If n is 0 or 1, return n
    if (n <= 1) {                    // Line 2
        return n;                    // Line 3
    }
    console.log('hh',n)
    // Check if result is already in memo
    if (memo[n]) {                   // Line 6
        return memo[n];              // Line 7
    }
    console.log(n)
    // Recursive calls, and store result in memo
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);  // Line 10

    return memo[n];                  // Line 12
}

// Example call: fibonacciMemo(5)
console.log(fibonacciMemo(10));  // Output: 5
