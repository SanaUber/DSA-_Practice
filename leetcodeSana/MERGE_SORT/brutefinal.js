function mergeSort(arr)
{
    if(arr.length==1)
    {
        console.log('len 1 ms',arr)
        return arr // alraedy sorted

    }
    let mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    console.log('at part left ms',leftArr)
    console.log('at part right ms',rightArr)

return Merge(mergeSort(leftArr),mergeSort(rightArr))
}
function Merge(leftarr,rightarr)
{
const result=[]
let i=0,j=0;
while(i<leftarr.length && j<rightarr.length)
{
    if(leftarr[i]<rightarr[j])
    {
        result.push(leftarr[i])
        i++
    }
    else if(leftarr[i]>rightarr[j])
    {
        result.push(rightarr[j])
        j++
    }
    console.log('result m',result)

}

console.log('concating m',result.concat(leftarr.slice(i).concat(rightarr.slice(j))))
return result.concat(leftarr.slice(i).concat(rightarr.slice(j)))
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); 
