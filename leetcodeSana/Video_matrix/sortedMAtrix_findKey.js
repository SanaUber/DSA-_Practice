function find(m,k,n)
{
    let i=0;
    let j=n-1
    while(i<n && j>=0)
    {
        if(m[i][j]==k)
            return `Found at (${i}, ${j})`;  // Returning both row and column
        if(m[i][j]>k)
j--
else
i++


    }
    
     
}



const matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 51]
];
const key=32
const n=4
console.log(find(matrix,key,n))