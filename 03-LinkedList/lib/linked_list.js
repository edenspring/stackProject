// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
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

  // TODO: Implement the addToTail method here
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

  // TODO: Implement the removeTail method here
  removeTail() {
    //remove tail
    if (!this.length) return undefined;
    const oldTail = this.tail;
    const newTail = this.get(this.length - 2);
    if (newTail) {
      newTail.next = null;
    }

    this.tail = newTail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return oldTail;
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

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return;
    const oldHead = this.head;
    const newHead = this.head.next;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = newHead;
    this.length--;
    return oldHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let head = this.head;
    while (head) {
      if (head.value === target) return true;
      head = head.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index < 0) return null;
    if (this.length === 0) return null;
    if (index > this.length) return null;
    let head = this.head;
    let counter = 0;
    while (counter < index) {
      head = head.next;
      counter++;
    }
    return head;
  }

  // TODO: Implement the set method here
  set(index, val) {
    const nodeAtIndex = this.get(index);
    if (!nodeAtIndex) return false;
    nodeAtIndex.value = val;
    return true;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    const nodeAtIndex = this.get(index);
    let priorNode = this.get(index - 1);
    if (index > this.length && index > 0) return false;
    this.length++;
    const newNode = new Node(val);
    if (priorNode) priorNode.next = newNode;
    newNode.next = nodeAtIndex;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index > this.length) return undefined;
    const nodeAtIndex = this.get(index);
    const priorNode = this.get(index - 1);
    priorNode.next = nodeAtIndex.next;
    this.length--;
    return nodeAtIndex;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
