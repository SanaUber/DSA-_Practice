class Node{
    constructor(data)
    {
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor()
    {     this.head=null     
    }

    addLL(data){//swapping
        let newnode=new Node(data)
        newnode.next=this.head
        this.head=newnode

    }
    
    size(){
        let current=this.head,count=0
        while(current)
        {
count++
console.log('size:',count)
current=current.next
        }
        return count
    }
    addatLL(data,index){//swapping
        let newnode=new Node(data)
        let current =this.head 

        if(index<0||index>llist.size())
        {
            console.log('invalid')
        }
        else if(index==0)
        { newnode.next=this.head
            this.head=newnode
           
        }
        
        else
      {  for (let i=0;i<index-1;i++)
         {
            current=current.next
             

}
newnode.next=current.next
current.next=newnode
}

    }

    removeatLL(index){//swapping
        let current =this.head,count=0
        if(index<0||index>llist.size())
        {
            console.log('invalid')
        }
       

 else if(index==0)
    this.head=this.head.next
else
       {
        
        
        for(let i=0;i<index-1;i++)
         {
            count++
            current=current.next
            console.log('at:',count)

}}
current.next=current.next.next
 
    }
    printlinkedlist()
    {
        let current=this.head
        while(current)
        {    console.log(current.data)
            current=current.next
}    }
}

const llist=new LinkedList()
llist.addLL(9)
llist.addLL(10)
llist.addLL(11)
llist.addLL(12)
llist.addatLL(345,0)
llist.printlinkedlist()
llist.removeatLL(0)
//llist.size()
llist.printlinkedlist()
