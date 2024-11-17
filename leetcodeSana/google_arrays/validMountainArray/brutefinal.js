
function validMountainArray(arr)
{
    let n=arr.length
    if(n<3)
        return false
    let i=0
    while(i+1<n-1 && arr[i]<arr[i-1])//walk up
    i++;
    if(i==0||i==n-1)
        return false
    while(i+1<n-1 && arr[i]>arr[i+1])//walk down
    i++
    return i===n-1

}
console.log(validMountainArray([2,1]))