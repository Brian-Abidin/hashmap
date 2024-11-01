export default class Node {
  constructor(key, value) {
    this.value = `${key}: ${value}`;
    this.nextNode = null;
  }
}
