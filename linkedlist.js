import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(key, value) {
    const node = new Node(key, value);
    console.log(node);
    let temp = null;
    if (this.head !== null) temp = this.head;
    this.head = node;
    this.head.nextNode = temp;
  }

  append(key, value) {
    if (this.head == null) {
      this.prepend(key, value);
    } else {
      let temp = this.head;
      while (this.head.nextNode !== null) {
        temp = this.head.nextNode;
      }
      temp.nextNode = new Node(key, value);
    }
  }

  size() {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      count += 1;
      temp = temp.nextNode;
    }
    return count;
  }

  removeAt(index) {
    if (this.head === null) return "list is empty";
    let temp = this.head;
    if (index === 0) {
      this.head = temp.nextNode;
      return true;
    }
    for (let i = 0; i < this.size(); i += 1) {
      if (i === index - 1) {
        temp.nextNode = temp.nextNode.nextNode;
        return true;
      }
      temp = temp.nextNode;
    }
  }
}
