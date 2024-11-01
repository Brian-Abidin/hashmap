import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new Node(value);
    let temp = null;
    if (this.head !== null) temp = this.head;
    this.head = node;
    this.head.nextNode = temp;
  }

  append(value) {
    if (this.head == null) {
      this.prepend(value);
    } else {
      let temp = this.head;
      while (this.head.nextNode !== null) {
        temp = this.head.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }
}
