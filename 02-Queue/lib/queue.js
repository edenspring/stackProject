// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.length = 0;
    this.back = null;
    this.front = null;
  }

  enqueue(value){
    const oldNode = this.back;
    const newNode = new Node(value);
    this.length++;
    if (this.front === null && this.back === null) {
      this.front = newNode
    }
    this.back = newNode;
    if (oldNode) oldNode.next = newNode;
    return this.length;
  }

  dequeue(){
    if (this.length === 0) return null;
    const frontNode = this.front;
    this.front = frontNode.next;
    if (this.length === 1) {
      this.front = null;
      this.back  = null;
    }
    this.length--;
    return frontNode.value;
  }

  size(){
    return this.length;
  }

  peek(){
    return this.front.value;
  }
}

exports.Node = Node;
exports.Queue = Queue;
