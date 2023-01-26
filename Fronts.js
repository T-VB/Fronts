//First, need to create a class for the nodes itself
class SLLNode {
  constructor(val) {
    this.value = val; //this will hold the new nodes value
    this.next = null; //pointer: this points to the next node, initially set to null
  }
}

//Second, need to create a class for the list itself
class SLL {
  constructor() {
    //starting with an empty list, so do not include any node value in the constructor to start
    this.head = null; //pointer: this points to the first node(head), set it to null to start
  }
  //***ensure all methods are listed below WITHIN this class (SLL)

  // 1) Add Front
  // ^Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
  addFront(value) {
    //given a value, pass in to the addFront method
    var newNode = new SLLNode(value); //this creates a new instance of the SLLNode method, initialized to newNode
    newNode.next = this.head; // this connects the new node to the list, as it's new head
    this.head = newNode; //set the newNode to the head
    return this;
  }

  // 2) Remove Front
  // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

  removeFront() {
    //***add an edge case, since we start with an empty list
    if (this.head == null) {
      return this.head; // should return the lists head as null - (SLL {head:null});
    }
    var removedNode = this.head; //initialize a var for the removedNode and set it to the head
    this.head = removedNode.next; //setting the new head to the node next to the removedNode
    removedNode.next = null; //this makes sure the removedNode is not pointing to anything, specifically the next node in line
    return this.head;
  }

  // 3) Front
  //return only the VALUE at the front of the list, not the entire list
  front() {
    //add edge case, if list is empty to begin with
    if (this.head == null) {
      return null;
    }
    return this.head.value;
    //OR, you can use a ternary operator:
    //return this.head == null ? null: this.head.value //this is saying 'if the head is null, return null, otherwise set this value as the head
  }
}

SLL1 = new SLL();
SLL1.addFront(18); //=> Node { data: 18, next: null }
console.log(SLL1); //return new list
SLL1.addFront(5); //=> Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1);
SLL1.addFront(73); //=> Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
console.log(SLL1);
console.log(SLL1.head.next); //this will print the 2nd node in the list

SLL1.removeFront();
console.log(SLL1);

SLL1.front(); //=> 18
SLL1.removeFront(); //=> null
SLL1.front(); //=> null
console.log(SSL1);
