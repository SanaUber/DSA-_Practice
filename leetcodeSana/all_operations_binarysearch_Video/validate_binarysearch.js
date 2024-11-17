class Node
{
    constructor(data)
    {
        this.value=data
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor ()
    {this.root=null}
    addNode(node1)
    { let node=new Node(node1)
        if(this.root==null)
        {
            this.root=node
        }
        else
        this.insertNode(this.root,node)
    }
    insertNode(parent,node)
    {
        if(node.value<parent.value)
    {
        if(parent.left==null)
        {
            parent.left=node
        }
        else
        this.insertNode(parent.left,node)
    }
    else
    {
        if(parent.right==null)
        {
            parent.right=node
        }
        else
        this.insertNode(parent.right,node)
    }}
     
//     print(currentnode=this.root)
//     {
//        // let currentnode=this.root
//         if(currentnode)

//   {  this.print(currentnode.left)      
//        console.log(currentnode.value)
  
//        this.print(currentnode.right)
 
// } 
//   }
         
print(currentnode=this.root)
{
    if(this.root==null)
        return null
    let q=[currentnode]
    while(q.length>0)
    {
        let node=q.shift()
        console.log(node.value)

        // Add left child to the queue
        if (node.left != null) {
            q.push(node.left);
        }

        // Add right child to the queue
        if (node.right != null) {
            q.push(node.right);}
    
    }
}



}
let bt=new BinaryTree()
bt.addNode(8)
bt.addNode(18)
bt.addNode(29)
bt.addNode(80)
bt.addNode(19)
bt.addNode(68)
bt.addNode(999)
bt.print()