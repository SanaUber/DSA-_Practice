class MaxPriorityQueue {
    constructor(capacity) {
        this.capacity = capacity; // Set the maximum capacity of the heap
        this.heap = []//dynamic array//new Array(capacity+1); // Initialize the heap array with the given capacity
        this.size = 0; // Keep track of the current size of the heap
    }
  isEmpty()
{
    return  this.size==0
}
getSize() 
{return  this.size

}
 

swim(k)
{//let x=Math.floor(k/2)
    while(k>1 && this.heap[Math.floor(k/2)]<this.heap[k])
    {
        let temp=this.heap[k]
        this.heap[k]=this.heap[Math.floor(k/2)]
        this.heap[Math.floor(k/2)]=temp
        k=Math.floor(k/2)
    }
}
insertQ(element){
 

{    this.heap[(this.size+1)]=element  
    
    this.size++
    this.swim(this.size)
}


}
printheap()
{let n=this.heap.length
    for(let i=0;i<n;i++)
        console.log(';',this.heap[i])
}


deleteMax()
{
    let n=1,l=this.heap.length
    let max= this.heap[1]
console.log(max,this.heap.length)

this.swap( n,l)
//___  n_____________________________________l_____
//__\|55_|_50__|_15__|_0___|__25___|_15____|_5__|
//after swap
//___ ____n_________________________________l_____
//__\|5|_50__|_15__|_0___|__25___|_15____|55|

 ///this.size--
l=this.size--
this.size--; // Reduce the size of the heap
this.heap.pop()
//this.printheap()
this.sink(n)

return max; // Return the deleted max value

//this.printheap()

}
swap(max,last)
{
    let temp=this.heap[max]
    this.heap[max]=this.heap[last]
    this.heap[last]=temp
}

sink(k)
{
while(this.size>=2*k)//to check if have childeren 

    //Check
{ let j = 2 * k; // Left child index
      
    if (j < this.size && this.heap[j] < this.heap[j + 1])              // let max=Math.max(this.heap[n+1],this.heap[n+2])
        {
        j++; // Choose the larger of the two children
    }                                 // let indexof=this.heap.indexOf(max)
   
    if (this.heap[k] >= this.heap[j]) break; // If the parent is larger, stop sinking
    this.swap(k, j); // Swap with the larger child  if(max>this.heap[n])
                                                   //this.swap(indexof,n)
    k = j;                                       // Move down to the next level
   
    

 
}
}
}



let pq = new MaxPriorityQueue(2); // Set the capacity to 5
pq.insertQ(0)
pq.insertQ(15)
pq.insertQ(25)
pq.insertQ(55)
pq.insertQ(50)
pq.insertQ(15)
pq.insertQ(5)
pq.printheap()
pq.deleteMax()
pq.printheap()
console.log(pq.getSize())

console.log(pq.isEmpty())
