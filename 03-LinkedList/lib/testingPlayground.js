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

  get(index) {
    if (this.length === 0) return null;
    if (index > this.length) return null;
    let head = this.head;
    //console.log(this.length)
    for (let i = 1; i <= this.length; i++) {
      // console.log(head)
      let nextHead = head.next;
      if (index === i) {
        // console.log('This should match: ', head)
        // console.log(`Match! Index : ${index}    i : ${i}`)
        return head;
      }
      head = nextHead;
    }
  }

  insert(index, val) {
    const nodeAtIndex = this.get(index);
    const priorNode = this.get(index - 1);
    if (index > this.length && index > 0) return false;
    this.length++;
    const newNode = new Node(val);
    if (priorNode) priorNode.next = newNode;
    newNode.next = nodeAtIndex;
    return true;
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
}

const linkedList = new LinkedList();

// ll.addToHead(4);
// ll.addToHead(3)
// ll.addToHead(2)
// ll.addToHead(1)
// // console.log(ll.get(3))

// console.log(ll.length)
// ll.insert(1,2)
// console.log(ll.length)
linkedList.addToTail("B");
linkedList.addToTail("C");
linkedList.addToTail("E");
console.log('Should be 3 : ', linkedList.length)
linkedList.insert(2, "D");
console.log(linkedList.length)
linkedList.insert(0, "A");
console.log(linkedList.length)
linkedList.insert(4, "F");
console.log(linkedList.length)
