class Node
{ constructor(data)
{

    this.data=data;
    this.next=null
}}
class LinkedList1
{ constructor()
{  
       this.head=null
}
addNode(data)
{
    let newnode= new Node(data)
    newnode.next=this.head;
this.head=newnode
}
size()
{
    let count=0, current=this.head
    while(current)
    {
        count++
    }
    console.log("size:",count)
    return count
}
print()
{let current=this.head
while(current)
{
    console.log(current.data)
    current=current.next
}
}
}

const ll =new LinkedList1()
ll.addNode(1)
ll.addNode(2)
ll.addNode(3)
ll.addNode(4)
ll.print()