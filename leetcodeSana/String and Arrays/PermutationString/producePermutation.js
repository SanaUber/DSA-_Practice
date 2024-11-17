function permutation(str)
{
console.log(str.split(''))

const arr=str.split('').sort()
const len=arr.length-1;
function generate(l,r){
    if(l==r)
        console.log(arr.join(''))

else{for(let i=0;i<=r;i++)
{ console.log('==',arr)

    swap(arr,l,i)
generate(l+1,r)
// Once the base case is hit and handled, the recursive call starts to return. 
// The control returns to the previous state, back where the loop was at the current level.
swap(arr,l,i)
}

}
}
function swap(array,k,l)
{
[array[k],array[l]]=[array[l],array[k]]
console.log('swap',array)
}
generate(0,len)


}


const stringComb=permutation("ABC");
console.log(stringComb);