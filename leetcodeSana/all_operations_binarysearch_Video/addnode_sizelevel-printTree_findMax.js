class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Add node to the tree
    addNode(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper function to insert node in the correct place
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Calculate the size of the tree (number of nodes)
    sizeByLevel(node = this.root) {
        if (node === null) {
            return 0;
        }
        const leftHeight = this.sizeByLevel(node.left);
        const rightHeight = this.sizeByLevel(node.right);

        // Return the maximum height between left and right subtree, plus 1 for the current level
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Print the tree in in-order traversal (left-root-right)
    printTree(node = this.root) {
        if (node !== null) {
            this.printTree(node.left);
            console.log(node.value);
            this.printTree(node.right);
        }
    }




    findMax(root=this.root){let result
        if(this.root==null)
         return-Infinity
            else
      {  if(root)
           { result=root.value
            console.log('~',result)}
            while(root)
{
let left=this.findMax(root.left)
console.log('l',left,'`',root.left)
let right=this.findMax(root.right)
console.log('r',right,'`',root.right)
if(left>result)
     result=left
    else if(right>result)
        result=right
          return result } }
    }
}

// Example usage
let t = new Tree();
t.addNode(51);
t.addNode(50);
t.addNode(45);
t.addNode(53);
console.log("Size of tree:", t.sizeByLevel());
t.printTree();
console.log(t.findMax())