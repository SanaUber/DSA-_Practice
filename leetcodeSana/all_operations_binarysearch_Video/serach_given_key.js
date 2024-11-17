class Node{
    constructor(data)
    {
        this.value=data;
        this.left=null;
        this.right=null
    }
}
class Binarytree
{
    constructor()
    {
        this.root=null
       }
        addNode(node)
        {
            let currnode= new Node(node)
            if(this.root==null)
          {  this.root=currnode
             }
            else
            this.insertNode(this.root,currnode)
        }
        insertNode(parent,newN)
        {
if(newN.value<parent.value)
{
    if(parent.left==null)
        parent.left=newN
    else
    this.insertNode(parent.left,newN)
}
else
{if(parent.right==null)
    parent.right=newN
else
this.insertNode(parent.right,newN)


}
        }

printTree(node=this.root)
{
    if(node!==null)
       { this.printTree(node.left)
    console.log(node.value)
    this.printTree(node.right)
       }
}
find(node,currnode=this.root)
{ 
    if(node==null)
        return'node is null'
    if(currnode.value==node)
        return currnode;
else if (node < currnode.value) {
    return this.find(node, currnode.left);
} else {
    return this.find(node, currnode.right);
}

     
}
}
let bt= new Binarytree()
bt.addNode(18)
bt.addNode(28)
bt.addNode(8)
bt.addNode(38)
bt.addNode(81)
bt.addNode(80)
bt.addNode(48)
bt.addNode(18)
bt.addNode(80)
bt.printTree()
console.log(bt.find(8))
