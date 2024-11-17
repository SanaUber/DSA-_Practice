function rotate(matrix) {
    const n = matrix.length;
console.log('length of matrix:',n)
    for (let layer = 0; layer < Math.floor(n / 2); layer++)
        
//         Layer 0 includes elements (1, 2, 3, 4, 6, 7, 8, 9).
// Layer 1 only includes the center element (5) if it exists.
// Half the Size: You only need to iterate through half of the layers 
// because each layer's rotation affects the next layer's
//  elements. For example, rotating layer 0 affects layer 1 
//  and vice versa, so iterating through Math.floor(n / 2) ensures you only perform necessary rotations.

// Preventing Redundant Work: If n is odd, Math.floor(n / 2)
//  will ignore the center element (which doesn’t need rotation).
//   If n is even, it handles all layers without redundancy.
        
        {
        const first = layer;//0
        const last = n - 1 - layer;//3
//-layer because we have reduce the circumfrence of rotating
//`"C:\leetcodeSana\rotationMatrix\new1.png"
//https://www.google.com/search?q=neetcode+rotation+matri&oq=neetcode+rotation+matri&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKAB0gEJMTU5ODNqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:64a92ca6,vid:fMSJSS7eO1w,st:0
        for (let i = first; i < last; i++) {
            const top = matrix[first][i]; 

            // Move bottom left to top left
            matrix[first][i] = matrix[last - i + first][first];

            // Move bottom right to bottom left
            matrix[last - i + first][first] = matrix[last][last - i];

            // Move top right to bottom right
            matrix[last][last - i] = matrix[i][last];

            // Move top left to top right
            matrix[i][last] = top;
        }
    }
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
console.log(matrix);

rotate(matrix);

console.log("Rotated Matrix:");
console.log(matrix);
