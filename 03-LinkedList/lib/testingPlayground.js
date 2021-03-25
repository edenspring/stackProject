// TODO: Implement the addToTail method here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addToTail(val) {
    const newNode = new Node(val);
    const oldTail = this.tail;
    if (oldTail) {
      oldTail.next = newNode;
    }
    if (!this.head) {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newHead = new Node(val);
    const oldHead = this.head;
    if (!this.tail) {
      this.tail = newHead;
    }
    this.head = newHead;
    newHead.next = oldHead;
    this.length++;
    return this;
  }
}

const ll = new LinkedList();

console.log(ll.addToHead(1));
