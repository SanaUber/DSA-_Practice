const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Define the matrix elements
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Draw the matrix on the canvas
function drawMatrix(matrix) {
    const size = 100; // each cell size
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.clearRect(j * size, i * size, size, size);
            ctx.strokeRect(j * size, i * size, size, size);
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(matrix[i][j], j * size + size / 2, i * size + size / 2);
        }
    }
}

// Perform the displacement as described
function rotateMatrix() {
    // Swap the elements according to the displacement rule
    let temp = matrix[0][0]; // store the top-left element

    matrix[0][0] = matrix[1][0];  // 3 moves to top-left
    matrix[1][0] = matrix[2][2];  // 9 moves to bottom-left
    matrix[2][2] = matrix[0][2];  // 7 moves to bottom-right
    matrix[0][2] = temp;          // 1 moves to top-right

    // Redraw the matrix with the displaced elements
    drawMatrix(matrix);
}

// Initially draw the matrix
drawMatrix(matrix);
