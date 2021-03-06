// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below using a NODE implementation
// (your Stack should not contain any built-in JavaScript Arrays)
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

/*
Node constructor should take in value and set: this.value = value, this.next = null;

Stack constructor : takes no value, sets properties of this.top = null, this.length = 0;

Stack methods:
  push(node) O(1)
    --pushes new element to beginning (LIFO)
  pop()      O(1)
    --removes first element (LIFO)
  size()     O(1)
    --return size of stack
*/

class Node {
  //value and next
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  //this.length
  //we can add peek if we want

  constructor() {
    this.length = 0;
    this.top = null;
  }

  push(value) {
    let oldTop = this.top;
    this.length++;
    let node = new Node(value);
    this.top = node;
    node.next = oldTop;
    return this.size();
  }

  pop() {
    if (!this.top) {
      return null;
    }
    let currentTop = this.top;
    this.top = currentTop.next;
    currentTop.next = null;
    this.length--;
    return currentTop.value;
  }

  size() {
    return this.length;
  }

  peek() {
    return this.top;
  }
}

exports.Node = Node;
exports.Stack = Stack;
