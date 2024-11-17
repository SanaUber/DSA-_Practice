class ListNode {
    constructor(data)
    {
        this.data=data 
        this.next=null    }
}
class SinglyLinkedList {
    constructor() {
      this.head = null;
    }

  addAtHead(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

   printList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' --> ';
      current = current.next;
    }
    console.log(result + 'null');
  }}

// Testing the Singly Linked List
const sll = new SinglyLinkedList();
sll.addAtHead(10);
sll.addAtHead(1);
sll.addAtHead(8);
sll.addAtHead(11);
sll.printList(); 